const BankAccount = require('./bank_account');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class BankSystem extends BankAccount{
    constructor(amount){
        super(amount)   
    }
}


function menu(){
    const bank = new BankAccount();
    rl.question('Pilih menu dibawah ini: \n 1. Penarikan \n 2. Pemasukan \n 3. Cek Saldo \n', (pil) => {
        if (pil == 1){
            rl.question('Masukkan jumlah saldo :',(amount)=>{
                bank.withdraw(amount)
            })
            setTimeout(() => 1000)
            menu()
        } else if (pil == 2){
            rl.question('Masukkan jumlah saldo :',(amount)=>{
                bank.deposit(amount)
            })
            setTimeout(() => 1000)
            menu()
        } else if (pil == 3){
            bank.saldonow()
            setTimeout(() => 1000)
            menu()
        }else{
            rl.close();
        }
      })
}

menu();

