import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define(
  "user",
  {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["Admin", "Client"],
      allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);


export default User;