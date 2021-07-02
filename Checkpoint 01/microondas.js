//Checkpoint 1 - 02/07
// Desenvolver um menu para microondas
// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos.
// Feito por Jonathan Quintal Coutinho

const microondas = (prato,tempo) => {
    let pratoEscolhido = prato.toLowerCase()
    console.log(`Hora de fazer ${pratoEscolhido}!`)
    switch (pratoEscolhido) {
        case 'pipoca': {
            if (tempo >=10 && tempo <= 20) {
                console.log ('Prato pronto. Bom apetite!!!')
            } else {
                if (tempo >= 30) {console.log('KABUM!!')}
                else if (tempo > 20) {console.log('A comida queimou.')}
                else console.log ('Tempo insuficiente')
            }
        } 
        break; 
        case 'macarrão': {
            if (tempo >=8 && tempo <= 16) {
                console.log ('Prato pronto. Bom apetite!!!')
            } else {
                if (tempo >= 24) {console.log('KABUM!!')}
                else if (tempo > 16) {console.log('A comida queimou.')}
                else console.log ('Tempo insuficiente')
            }
        } 
        break;
        case 'carne': {
            if (tempo >=15 && tempo <= 30) {
                console.log ('Prato pronto. Bom apetite!!!')
            } else {
                if (tempo >= 45) {console.log('KABUM!!')}
                else if (tempo > 30) {console.log('A comida queimou.')}
                else console.log ('Tempo insuficiente')
            }
        }
        break;
        case 'feijão': {
            if (tempo >=12 && tempo <= 24) {
                console.log ('Prato pronto. Bom apetite!!!')
            } else {
                if (tempo >= 36) {console.log('KABUM!!')}
                else if (tempo > 24) {console.log('A comida queimou.')}
                else console.log ('Tempo insuficiente')
            }
        } 
        break;
        case 'brigadeiro': {
            if (tempo >=8 && tempo <= 16) {
                console.log ('Prato pronto. Bom apetite!!!')
            } else {
                if (tempo >= 24) {console.log('KABUM!!')}
                else if (tempo > 16) {console.log('A comida queimou.')}
                else console.log ('Tempo insuficiente')
            }
        } break;
        default: console.log ('Prato inexistente')
    }    
}
// Testes da função. Seguem na ordem de tempo insuficiente, tempo suficiente, queima e explosão
microondas('PIPOCA',9)
microondas('PIPOCA',11)
microondas('PIPOCA',21)
microondas('PIPOCA',30)
console.log('\n')

microondas('MacARRÃO',7)
microondas('MacARRÃO',8)
microondas('MacARRÃO',17)
microondas('MacARRÃO',25)
console.log('\n')

microondas('CARNE',10)
microondas('CARNE',16)
microondas('CARNE',31)
microondas('CARNE',46)
console.log('\n')

microondas('FEIJÃO',10)
microondas('FEIJÃO',14)
microondas('FEIJÃO',26)
microondas('FEIJÃO',37)
console.log('\n')

microondas('brigaDEIRO',5)
microondas('brigaDEIRO',8)
microondas('brigaDEIRO',17)
microondas('brigaDEIRO',26)



