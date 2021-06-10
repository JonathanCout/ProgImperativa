/*3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. Depois, criar a função fazerGol que incremente a quantidade de gols do jogador em uma unidade e, em seguida, 
imprima em tela a mensagem “GOL!!!!!!!!!”. Além disso, incremente o valor do jogador em 10.000 dólares. Por conseguinte, teste a execução da função várias vezes e imprima em tela 
a nova quantidade de gols do jogador e o preço do jogador no mercado.*/

let nomeJogador = "Allejo";
let golsJogador = 0;
let precoEmDolares = 20000;

function fazerGol(){
    golsJogador++;
    precoEmDolares = precoEmDolares + 10000;
    console.log("GOOOOOOL!!");
}

// fazerGol()
// console.log (`O jogador ${nomeJogador} já fez ${golsJogador} gols no campeonato, e ele está com o valor de U$${precoEmDolares}.00 no mercado`)

function hatrick(){
    fazerGol()
    fazerGol()
    fazerGol()
    return precoEmDolares = precoEmDolares * 1.10
}

hatrick()
console.log (`INCRÍIIIVEL!! O jogador ${nomeJogador} realizou 3 jogos nessa partida e está com o valor de U$${precoEmDolares},00 no mercado`)
