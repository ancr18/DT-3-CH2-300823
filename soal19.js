// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    // tulis jawabanmu disini

    // 1. buat variabel tampung
    let result = 0;

    // 2. buat perulangan sebanyak jumlah angka dan lebih besar dari 0, agar perulangan  dijalankan hanya jika angka nya lebih dari 0
    while(n > 0){

        // 3. mengambil digit terakhir dengan menggunakan modulus 10, dan menambahkan ke dalam variabel result
        result += n % 10;

        // 4. lalu angka nya di bagi 10, dan dihilangkan desimal nya, agar menghilangkan digit terakhirnya
        n = Math.floor(n / 10)
    }
    return result
       
}

console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2

