import { IRestaurant } from "../infrastructure/database/models/restaurant.model";
import { IRestaurantRepository } from "../interfaces/repository-interfaces/IRestaurantRepository";
import { IRestaurantService } from "../interfaces/service-interfaces/IRestaurantService";
import { AppError } from "../shared/utils/AppError";
import { MESSAGES } from "../constants/messages";


export class RestaurantService implements IRestaurantService {
     constructor(private repo: IRestaurantRepository) { }

     async getAllRestaurants(): Promise<IRestaurant[]> {
          return this.repo.findAll();
     }

     async getRestaurnatById(id: number): Promise<IRestaurant> {
          const restaurant = await this.repo.findById(id);

          if (!restaurant) {
               throw new AppError(MESSAGES.RESTAURANT.NOT_FOUND, 404)
          }
          return restaurant;
     }

     async createRestaurant(data: Omit<IRestaurant, "id">): Promise<IRestaurant> {
          return this.repo.create(data)
     }

     async updateRestaurant(id: number, data: Partial<IRestaurant>): Promise<IRestaurant> {
          const updated = await this.repo.update(id, data);

          if (!updated) {
               throw new AppError(MESSAGES.RESTAURANT.NOT_FOUND, 404);
          }

          return updated;
     }
     
     async deleteRestaurant(id: number): Promise<void> {
          const deleted = await this.repo.delete(id);
          if (!deleted) {
               throw new AppError(MESSAGES.RESTAURANT.NOT_FOUND, 404);

          }

     }

}