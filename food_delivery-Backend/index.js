const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/userRoutes");
const dataRoutes = require("./routes/displayDataRoutes");
const app = express();
app.use(cors());
app.use(express.json());

const PORTN = 4000;
const URL = process.env.MONGOURL;
mongoose
  .connect(URL)
  .then(async () => {
    console.log("DB connected successfully");
    const foodsCollection = await mongoose.connection.db.collection("foods");
    const foodCategory = await mongoose.connection.db.collection("foodCat");

    const foodData = await foodsCollection.find({}).toArray();
    const catData = await foodCategory.find({}).toArray();

    global.food_items = foodData;
    global.foodCategory = catData;

    app.use("/user", userRoutes);
    app.use("/data", dataRoutes);
    app.listen(PORTN, () => {
      console.log(`Server is running on port: ${PORTN}`);
    });
  })
  .catch((error) => console.log(error));