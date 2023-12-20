import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Cart from "./Cart.js"
import Transaction from "./Transaction.js";

const User = sequelize.define(
  "user",
  {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
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

User.hasMany(Cart);
Cart.belongsTo(User);

User.hasMany(Transaction);
Transaction.belongsTo(User);

export default User;