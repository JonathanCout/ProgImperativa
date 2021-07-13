/* Parte 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string),
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

/* Parte 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

// Importação da classe aluno e array estudantes
let alunos = require('./moduloAluno')

// classe curso 
class curso {
    constructor(titulo,notaAprov,maxFaltas) {  

        this.titulo = titulo 
        this.notaAprov = notaAprov
        this.maxFaltas = maxFaltas
        this.listaAluno = []

// método para adicionar a lista de alunos de estudantes no listaAluno
        this.adicAluno = function () {
            for (let i = 0; i < alunos.estudantes.length ; i++) {
                this.listaAluno.push(alunos.estudantes[i].nome)   
            }  
        }
    }
}

// Criação dos cursos
const curso1 = new curso ('CTD',7,5)

curso1.adicAluno()
console.log(`Lista de alunos do ${curso1.titulo}: ${curso1.listaAluno.join(', ')}`)