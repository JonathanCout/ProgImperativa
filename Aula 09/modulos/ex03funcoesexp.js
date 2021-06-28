//Criando funções a serem exportadas

const ops = {
    soma:(...numbers)=> numbers.reduce((sum,n) => sum += n),
    subtrair:(...numbers)=> numbers.reduce((sub,n) => sub -=n),
    multiplicar:(...numbers)=> numbers.reduce((mult,n) => mult *=n),
    dividir:(...numbers) => numbers.reduce((div,n) => div /=n)
}

module.exports = ops

let a = [1,2,3]
let b = a.reduce((sum,n) => sum +=n)
console.log (b)