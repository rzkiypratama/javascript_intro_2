// 1. replace()
// Fungsinya mengganti string lama dengan string yang baru.
// Parameternya adalah string.replace(stringLama, stringBaru)
// contoh
let text = "Pak Abu berburu kucing berwarna abu-abu"; // stringLama yang memiliki value yang akan dicari dan diganti dengan value dari stringBaru
let result = text.replace(/abu/g, "radikal"); // parameter yang memiliki value pengganti untuk stringLama
console.log(result)

let nama = "juki juki";
let namaBaru = nama.replace(nama, "kecoak terbang");

console.log(namaBaru)

// 2. substr()
// Menyalin string dari indeks ke-n dengan panjang tertentu.
// Parameternya adalah string.substr(start, length)
// Contoh
let namaPanjang = "Abhimata Pratama";
let namaPanggilan = namaPanjang.substr(1, 5);
console.log(namaPanggilan);

let text1 = "Hello world!"; 
let result1 = text1.substr(6, 6);
console.log(result1);

// 3. concat()
// Berfungsi untuk menggabungkan dua buah string atau lebih
// Parameter array1 array2 dst
// Contoh
let grupA = ["Kenzo", "Genji", "Wakabayashi"]
let grupB = ["Zeus", "Thor", "Captain Marvel"]
let grupC = ["Spiderman"]
const paguyubanSuperhero = grupA.concat(grupB, grupC);

console.log(paguyubanSuperhero);

// 4. round()
// Membulatkan sebuah bilangan atau number ke integer terdekat
// contoh
let a = Math.round(234.2);
let b = Math.round(6969.69);
let c = Math.round(2.49);
let d = Math.round(-2.60);
let e = Math.round(-2.50);
let f = Math.round(-2.49);

const hasilNya = [a, b, c, d, e, f]

console.log(hasilNya)

// 5. toUpperCase()
// Menjadikan semua huruf dalam string menjadi huruf besar (huruf kapital)
// contoh
let contohNih = "dua tiga tupai berlari";
let result3 = contohNih.toUpperCase();
console.log(result3)