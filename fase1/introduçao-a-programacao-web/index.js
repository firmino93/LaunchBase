// criar um programa que calcula media entre os alunos
// dar notas aos alunos e envia
// mensagem de cálculo de média

const alunosDaTurmaA = [

    {
        nome: "Mayk",
        nota: 1.8
    },

    {
        nome: "Diego",
        nota: 10
    },

    {
        nome: "fulano",
        nota: 2
    },

    {
        nome: "mais um aluno",
        nota: 10
    }
]

const alunosDaTurmaB = [

    {
        nome: "Cleiton",
        nota: 10
    },

    {
        nome: "Robson",
        nota: 10
    },

    {
        nome: "Siclano",
        nota: 0
    },

    {
        nome: "novo aluno",
        nota: 5
    }
]

function calculaMedia (alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++ ) {
        soma = soma + alunos[i].nota
    }
    
    const media = soma / alunos.length

    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem (media, turma) {

    if( media > 5 ) {
        console.log(`a média da turma ${turma} foi de ${media} parabéns !`)
    } else {
        console.log(`a média da turma ${turma} foi menor que 5`)
    } 
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
