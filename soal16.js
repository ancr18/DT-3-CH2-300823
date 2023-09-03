// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x,y) {
    // tulis jawabanmu disini
    // 1. buat kondisi jika uang yang ditarik harus dapat dibagi 5, dan saldo mencukupi ditambah dengan biaya bank 0.5
    if(x % 5 == 0 && y >= x + 0.5){
        return y - (x + 0.5)
    } 
    // 2. jika kondisi tidak memenuhi maka tampilkan nilai saldo
    else{
        return y;
    }

}

console.log(solution(30,120)) // expected output 89.5
console.log(solution(42,100)) // expected output 100
