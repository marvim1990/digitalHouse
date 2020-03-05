let alunos = [{
        nome: "José",
        boletim: [{
            curso: 'Full Stack',
            notas: [6,7,9],
            faltas: 23,
            dataMatricula: 24062020
        }]
    },
    {
        nome: "Joao",
        boletim: [{
            curso: "Back Hendy",
            notas: [6,6,6],
            faltas: 0,
            dataMatricula: 24062020
        }]
    }
];

// function listarAlunos() {
//     for (let aluno of alunos) {
//         console.log(`${aluno.nome}`);
//         for (let matricula of aluno.boletim) {
//             console.log(`${matricula.curso}`);
//             console.log(`${matricula.notas}`);
//         }
//     }
// }

const listarAlunos = (() => {
    for ( let aluno of alunos ){
        console.log(`${aluno.nome}`)
        for(let matricula of aluno.boletim){
            console.log(`${matricula.curso}
            ${matricula.notas}`)
        }
    } 
})
listarAlunos();


const matricularNoCurso = (aluno, ...cursos) => {
    for(let nomeCurso of cursos){
        aluno.boletim.push(
            {curso: nomeCurso,
            notas: [], 
            faltas: 0,
            dataMatricula: new Date()}
        )
    }
}

const calcularMedia = (aluno, nomeCurso) => {
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso == nomeCurso);
    let soma = cursoSelecionado[0].notas.reduce((pilha,numero) => {
         return pilha+numero;
    });
    const media = soma/cursoSelecionado[0].notas.length;
    console.log(media);
    return media;
}
// calcularMedia()


const adicionarNota = (aluno, nomeCurso, nota) =>{
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso == nomeCurso);
    cursoSelecionado[0].notas.push(nota);
    console.log("notas adicionadas");
}

const buscarAlunoPorNome = (nomeAluno) => {
    let alunoFiltrado = alunos.filter(aluno => aluno.nome.toLowerCase() === nomeAluno.toLowerCase())

    console.log(alunoFiltrado[0])
    
} 

buscarAlunoPorNome("Joao");

const checarAprovado = (aluno, curso) => {
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso == curso)

    let media = calcularMedia(aluno, curso)

    let faltas = cursoSelecionado[0].faltas;

    return faltas <= 3 && media >= 7

};

// console.log(checarAprovado(alunos[0], "Full Stack"))


// matricularNoCurso(alunos[0], "economia", "culinaria");
//listarAlunos();
calcularMedia(alunos[0], "Full Stack");
// adicionarNota(alunos[0],"Full Stack", 8);
// listarAlunos();