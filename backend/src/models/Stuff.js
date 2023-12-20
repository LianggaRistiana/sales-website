import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Stuff = sequelize.define(
  "stuff",
  {
    stuffID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM,
      values: ["Women", "Men", "All"],
      allowNull:false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "stuff",
  }
);


export default Stuff;

