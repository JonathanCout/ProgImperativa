//O for precisa de 3 atributos: o primeiro define a variável a ser trabalhada, o segundo a condição limite para a repetição e o último é a ação realizada a cada loop

for (let paginas = 1; paginas <= 10; paginas++) {
    console.log(`Página atual ${paginas}`)
}

// //Micro-desafios 1

for (let contador = 1; contador <=5; contador++) {
    console.log(`Hello World`)
}

// //Micro-desafios 2

for(let contador = 1; contador<=10; contador+=2){
    console.log(contador)
}

//Micro-desafios 3 tabuada de 5

for (i=1;i<=10;i++){
    console.log(`Tabuada do ${i}`)
    for (j=0;j<=10;j++){
        console.log(i*j)
    }
}
