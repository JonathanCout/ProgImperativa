class aluno {
    constructor(nome,numarquivo,...notas) {
        this.nome = nome
        this.numarquivo = numarquivo        
        this.media = function (a) {
            a = notas.reduce((soma,num2) => soma += num2)/notas.length
            if (a > 7) {
                return `O aluno ${nome} acabou o ano letivo com a ${a} de média e foi aprovado. Meus parabéns!`
            }
            return `O aluno ${nome} acabou o ano letivo com a ${a} de média e não foi aprovado. Favor comparecer a secretaria para mais informações!`
        }       
    }
}

const jhon = new aluno ("Jonathan",1,7,5,4,10)

console.log (jhon.media())