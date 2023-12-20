import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Cart = sequelize.define(
    "cart",{
        cartID:{
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
        tableName:"cart"
    }
)
export default Cart;