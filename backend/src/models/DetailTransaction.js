import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const DetailTransaction = sequelize.define(
    "detailTransaction",{
        detailTransactionID:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        acount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        size:{
            type:DataTypes.ENUM,
            values:["XS","S","M","L","XL"]
        }
    },
    {
        tableName:"detailTransaction"
    }
)
export default DetailTransaction;