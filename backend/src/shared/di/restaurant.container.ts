import { RestaurantRepository } from "../../repositories/RestaurantRepository";
import { RestaurantService } from "../../services/RestaurantService";
import { RestaurantController } from "../../controllers/RestaurantController";

const restaurantRepository = new RestaurantRepository();

const restaurantService = new RestaurantService(
  restaurantRepository
);

export const restaurantController = new RestaurantController(
  restaurantService
);