package homer;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.stereotype.Component;

import homer.model.Purchase;
import homer.model.User;

@Component("ExternalService")
public class MockExternalServices implements IExternalServices {

    private Map<String, Purchase> purchaseMap = Map.of(
            "f256c996-6dcb-40cf-8dce-a11fa9bcab6b",
            new Purchase(
                    "f256c996-6dcb-40cf-8dce-a11fa9bcab6b",
                    "a93adc57-4d59-4a9d-85c6-b5d48d99101d",
                    "4ac9da0b-66eb-415c-9153-a59ec0b3c3fe",
                    "Book",
                    13.2,
                    "USD",
                    0.1,
                    "71e234d2-dc65-41ff-bada-9d08d82fc6d1",
                    LocalDateTime.of(2020, 11, 20, 22, 0)));

    private Map<String, User> usersMap = Map.of(
            "a93adc57-4d59-4a9d-85c6-b5d48d99101d",
            new User("a93adc57-4d59-4a9d-85c6-b5d48d99101d",
                    "John Doe",
                    "johndoe@test.com",
                    "Test Lane 1 Los Angeles"));

    @Override
    public Purchase getPurchase(String id) {
        return purchaseMap.get(id);
    }

    @Override
    public User getUser(String id) {
        return usersMap.get(id);
    }

}
