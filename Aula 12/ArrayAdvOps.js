//Aula 12 - 06/07
// Usando métodos avançados em array
// O método map cria um segundo array fazendo a operação informada com cada elemento do array inicial
const letrasMinusculas = ['a','b','c','d']

let letrasMaiusculas = letrasMinusculas.map(
    elemento => elemento.toUpperCase()
)
console.log(letrasMinusculas)
console.log(letrasMaiusculas)

// O método filter cria um novo array filtrando os elementos que obedecem a condição criada
const numeros = [1,7,6,25,3]

let filtro = numeros.filter(elemento => elemento>5)

console.log(filtro)

// O método reduce junta todos os valores do array em um só, fazendo a operação informada
const numbers = [1,5,9,-6,15,7]

let soma = numbers.reduce((sum,n) => sum +=n)

console.log(soma)

// O método forEach chama uma função e chama essa função para cada elemento do array 

const final = [1,2,3,4,5,6,7,8]
final.forEach(
    elemento => console.log(elemento)
)

// O método slice corta um pedaço do array e o atribui a uma variavel.
// array.slice(x,y)
// x = Índice inicial, o incluindo; y = Índice final, o excluindo

const frutas = ['banana','maçã','laranja','limão','romã']
let boas = frutas.slice(1,3)
console.log(boas)

// O método splice é parecido com o slice, porém é informado a quantidade de itens a serem cortados
// É possivel adicionar elementos tbm
// array.splice(x,y,item1,item2,...)
// x = índicie inicial
// y = quantidade de itens a serem excluidos

const marcas = ['Samsung','Motorola','Nokia']
console.log(marcas)
marcas.splice(1,0,'Xiaomi','Sony')
console.log(marcas)

// Sort

const numerais = [50,6,90,4,15,30]
console.log(numerais)
// Se o a for maior que b, retorna 1 (pra direita), se for menor, retonr -1 (pra esquerda). a - b para ordem crescente, b - a para decrescente  
numerais.sort((a,b) => b-a) 
console.log(numerais)



