const { read } = require('fs');
const BankAccount = require('./bank_account');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(){
    rl.question('Pilih menu dibawah ini: \n 1. Penarikan \n 2. Pemasukan \n 3. Cek Saldo \n', (type) => {
        if (type == 1){
            subMenu(1)
        } else if(type == 2){
            subMenu(2)
        } else if (type == 3){
            subMenu(3)
        } else{
            console.log("Menu tidak tersedia")
        }
      })
}

function subMenu(pil){
    const bank = new BankAccount();
    rl.question('Masukkan jumlah saldo: ', (amount) => {
        if (pil == 1){
            bank.withdraw(amount)
            setTimeout(() => 1000)
            menu()
        } else if (pil == 2){
            bank.deposit(amount)
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

