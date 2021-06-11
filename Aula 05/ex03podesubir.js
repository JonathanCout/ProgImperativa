//Exercicio PodeSubir
function podeSubir(altura,acompanhada) {
    // Condição padrão
    if (altura > 1.4 && altura < 2){
        return "Pode subir"
    // Condição com acompanhante
    } else if (altura >= 1.2 && altura <= 1.4 && acompanhada == "sim" ) {
        return "Pode subir por estar acompanhada"
    // Condição sem acompanhante
    } else if (altura >= 1.2 && altura <= 1.4 && acompanhada == "não") {
        return "Necessita de acompanhante para subir"
    // Condição falha para <1.2m e >2m
    } else {
        return "Não pode subir"
    } 
}

console.log(podeSubir(1.3,"sim"))