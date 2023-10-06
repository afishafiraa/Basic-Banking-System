const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class BankAccount{
    constructor(amount){
        this.amount = amount;
        let saldo;
    }

    deposit(amount){
        let saldo;
        saldo = saldo + parseInt(amount)
        console.log (`Saldo anda sekarang adalah ${saldo}`)
    }

    withdraw(amount){
        let saldo;
        if (saldo > 0){
            saldo = saldo - parseInt(amount)
        }else{
            console.log("Saldo Anda tidak mencukupi!")
        }
        console.log(`Saldo anda sekarang adalah ${saldo}`)
    }

    saldonow(){
        let saldo;
        console.log(`Jumlah saldo kamu adalah ${saldo}`)
    }
}

module.exports = BankAccount;