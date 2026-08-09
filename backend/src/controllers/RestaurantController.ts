import { Request, Response, NextFunction } from "express";
import { IRestaurantService } from "../interfaces/service-interfaces/IRestaurantService";
import { MESSAGES } from "../constants/messages";

export class RestaurantController {
     constructor(private service: IRestaurantService) { }

     getAll = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               const restaurants = await this.service.getAllRestaurants();

               res.status(200).json({
                    success: true,
                    message: MESSAGES.RESTAURANT.FETCHED_ALL,
                    data: restaurants,
               });
          } catch (error) {
               next(error);
          }
     };

     getById = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               const restaurant = await this.service.getRestaurnatById(
                    Number(req.params.id)
               );

               res.status(200).json({
                    success: true,
                    message: MESSAGES.RESTAURANT.FETCHED_ONE,
                    data: restaurant,
               });
          } catch (error) {
               next(error);
          }
     };

     create = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               const restaurant = await this.service.createRestaurant(req.body);

               res.status(201).json({
                    success: true,
                    message: MESSAGES.RESTAURANT.CREATED,
                    data: restaurant,
               });
          } catch (error) {
               next(error);
          }
     };

     update = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               const restaurant = await this.service.updateRestaurant(
                    Number(req.params.id),
                    req.body
               );

               res.status(200).json({
                    success: true,
                    message: MESSAGES.RESTAURANT.UPDATED,
                    data: restaurant,
               });
          } catch (error) {
               next(error);
          }
     };

     delete = async (
          req: Request,
          res: Response,
          next: NextFunction
     ) => {
          try {
               await this.service.deleteRestaurant(
                    Number(req.params.id)
               );

               res.status(200).json({
                    success: true,
                    message: MESSAGES.RESTAURANT.DELETED,
               });
          } catch (error) {
               next(error);
          }
     };
}