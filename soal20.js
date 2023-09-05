// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
    // tulis jawabanmu disini

    // 1. buat perulangan sebanyak jumlah huruf
    for(let i = 0; i < str.length; i++){

        // 2. jika huruf saat ini adalah a lalu 4 karakter setelahnya adalah b, maka return yes
        if(str[i] === 'a'){
            if (str[i+4] ==="b") return ("yes");
        } 

        // 3. jika huruf saat ini adalah b lalu 4 karakter setelahnya adalah a, maka return yes
        else if(str[i] === 'b'){
            if (str[i+4] ==="a") return ("yes");
        }

        return "no"
    }

    // jika tidak 
    

}

console.log(solution("acdebae")) // expected output YES
console.log(solution("cdaecba")) // expected output NO
console.log(solution("kashdjbasdbasdb"))
