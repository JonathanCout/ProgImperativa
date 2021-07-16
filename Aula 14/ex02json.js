// Dia 16/07
// Aula 14 - JSON

let frutas = '{"Fruta":"banana","Preço":8.50,"Tipo":["prata","maçã","nanica"],"Origem":"Brasil"}';
console.log(frutas)

let frutasConvertidasJS = JSON.parse(frutas)
console.log(frutasConvertidasJS)

let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS)
console.log(frutasConvertidasJSON)