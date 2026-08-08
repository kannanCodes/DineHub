import { BaseRepository } from "../infrastructure/database/repositories/base/base.repository";
import { Restaurant } from "../infrastructure/database/models/restaurant.model";
import { IRestaurantRepository } from "../interfaces/repository-interfaces/IRestaurantRepository";

export class RestaurantRepository extends BaseRepository <Restaurant> implements IRestaurantRepository{
     constructor(){
          super(Restaurant);
     }
}