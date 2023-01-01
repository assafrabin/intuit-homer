package homer.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "enriched-complaints")
public class EnrichedComplaint{
	private final Complaint complaint;
	private final Purchase purchase;
	private final User user;
}