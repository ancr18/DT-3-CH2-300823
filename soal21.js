// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

// 1. buat fungsi untuk mengurutkan dari terkecil (ascending)
function asc(arr){
    // 2. menggunakan method sort lalu a - b untuk menukar posisi jika a bernilai positif 
    return arr.sort((a, b) => a - b)
}

//  3. buat fungsi untuk mengurutkan dari terbesar (descending)
function desc(arr){
    // 4. menggunakan method sort lalu b - a untuk menukar posisi jika b bernilai negatif 
    return arr.sort((a, b) => b - a)
}


// 5. buat fungsi untuk sorting, yang hasilnya sesuai argumen nya
function sorting(arr, tipe){
    // mereturn sesuai argumen yang dipilih
    return tipe(arr);
}

const a = [12,12,1,2,1,3,5,7,3,423,123]
console.log(`ascending : ${sorting(a, asc)}`)
console.log(`descending : ${sorting(a, desc)}`)