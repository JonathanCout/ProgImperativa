const microondas = (prato,tempo) => {
    opcoesPrato = [
        {prato: 'pipoca', tempo:10},
        {prato: 'mcarrão', tempo:8},
        {prato: 'carne', tempo:15},
        {prato: 'feijão', tempo:12},
        {prato: 'brigadeiro', tempo:8}
    ];
    // Os métodos avançados de um array requer um elemento e o que vc vai fazer para cada elemento do array
    const menuEscolhido = opcoesPrato.find(comida => comida.prato === prato.toLowerCase())
    
    if (!menuEscolhido) {
        return 'O prato escolhido não consta nos nossos registros. Tente novamento'
    }
    else {
        let pratoEscolhido = menuEscolhido.prato
        let tempoPadrao = menuEscolhido.tempo
        if (tempo >= tempoPadrao *3) {
            return 'KABUUUUUM!'
        } else if (tempo > tempoPadrao*2) {
            return `Que pena, seu prato queimou. O tempo ideal é de ${tempoPadrao}s`
        } else if (tempo >= tempoPadrao) {
            return `Seu prato de ${pratoEscolhido} está pronto! Bom apetite`
        } else return `Tempo insuficiente para este prato! O tempo mínimo é de ${tempoPadrao}s`
    }
}
console.log(microondas('PIPOCA',7))