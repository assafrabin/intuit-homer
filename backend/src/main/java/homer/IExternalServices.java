package homer;

import homer.model.Purchase;
import homer.model.User;

public interface IExternalServices {

    public Purchase getPurchase(String id);

    public User getUser(String id);
    
}