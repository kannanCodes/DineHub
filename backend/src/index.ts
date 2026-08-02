import app from "./app";
import { sequelize } from "./config/database";


const PORT = process.env.PORT || 5000;

const STARTSERVER = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  } catch (error) {
    console.error("Database connection failure.");
    console.error(error);

    process.exit(1);
  }
}

STARTSERVER();