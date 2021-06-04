// Crie um programa para calcular a aposentadoria de uma pessoa

const nome = 'Silvana'
const sexo = "F"
const idade = 48
const contribuicao = 23

const aposentadoria = idade + contribuicao

if( sexo == "F") {
    if( aposentadoria >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você não pode se aposentar`)
    }
} else {
    console.log(`${nome}, você não pode se aposentar`)
}