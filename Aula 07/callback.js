//Micro-desafio callback

// let somar = (a,b) => a + b;
// let subtrair = (c,d) => c - d;
// let calculadora = (e,f,operacao) => console.log(operacao(e,f))
// calculadora (5,1,somar)

function acaoCarol (acao) {
    console.log (acao())
}

let andar = () => 'O carro está andando'
let parar = () => 'O carro está parando'

acaoCarol(andar)
acaoCarol(parar)