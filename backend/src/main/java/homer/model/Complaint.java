package homer.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "complaints")
public class Complaint {
	private final String userId;
	private final String subject;
	private final String complaint;
	private final String purchaseId;
	private final String status;
}