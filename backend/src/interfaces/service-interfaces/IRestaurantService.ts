import { IRestaurant } from "../../infrastructure/database/models/restaurant.model";

export interface IRestaurantService {

     getAllRestaurants(): Promise<IRestaurant[]>;

     getRestaurantById(id: number): Promise<IRestaurant>;

     createRestaurant(
          data: Omit<IRestaurant, 'id'>
     ): Promise<IRestaurant>;

     updateRestaurant(
          id: number,
          data: Partial<IRestaurant>
     ): Promise<IRestaurant>;

     deleteRestaurant(id: number): Promise<void>;
}