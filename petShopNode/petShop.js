let pets = [
  {
    nome: "kiara",
    tipo: "cão",
    raca: "pastor",
    idade: 2,
    genero: "F",
    vacinado: true,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 5,
    genero: "M",
    vacinado: true,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "siames",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"]
  },
  {
    nome: "Mel",
    tipo: "gato",
    raca: "pug",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho"]
  },
  {
    nome: "Zé",
    tipo: "Papagaio",
    raca: "",
    idade: 12,
    genero: "M",
    vacinado: false,
    servicos: ["tosa", "corte de unha"]
  }
];

const listarPets = () => {
    let conteudo = "";
    for (let pet of pets) {
        conteudo += `
        Nome: ${pet.nome} 
        Tipo: ${pet.tipo} 
        Raça: ${pet.raca} 
        Idade: ${pet.idade} 
        Genero: ${pet.genero == "F" ? "femea" : "macho"} 
        Vacinado: ${pet.vacinado ? "sim" : "não"} 
        Serviços: ${pet.servicos}
        ----------------------------`
    }
    return conteudo;
};


const contarVacinados = () => {
  let vacinados = pets.filter(pet => pet.vacinado).length;
  let naoVacinados = pets.filter(pet => !pet.vacinado).length;

  return(`
  ----------------------------------------
  Temos ${vacinados} pets vacinados.
  Temos ${naoVacinados} pets NÃO vacinados.
  -----------------------------------------
  `);
};

const validarDados = novoPet => {
  return (
    novoPet.nome &&
    novoPet.idade &&
    novoPet.tipo &&
    novoPet.raca &&
    novoPet.genero
  );
};


const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    novoPet.nome = String(novoPet.nome);
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
  } 
};

  
const buscarPet = nomePet => {
    let petsEncontrados = pets.filter(pet => pet.nome == nomePet);
  
    return petsEncontrados;
};


const vacinarPet = () => {
    let petsVacinados = [];
    for (let pet of pets) {
      if(!pet.vacinado) {
        pet.vacinado = true;
        petsVacinados.push(pet.nome);
      }
    }
    return petsVacinados;
};


const darBanhoPet = petBanho => {
  for (let pet of pets) {
    if (pet.nome == petBanho) {
      pet.servicos.push("banho");
    }
  }
  return(`${petBanho} está de banho tomado!`);
};


const tosarPet = petTosa => {
  for (let pet of pets) {
    if (pet.nome == petTosa) {
      pet.servicos.push("tosa");
    }
  }
  return(`${petTosa} está tosado!`);
};


const cortarUnhasPet = petUnhas => {
  for (let pet of pets) {
    if (pet.nome == petUnhas) {
      pet.servicos.push("corte de unhas");
    }
  }
  return(`${petUnhas} está de unhas cortadas!`);
};


const atenderPet = nomePetAtendido => {
  for (let pet of pets) {
    if (pet.nome == nomePetAtendido) {
      if (pet.servicos.length > 0) {
        return(`
        Fizemos ${pet.servicos} no pet ${nomePetAtendido}
        `);
      }
      else {
        return(`
        O pet ${nomePetAtendido} não tem serviços cadastrados
        `);
      }
    }
  }
};


const pagar = () => {
  return (`
  Pagamento realizado com sucesso.
  `);
};

