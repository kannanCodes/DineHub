import app from "./app";
import { sequelize } from "./config/database";
import { initRestaurantModel } from "./infrastructure/database/models/restaurant.model";
import { MESSAGES } from "./constants/messages";

const PORT = process.env.PORT || 5000;

const STARTSERVER = async () => {
  try {
    initRestaurantModel(sequelize);
    await sequelize.authenticate();
    console.log(MESSAGES.SERVER.DB_CONNECTED);
    app.listen(PORT, () => {
      console.log(MESSAGES.SERVER.RUNNING(PORT));
    })
  } catch (error) {
    console.error(MESSAGES.SERVER.DB_FAILED);
    console.error(error);

    process.exit(1);
  }
}

STARTSERVER();