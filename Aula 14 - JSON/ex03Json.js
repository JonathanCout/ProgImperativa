// Dia 16/07
// Aula 14 - JSON

let fs = require('fs'); // File system
let frutas = '{"Fruta":"banana","Preco":8.50,"Tipo":["prata","maçã","nanica"],"Origem":"Brasil"}';

// Cria um arquivo com a extetnsão indicada e a variável a ser guardada
fs.writeFileSync('text.txt',frutas);

// Ler o arquivo e o atribuir a uma variável
let lerJson = fs.readFileSync('text.txt','utf-8')

console.log(lerJson)
// Esse arquivo vem em JSON e é preciso converter para JS para utilizá-lo
let converterJS = JSON.parse(lerJson)

console.log(converterJS)
