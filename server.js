require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 8080;
const productRoutes = require('./routes/productRoutes');

//mongoDB connected
connectDB();

app.use(express.json());

app.use('/api/products', productRoutes)

app.get("/", (req,res) => res.status(200).send("Server Connnected"));


app.listen(PORT, () => console.log(`listening to http://localhost:${8080}`));

