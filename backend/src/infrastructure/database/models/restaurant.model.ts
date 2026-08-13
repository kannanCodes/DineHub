import { DataTypes, Model, Sequelize } from "sequelize";

export interface IRestaurant {
     id?: number;
     name: string;
     address: string;
     contact: string;
}

export class Restaurant extends Model<IRestaurant> implements IRestaurant {
     declare public id: number;
     declare public name: string;
     declare public address: string;
     declare public contact: string;
}

export const initRestaurantModel = (sequelize: Sequelize) => {
     Restaurant.init(
          {
               id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
               },
               name: {
                    type: DataTypes.STRING,
                    allowNull: false,
               },
               address: {
                    type: DataTypes.STRING,
                    allowNull: false,
               },
               contact: {
                    type: DataTypes.STRING,
                    allowNull: false,
               },
          },
          {
               sequelize,
               tableName: "Restaurants",
               timestamps: true,
          }
     );
};