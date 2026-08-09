import express from "express";
import cors from "cors";
import helmet from "helmet";
import restaurantRoutes from "./routes/restaurant.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

app.use(errorMiddleware);

export default app;