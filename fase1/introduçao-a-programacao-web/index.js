// criar um programa que calcula media entre os alunos
// dar notas aos alunos e envia
// mensagem de cálculo de média

const aluno01 = "mayk"
const notaAluno01 = 9.8

const aluno02 = 'diego'
const notaAluno02 = 10

const aluno03 = 'fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

if( media > 5 ) {
    console.log(`a nota foi de ${media} parabéns !`)
} else {
    console.log(`a média foi menor que 5`)
}
