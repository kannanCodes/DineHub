import { Router } from "express";
import { restaurantController } from "../shared/di/restaurant.container";

const router = Router();

router.get("/", restaurantController.getAll);

router.get("/:id", restaurantController.getById);

router.post("/", restaurantController.create);

router.put("/:id", restaurantController.update);

router.delete("/:id", restaurantController.delete);

export default router;