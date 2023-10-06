class BankAccount{
    constructor(amount, saldo){
        this.amount = amount;
        this.saldo = saldo;
    }

    deposit(amount){
        let saldo = 0;
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

//testing
// const bank1 = new BankAccount(20000,0);
// bank1.deposit(20000)
// bank1.saldonow()

module.exports = BankAccount;