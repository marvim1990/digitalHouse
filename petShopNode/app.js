const http = require('http');
const petshop = require('./petshop-node');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain; charset=utf-8" });
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;

    switch (rota) {
    
        case '/pets':
            let conteudo = petshop.listarPets();
            if (conteudo.length > 0) {
                res.write(conteudo);
            }
            else {
                res.write("Nenhum pet cadastrado")
            }
            break;
        
        case '/pets/add':
            let novoPet = queryString;
            petshop.adicionarPet(novoPet);
            res.write(`${novoPet.nome} foi adicionado a lista!`);
            break;
        
        case '/pets/buscar':
            let nomePet = queryString.nome;
            let petsEncontrados = petshop.buscarPet(nomePet);
            if (petsEncontrados.length > 0) {
               res.write(`Encontramos ${petsEncontrados.length} pets com o nome ${nomePet}`);
            } 
            else {
                res.write(" Nenhum pet cadastrado com esse nome!");
            }
            break;
        
        case '/pets/vacinados':
            let contarPets = petshop.contarVacinados();
            res.write(contarPets);
            break;
        //localhost:3000/pets/vacinar
        case '/pets/vacinar':
            res.write(`Os pets ${petshop.vacinarPet(petshop.pets)} foram vacinados!`);
            break;
        //localhost:3000/pets/atender?nome=Kika
        case '/pets/atender':
            let nomePetAtendido = queryString.nome;
            res.write(`Bem vindo, ${nomePetAtendido}`);
            res.write(petshop.atenderPet(nomePetAtendido));
            break;
        //localhost:3000/pets/banho?nome=Gremlin
        case '/pets/banho':
            let petBanho = queryString.nome;
            res.write(petshop.darBanhoPet(petBanho));
            break;
        //localhost:3000/pets/tosa?nome=Geraldo
        case '/pets/tosa':
            let petTosa = queryString.nome;
            res.write(petshop.tosarPet(petTosa));
            break;
        //localhost:3000/pets/unhas?nome=Dory
        case '/pets/unhas':
            let petUnhas = queryString.nome;
            res.write(petshop.cortarUnhasPet(petUnhas));
            break;
        //localhost:3000/pets/pagar
        case '/pets/pagar':
            res.write(petshop.pagar());
            break;
    
        default:
            res.write("** Petshop DH **");
    }
    res.end();

}).listen(3000, "localhost", () => {
    console.log("Servidor rodando!");
});