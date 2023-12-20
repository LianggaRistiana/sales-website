import sequelize from "../config/database.js";
import { DataTypes, Model } from "sequelize";
import DetailTransaction from "./DetailTransaction.js"

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

Transaction.hasMany(DetailTransaction);
DetailTransaction.belongsTo(Transaction);


export default Transaction;