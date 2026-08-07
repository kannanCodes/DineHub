import { IRestaurant } from "../../infrastructure/database/models/restaurant.model";

export interface IRestaurantRepository {

     findAll(): Promise<IRestaurant[]>;

     findById(id: number): Promise<IRestaurant | null>;

     create(data: Omit<IRestaurant, 'id'>): Promise<IRestaurant>;

     update(
          id: number,
          data: Partial<IRestaurant>
     ): Promise<IRestaurant | null>;

     delete(id: number): Promise<boolean>;
}