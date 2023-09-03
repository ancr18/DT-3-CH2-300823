// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
  // tulis jawabanmu disini 
  
  // 1. buat variabel untuk menampung hasil
  let result = "";
  // 2. perulangan sebanyak panjang nya string
  for(let i = 0; i < str.length + 1; i++){
    // 3. jika nilai pada string terdapat titik (.) dan undefined maka pada result ubah menjadi ()
    if(str[i] === '.' || str[i] === undefined){
      result += '()'
    }
    // 4. jka tidak, maka nilainya tetap 
    else{
      result += str[i]
    }
  }

  return result;
}

console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()
