import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import DetailTransaction from "./DetailTransaction.js";
import Cart from "./Cart.js";

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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "stuff",
  }
);

Stuff.hasMany(DetailTransaction);
DetailTransaction.belongsTo(Stuff);

Stuff.hasMany(Cart);
Cart.belongsTo(Stuff);


export default Stuff;

