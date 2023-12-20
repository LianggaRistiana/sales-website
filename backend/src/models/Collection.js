import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Stuff from "./Stuff.js";

const Collection = sequelize.define(
  "collection",
  {
    collectionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
  },
  { 
    tableName: "collection",
  }
);

Collection.hasMany(Stuff);
Stuff.belongsTo(Collection);

export default Collection;
