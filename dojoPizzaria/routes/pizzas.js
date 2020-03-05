const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");

Router.get('/', pizzaController.index);

module.exports = Router;