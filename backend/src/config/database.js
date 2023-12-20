import { Sequelize } from "sequelize";
import { env } from "./var-env.js";

const sequelize = new Sequelize('db_sales_website', 'postgres', env.PASS_DB, {
    host: 'localhost',
    dialect:'postgres',
});

export default sequelize;