//2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

function soma(a,b){
    return  a + b;
}
console.log(soma(1,2))

function subtracao(a,b){
    return  a - b;  
}
console.log(subtracao(1,2))

function divisao(a,b){
    if (b !== 0) {
        return  a/b;}
    else {
        return "bla"
    }      
}
console.log(divisao(1,0))

function multiplicacao(a,b){
    return  a*b;
}
console.log(multiplicacao(1,2))