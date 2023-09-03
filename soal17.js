// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.


function solution(n) {
    // tulis jawabanmu disini

    // 1. membuat kondisi jika lebih dari sama dengan 91 sampe 100 maka nilai A
    if(n >= 91 && n <= 100){
        return 'A'
    }
    // 2. membuat kondisi jika lebih dari sama dengan 81 sampe 90 maka nilai B
    else if(n >= 81 && n <= 90){
        return 'B'
    }
    // 3. membuat kondisi jika lebih dari sama dengan 71 sampe 80 maka nilai C
    else if(n >= 71 && n <= 80){
        return 'C'
    }
    // 4. membuat kondisi jika lebih dari sama dengan 61 sampe 70 maka nilai D
    else if(n >= 61 && n <= 70){
        return 'D'
    }
    // 5. membuat kondisi jika kurang dari sama dengan 60 maka nilai E
    else if(n <= 60){
        return 'E'
    }
}

console.log(solution(95)) // expected output A
console.log(solution(76)) // expected output C
