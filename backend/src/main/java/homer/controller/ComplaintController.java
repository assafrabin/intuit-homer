package homer.controller;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import homer.IExternalServices;
import homer.model.Complaint;
import homer.model.EnrichedComplaint;
import homer.repository.ComplaintRepository;

@RestController
public class ComplaintController {
    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private IExternalServices externalServices;

    @GetMapping("/complaints")
    public ResponseEntity<List<EnrichedComplaint>> getAllComplaints() {
        return new ResponseEntity<>(complaintRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/complaints")
    public ResponseEntity<EnrichedComplaint> createComplaint(@RequestBody Complaint complaint) {
        EnrichedComplaint enrichedComplaint = new EnrichedComplaint(
                complaint,
                externalServices.getPurchase(complaint.getPurchaseId()),
                externalServices.getUser(complaint.getUserId()));
        EnrichedComplaint persistedComplaint = complaintRepository.save(enrichedComplaint);
        return ResponseEntity
                .created(URI
                        .create(String.format("/complaints/%s", complaint.getUserId())))
                .body(persistedComplaint);
    }
}