//Aula 10 - 29/06

const oprt = {
    soma: (...n) => n.reduce((sum,n) => sum +=n),
    subtracao: (...n) => n.reduce((sub,n) => sub -=n),
    multiplicacao:(...n) => n.reduce((mult,n) => mult*=n),
    divisao:(...n) => n.reduce((div,n) => div /= n)    
}

const oprt2 = {
    soma: (a,b,check) => {
        // check();    Tentar entender callback novamente
        a + b}  ,
    subtracao: (a,b) => a - b,
    multiplicacao:(a,b) => a * b,
    divisao:(a,b) => b == 0 ? 'Impossível dividir por 0': a / b  
}

const Check = (a,b) => {
    if(typeof a !== "number" || typeof b !== "number") {return 'Inserir apenas números'}
}
console.log (oprt2.soma(1,1))