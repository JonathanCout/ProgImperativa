// Dia 16/07
// Aula 14 - JSON

// Objeto em texto js
let dadosJson = '{"nome": "William", "sobrenome":"Pantoja", "idade":53}';

// Desserialização = parsing
// Chama-se a biblioteca JSON 
let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal 
console.log(dadosConvertidosJS)
console.log(dadosConvertidosJS.nome.toUpperCase())

//  serialização cria um formato json
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS)
console.log(objetoConvertidoJson)