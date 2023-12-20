// initalize express app and cors
// const express = require('express');
// const cors = require('cors');
// const sequelize = require('.');

import express from "express";
import cors from "cors";
import sequelize from "./src/config/database.js";

// specify the route
import CartRoute from "./src/routes/CartRoute.js";
import DetailStuffRoute from "./src/routes/DetailStuffRoute.js";
import ForMenRoute from "./src/routes/ForMenRoute.js";
import ForWomenRoute from "./src/routes/ForWomenRoute.js";
import HomeRoute from "./src/routes/HomeRoute.js";
import Purchase from "./src/routes/PurchaseRoute.js";
import Collection from "./src/routes/CollectionRoute.js";
import Admin from "./src/routes/AdminRoute.js"
import AllStuff from "./src/routes/AllStuffRoute.js"

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

try {
  await sequelize.authenticate();
  console.log("\t> Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

try {
  await sequelize.sync();
  console.log("\n\t> All models were synchronized successfully.");
} catch (error) {
  console.log(`Failed to synchronized :${error}`);
}

// listen the server
app.listen(port, () => {
  console.log(`\t> Server : http://localhost:${port}`);
});

// using the route
app.use("/", HomeRoute);
app.use("/for-men", ForMenRoute);
app.use("/for-women", ForWomenRoute);
app.use("/detail-stuff", DetailStuffRoute);
app.use("/Collection", Collection);
app.use("/cart", CartRoute);
app.use("/purhase", Purchase);
app.use("/all-stuff", AllStuff);
app.use("/admin", Admin);

export default app;
