const pizzaModel = require("../model/Pizza");
const pizzaController = {
    index:(req, res) => {
        res.send(pizzaModel.listarPizzas())
    },

    pedidos:(req, res) =>{
        res.send("**Pedidos**");
    }
}

module.exports = pizzaController