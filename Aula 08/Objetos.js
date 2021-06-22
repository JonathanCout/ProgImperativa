//Aprendendo this e funções
// Teste sobre jogos comprados
function Game (nome,console) {
    this.nome = nome
    this.console = console
    this.fala = function() {
        return `Eu comprei um novo jogo hoje, é o ${this.nome} e estou jogando no ${this.console}`;
    }
    
}
let botw = new Game('Zelda Breath of the Wild','Nintendo Switch');
let isaac = new Game('Binding of Isaac','Pc')

console.log(botw.fala())
console.log('---------------------------')

// Micro desafio Restaurante
function Restaurante(nome, menu, especialidade) {
    this.nome = nome
    this.menu = menu 
    this.especialidade = especialidade
    this.entrada = function() {
        return `Sejam bem vindos ao ${this.nome}. Hoje teremos nosso famosíssimo ${this.especialidade}, mas temos também no nosso cardápio ${this.menu.join(', ')} `
    }
}

let meuRestaurante = new Restaurante('Planeta',['picanha na brasa','batata recheada','aipim frito'],'Filé de Cordeiro')

console.log(meuRestaurante.entrada())