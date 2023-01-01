package homer.model;

import lombok.Data;

@Data
public class User {
    private final String Id;
    private final String fullName;
    private final String emailAddress;
    private final String physicalAddress;
}
