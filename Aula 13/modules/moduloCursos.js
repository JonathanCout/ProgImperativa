/* Parte 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string),
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

/* Parte 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

/* Parte 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true 
se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, 
o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

// Importação da classe aluno e array estudantes
let aluno = require('./moduloAluno')


// classe curso 
class Curso {
    constructor(titulo, notaAprov, maxFaltas) {

        this.titulo = titulo
        this.notaAprov = notaAprov.toFixed(2)
        this.maxFaltas = maxFaltas
        this.listaAluno = []

        // método para adicionar a lista de alunos de estudantes no listaAluno
        this.adicAluno = function () {
            for (let i = 0; i < aluno.estudantes.length; i++) {
                this.listaAluno.push(aluno.estudantes[i].nome)
            }
        }
        /* método para checar a aprovação dos alunos. DEU RUIM!
        tentar entender como linkar dois objetos de arrays que envolvem indices */
        this.aprovacao = function (nomeAluno) {
            const alunoEscolhido = aluno.estudantes.find(aluno => aluno.nome === nomeAluno.toLowerCase())
            if (!alunoEscolhido) {
                return 'O aluno escolhido não está matriculado neste curso'
            } else {
                let nome = alunoEscolhido.nome
                let notas = alunoEscolhido.calcularMedia()
                let faltas = alunoEscolhido.faltas

                if (faltas > this.maxFaltas) {
                    return `${nome}, você terminou o curso com ${faltas} faltas e ultrapassou o limite de ${this.maxFaltas} faltas. Por isso, você está reprovado(a)`
                } else if (faltas = this.maxFaltas && notas >= this.notaAprov * 1.1) {
                    return `${nome}, meus parabéns! Você está aprovado(a)`
                } else if (faltas < this.maxFaltas && notas >= this.notaAprov) {
                    return `${nome}, meus parabens! Você está aprovado(a)`
                } else { return `${nome}, você terminou com uma média de ${notas.toFixed(2)} e não alcançou o grau mínimo (${this.notaAprov}) e infelizmente está reprovado(a)` }
            }
        }
    }
}

// Lista dos cursos
const cursos = [
    new Curso('CTD', 7, 3),
    new Curso('Javascript',8,1)
]

// Método para adicionar alunos ao curso CTD especificamente 
cursos.find(curso => curso.titulo == 'CTD').adicAluno()
console.log(cursos.find(curso => curso.titulo == 'CTD').listaAluno.join(', '))

// Método para encontrar o curso certo e verificar quanto a aprovação do aluno
console.log(cursos.find(curso => curso.titulo == 'Javascript').aprovacao('aluno2'))

// Método para encontrar o aluno correto e adicionar uma falta à lista dele
console.log(aluno.estudantes.find(aluno => aluno.nome == 'joaquim').adicFaltas())

// Método para encontrar o aluno correto e calcular a sua média
console.log(aluno.estudantes.find(aluno => aluno.nome == 'joaquim').calcularMedia())

/* Explicação: Tanto o 'cursos' quanto o 'estudantes' são arrays que, dentro desses arrays possuem objetos das classes
Curso e Aluno respectivamente. Portanto, é necessário encontrar o objeto certo que queremos trabalhar ao fazer qualquer método.
Por isso a necessidade do '.find', ele procura dentro do array o objeto cujo titulo/nome é igual ao indicado e daí realiza o método correto */