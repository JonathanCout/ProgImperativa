//Aula de array - dia 11/06

let jogosFavoritos = ['Legend of Zelda', 'Path of Exile', 'Bioshock','Banjo Kazooie','Osu!']
//Criando uma lista do conteúdo dos arrays
let listaDeJogos = jogosFavoritos.join(" - ")

console.log (listaDeJogos)
//O indexOf e lastIndexOf fazem uma varredura no array. O primeiro começa a procurar do início ao fim, o outro o contrário. 
//Se o elemento existir, se retorna a posição dele, ou -1 se não existe

console.log(jogosFavoritos.lastIndexOf('LOL'))

//O includes tbm faz uma busca, mas retorna um valor booleano
console.log(jogosFavoritos.includes('LOL'))

console.log(jogosFavoritos)
// Teste de tirar um dado específico
jogosFavoritos.splice(2)
console.log(jogosFavoritos)
