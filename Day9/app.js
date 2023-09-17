//Abdelrahman El-Badawy

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Connect to database
mongoose
  .connect(
    "mongodb+srv://abdalrmanbadwy:W7qp1OI3fl2kktYc@cluster0.z40ugzh.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Endpoint: /home
server.get("/home", (req, res) => {
  res.send("<b>Welcome to our APIs</b>");
});

// Endpoint: /products
server.get("/products", (req, res) => {
  Product.find()
    .then((productsData) => {
      res.send(productsData);
    })
    .catch((err) => {
      res.status(500).send({
        error: "Error getting products",
      });
    });
});

// Endpoint: /products/:id
server.get("/products/:id", (req, res) => {
  let prodId = +req.params.id;
  Product.findOne({ id: prodId })
    .then((singleProduct) => {
      if (!singleProduct) {
        res.status(404).send("Product not found");
      } else {
        res.send(singleProduct);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

// Default route redirects to /home
server.get("/", (req, res) => {
  res.redirect("/home");
});

// Handle 404 - Not Found
server.use((req, res) => {
  res.status(404).send("404 Not Found");
});

server.listen(3002, () => {
  console.log("Server connected and listening on port 3002");
});
