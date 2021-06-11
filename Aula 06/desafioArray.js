//Desafio Array do PG - Lista de Compras 

let listaCompras = ['banana','leite','biscoito','macarrão']
console.log('Array inicial:')
console.log(listaCompras)
console.log('-----------------------------------------')         //Console.log só para emular pular uma linha
//Criando uma lista no papel
let coisasMaisImportantes = listaCompras.join()
console.log('O método join criará uma lista com os objetos do array')
console.log(coisasMaisImportantes)
console.log('-----------------------------------------')
//Comando pop
console.log('O método pop excluirá o última dado do array, no caso macarrão')
listaCompras.pop()
console.log(listaCompras)
console.log('-----------------------------------------')
//Comando push
console.log('O método push adicionará um dado do array na última posição no caso cerveja')
listaCompras.push('cerveja')
console.log(listaCompras)
console.log('-----------------------------------------')
//Comando shift
console.log('O método shift excluirá o primeiro dado do array, no caso banana')
listaCompras.shift()
console.log(listaCompras)
console.log('-----------------------------------------')
//Comando unshift
console.log('O método unshift adicionará um dado do array na primeira posição, no caso laranja')
listaCompras.unshift('laranja')
console.log(listaCompras)

