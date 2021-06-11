//Desafio Array do PG - Lista de Compras 

let listaCompras = ['banana','leite','biscoito','suco','queijo','macarrão']
console.log('Array inicial:')
console.log(listaCompras)
console.log('-----------------------------------------')         //Console.log só para emular pular uma linha
//Criando uma lista no papel
let coisasMaisImportantes = listaCompras.join(' - ')
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
console.log('-----------------------------------------')
//Comando splice
console.log('O método splice retira um ou mais elementos do array, a partir da posição informada, neste caso a partir do índice 2 ele removerá 2 dados')
listaCompras.splice(2,2)
console.log(listaCompras)

