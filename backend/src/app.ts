import express from "express";
import restaurantRoutes from "./routes/restaurant.routes";
import { errorMiddleware } from "./middlewares/error.middleware";


const app = express();

app.use('/api/restaurant',restaurantRoutes);

app.use(errorMiddleware);

export default app;