import express from "express";
import restaurantRoutes from "./routes/restaurant.routes";


const app = express();

app.use('/api/restaurant',restaurantRoutes);



export default app;