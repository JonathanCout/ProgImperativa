//Micro-desafio fizzbuzz

const fizzbuzz = (a,b) => {
    console.log('Vamos contar de 1 a 100?')
    for (let i = 1;i<=100; i++){
        console.log(i)
        if (i % a == 0 && i % b ==0) {
            console.log(`FizzBuzz! O número ${i} é múltiplo do ${a} e do ${b}`)
        } 
        else if (i % a ==0){
            console.log(`Fizz! O número ${i} é múltiplo do ${a}`)
        }
        else if (i % b ==0){
            console.log(`Buzz! O número ${i} é múltiplo do ${b}`)
        }                    
    }
}

fizzbuzz(3,10)