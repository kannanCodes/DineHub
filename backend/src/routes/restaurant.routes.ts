import { Router } from "express";
import { restaurantController } from "../shared/di/restaurant.container";
import { validateMiddleware } from "../middlewares/validate.middleware";
import {
  createRestaurantSchema,
  updateRestaurantSchema,
} from "../validators/restaurant.validator";

const router = Router();

router.get("/", restaurantController.getAll);

router.get("/:id", restaurantController.getById);

router.post(
  "/",
  validateMiddleware(createRestaurantSchema),
  restaurantController.create
);

router.put(
  "/:id",
  validateMiddleware(updateRestaurantSchema),
  restaurantController.update
);

router.delete("/:id", restaurantController.delete);

export default router;