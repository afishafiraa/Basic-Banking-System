let saldo = 1;
let option= "";


let menu = prompt("Pilihlah menu sebagai berikut: 1. Kredit 2. Debit 3. Cek Saldo")

//Menu aksi. Tapi menu belum berjalan dengan lancar. 
//Masih bingung cara manggil "menu prompt" kembali setelah function selesai dirun.
//Untuk seluruh function +- sudah berjalan dengan baik.
if (menu == 1) {
    tambahSaldo()
}
else if (menu == 2) {
    kurangiSaldo()
}
else if (menu == 3) {
    cekSaldo()
}
else {
    alert("Menu tidak tersedia")
}

//function untuk tambah saldo
function tambahSaldo(){
    let tambah = prompt("Jumlah saldo ditambahkan?")
    console.log(tambah)

    saldo = saldo + parseInt(tambah);

    return alert('Jumlah saldo sekarang '+saldo);
}


//function untuk mengurangi saldo
function kurangiSaldo(){
    let kurang = prompt("Jumlah saldo diambil?")
    console.log(kurang)

    if (saldo > kurang){
        saldo -= parseInt(kurang);
    } else if (saldo < kurang){
        alert("Maaf Saldo kamu kurang!")
    } else {
        alert("Maaf inputan salah!")
    }
    return alert('Jumlah saldo sekarang '+saldo);
}


//function untuk mengecek jumlah saldo
function cekSaldo(){
    alert("Jumlah saldo kamu sekarang "+saldo)
}

