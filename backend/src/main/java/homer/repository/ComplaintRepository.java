package homer.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import homer.model.EnrichedComplaint;

public interface ComplaintRepository extends MongoRepository<EnrichedComplaint, Long>{
}
