package homer.model;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class Purchase {
    private final String Id;
    private final String userId;
    private final String productId;
    private final String productName;
    private final Double pricePaidAmount;
    private final String priceCurrency;
    private final Double discountPercent;
    private final String merchantId;
    private final LocalDateTime purchaseDate;
}
