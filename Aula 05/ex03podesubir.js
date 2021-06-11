//Exercicio PodeSubir
function podeSubir(altura,acompanhada) {
    // Condição padrão
    if (altura > 140 && altura < 200){
        return "Pode subir"
    // Condição com acompanhante
    } else if (altura >= 120 && altura <= 140 && acompanhada) {
        return "Pode subir por estar acompanhada"
    // Condição sem acompanhante
    } else if (altura >= 120 && altura <= 140 && acompanhada==false) {
        return "Não pode subir, necessita de acompanhante"
    // Condição falha para <1.2m e >2m
    } else {
        return `Sua altura é ${altura}cm. Você não pode subir`
    } 
}

console.log(podeSubir(130,false))
console.log(podeSubir(130,true))
console.log(podeSubir(199,false))
console.log(podeSubir(200,false))
console.log(podeSubir(119,false))
console.log(podeSubir(150,false))

//Jeito melhor de mostrar o acompanhada seria usar só o boolean true ou false, o jeito antigo ta comentado aqui embaixo
//  else if (altura >= 1.2 && altura <= 1.4 && acompanhada == "sim" ) {
//     return "Pode subir por estar acompanhada"
// // Condição sem acompanhante
// } else if (altura >= 1.2 && altura <= 1.4 && acompanhada == "não") {
//     return "Necessita de acompanhante para subir"