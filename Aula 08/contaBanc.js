// A class é uma forma mais atual de criar funções construtoras e requer o uso do constructor
class conta {
    constructor (numeroConta,saldo,titular){
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.titular = titular 

        this.deposito = function (value) {
            saldo += value
            return `Olá ${titular}! Foi depositado R$${value} na sua conta. Seu novo saldo é de R$${saldo}`
        }

        this.saque = function (value) {
            if (value > saldo) {
                return `A conta possui saldo insuficiente para realizar este saque. Operação cancelada`
            }
            saldo -= value
            return `Olá ${titular}! Foram sacados R$${value} da sua conta. Seu novo saldo é de R$${saldo}`
        } 
    }

}

const ContaJhon = new conta (1,500,"Jonathan Coutinho")
console.log(ContaJhon.deposito (900))
console.log(ContaJhon.saque(3000))

const contaMarize = new conta (2,10000,"Marize Quintal")
console.log(contaMarize.deposito (5000))
console.log(contaMarize.saque(2000))