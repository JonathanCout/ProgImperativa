/* Parte 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string),
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

/* Parte 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

/* Parte 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true 
se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, 
o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

// Importação da classe aluno e array estudantes
let alunosImp = require('./moduloAluno')

// classe curso 
class curso {
    constructor(titulo,notaAprov,maxFaltas) {  

        this.titulo = titulo 
        this.notaAprov = notaAprov
        this.maxFaltas = maxFaltas
        this.listaAluno = []

// método para adicionar a lista de alunos de estudantes no listaAluno
        this.adicAluno = function () {
            for (let i = 0; i < alunosImp.estudantes.length ; i++) {
                this.listaAluno.push(alunosImp.estudantes[i].nome)   
            }  
        }
/* método para checar a aprovação dos alunos. DEU RUIM!
tentar entender como linkar dois objetos de arrays que envolvem indices */
        this.aprovacao = function (nomeAluno) {
            switch(nomeAluno.tolowerCase()){

            }
        }
    }
}

// Criação dos cursos
const cursosLista = [
    new curso ('CTD',7,5),
    new curso ('CTD2',6,3)
]

cursosLista[1].adicAluno()
console.log(`Lista de alunos do ${cursosLista[1].titulo}: ${cursosLista[1].listaAluno.join(', ')}`)
// Exportação do objeto curso com seus métodos e da lista de cursos
module.export={curso,cursosLista}