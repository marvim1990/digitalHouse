const PETSHOP = "Petshop DH";
console.log(`** ${PETSHOP} **`);

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["banho"]
  }
];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} vacinado com sucesso!`);
  } else {
    console.log("Opa, seu pet já está vacinado!");
  }
};

const listarPets = () => {
  for (let pet of pets) {
    console.log(`
    ---------------------
    Nome: ${pet.nome}
    Tipo: ${pet.tipo}
    Raça: ${pet.raca}
    Idade: ${pet.idade}
    Genero: ${pet.genero == "F" ? "Femea" : "Macho"}
    Vacinado: ${pet.vacinado ? "Sim" : "Não"}
    Serviços: ${pet.servicos}`);
  }
};

const validarDados = dadosPet => {
  return (
    dadosPet.nome != "" &&
    dadosPet.idade != "" &&
    dadosPet.genero != "" &&
    dadosPet.tipo != "" &&
    dadosPet.raca != ""
  );
};

console.log(
  validarDados({
    nome: "tech",
    idade: 89,
    genero: "F",
    tipo: "cão",
    raca: "xpto"
  })
);

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    novoPet.nome = novoPet.nome.toString();
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
  } else {
    console.log("Ops, insira um objeto válido!");
  }
};

const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com pêlo aparado!`);
};

const darBanhoPet = pet => {
  pet.servicos.push("banho");
  console.log(`${pet.nome} está de banho tomado!`);
};

const cortarUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome} cortou as unhas!`);
};

const atenderPet = (pet, ...servicos) => {
  console.log(`Bem vindo, ${pet.nome}`);

  for (let servico of servicos) {
    servico(pet);
  }

  const pagar = () => {
    console.log("Pagamento realizado com suce$$o!");
  };

  pagar();

  console.log("Volte sempre!");
};

const contarVacinados = () => {
  let vacinados = pets.filter(pet => pet.vacinado).length;
  let naoVacinados = pets.filter(pet => !pet.vacinado).length;

  console.log(`
  ------------------------
  Temos ${vacinados} pets vacinados.
  Temos ${naoVacinados} pets NÃO vacinados.
  ------------------------
  `);
};

const campanhaVacina = () => {
  console.log(`Campanha de vacina 2020\nvacinando...`);

  let petVacinadosCampanha = 0;

  for (let pet of pets) {
    if (!pet.vacinado) {
      vacinarPet(pet);
      petVacinadosCampanha++;
    }
  }

  console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

// campanhaVacina();
