import sequelize from "../config/database";
import { DataTypes, Model } from "sequelize";

const Transaction = sequelize.define(
  "transaction",
  {
    TransactionID: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  { tableName: "transaction" }
);


export default Transaction;