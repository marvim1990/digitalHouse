let pedidos = [
    {
        cliente:'Joao',
        pizza:['Calabresa'],
        total: 0
    }
];


let pizzas =[
    {
        nome: "Calabresa",
        categoria: "Salgada",
        preco: 10
    },
    {
        nome: "Mussarela",
        categoria: "Salgada",
        preco: 12
    },
    {
        nome: "Chocolate",
        categoria: "Doce",
        preco: 15
    },
    {
        nome: "Brócolis",
        categoria: "Vegetariana",
        preco: 30
    }
];
const listarPizzas= () =>{
    let conteudo = ""
    for(let pizza of pizzas){
        conteudo+=`
        ------------ <br>
        Sabor: ${pizza.nome} <br>
        Categoria: ${pizza.categoria} <br>
        Preço: ${pizza.preco} <br>
        ------------`         
    }
    return conteudo;
}

const fazerPedido = (cliente,...nomePizza)=>{
    pedidos.push()


};

module.exports = {listarPizzas}