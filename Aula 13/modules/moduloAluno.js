// Prática guiada 1

/* Parte 1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number)
e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno */

class Aluno {
    constructor (nome,faltas,notas) {
        this.nome = nome
        this.faltas = faltas
        this.notas = notas

        this.calcularMedia = function () {
            const resultado = (this.notas.reduce((sum,n) => sum+=n, 0))/this.notas.length
            return resultado  
        }
        this.adicFaltas = function (){
            this.faltas++
            return `O aluno ${nome} está com ${this.faltas} faltas`
        }
    }
} 

const estudantes = [
    new Aluno('joaquim', 10, [7, 8, 9, 10]),
    new Aluno('aluno2', 3, [10, 8, 7, 6]),
    new Aluno('aluno3', 1, [5, 1, 3, 2])
]

console.log(estudantes.find(estudante => estudante.nome == 'joaquim').calcularMedia())

module.exports = {Aluno,estudantes}

/* Parte 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */



