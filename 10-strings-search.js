//JavaScript String indexOf()
//Mengembalikan index(position) dari kejadian pertama dalam sebuah string
//mengembalikan index -1 jika string tidak ketemu
let teksIndexOf = "Tolong ambilkan 'handuk' di tempat handuk";
let hasilIndexOf = teksIndexOf.indexOf("handuk");
hasilIndexOf;  
//NOTE : Javascrpt memulai hitung posisi dari 0

//jika posisi ingin diubah pakai parameter (string, nomor)
let hasilIndexOfparam = teksIndexOf.indexOf("handuk", 18);
hasilIndexOfparam;
//mengapa 35?karena huruf pertama string handuk dari urutan 18 adalah string handuk yang ke dua yaitu 35

//JavaScript String lastIndexOf
//Mengembalikan index(position) dari kejadian terakhir dalam sebuah string
let teksIndexOf2 = "Tolong ambilkan 'handuk' di tempat handuk";
let hasilIndexOf2 = teksIndexOf2.lastIndexOf("handuk");
console.log(hasilIndexOf2); 

//jika posisi ingin diubah pakai parameter (string, nomor)
let hasilIndexOfparam2 = teksIndexOf.lastIndexOf("handuk", 20);
hasilIndexOfparam2;

//JavaScript String search()
//Metode untuk mencari string dengan string, perbedaan dari indexOf adalah metode ini tidak
//bisa pakai parameter tambahan untuk mulai dari mana Tapi metode ini bisa pakai
//Regular expresion beda dengan index Of
let textSearch = "ambilkan handuk di tempat handuk";
let hasilSearch = textSearch.search("handuk")
hasilSearch;

//Jika pakai regular expression (jika ingin mencari tanpa mengenal kapital pakai /gi, seperti jika HANDUK)
let textSearch2 = "ambilkan handuk di tempat handuk";
let hasilSearch2 = textSearch2.search(/han/);
hasilSearch2;

//JavaScript String match()
//Mengambalikan array setelah pencocokan dari string ke string
let textMatch = "Ambilkan handuk di tempat HANDUK";
let hasilMatch = textMatch.match("nduk");
hasilMatch;
//dengan global search
let hasilMatch2 = textMatch.match(/nduk/g)
hasilMatch2;
//dengan global case sensitive
let hasilMatch3 = textMatch.match(/nduk/gi);
hasilMatch3;

//JavaScript String matchAll()
//untuk mencocokan kalimat di semua panjang string
let TeksMatchAll = "ambilkan handuk di tempat HANDUK";
let hasilMatchAll = [...TeksMatchAll.matchAll(/handuk/gi)];
hasilMatchAll;
/*
Cara Mengakses Hasil matchAll()
Karena matchAll() mengembalikan iterator, kita harus menggunakan spread operator (...), Array.from(), atau for-of loop untuk mengambil hasilnya.

1. Menggunakan Spread Operator (...)
javascript
Copy
Edit
let hasilMatchAllArray = [...TeksMatchAll.matchAll(/handuk/gi)];
console.log(hasilMatchAllArray);
Output:

javascript
Copy
Edit
[
  [ 'handuk', index: 8, input: 'ambilkan handuk di tempat HANDUK', groups: undefined ],
  [ 'HANDUK', index: 26, input: 'ambilkan handuk di tempat HANDUK', groups: undefined ]
]
2. Menggunakan Array.from()
javascript
Copy
Edit
let hasilMatchAllArray = Array.from(TeksMatchAll.matchAll(/handuk/gi));
console.log(hasilMatchAllArray);
Hasilnya sama seperti di atas.

3. Menggunakan for-of Loop
javascript
Copy
Edit
for (let match of TeksMatchAll.matchAll(/handuk/gi)) {
    console.log(match);
}
*/

//JavaScript String includes()
//Untuk mencocokan antar string apa memiliki value yang sama
//outputnya boolean (true dan false)
//method ini sensitive huruf kaptal
let teksInclude = "Ambilkan handuk di tempat HANDUK";
let hasilTeksInclude = teksInclude.includes("handuk");
hasilTeksInclude;
//jika pakai parameter start
let hasilTeksInclude2 = teksInclude.includes("handuk", 12);
hasilTeksInclude2;

//JavaScript String startsWith()
//Memastikan string diawal kalimat dengan spesifik
let teksStartWith = "Ambilkan handuk di tempat HANDUK";
let hasilTeksStartWith = teksStartWith.startsWith("Ambilkan");
hasilTeksStartWith;
//jika pakai parameter
let hasilTeksStartWith2 = teksStartWith.startsWith("handuk", 9);
hasilTeksStartWith2;

//JavaScript String endsWith()
//Memastikan string diakhir kalimat dengan spesifik
let teksEndWith = "Ambilkan handuk di tempat HANDUK";
let hasilEndWidth = teksEndWith.endsWith("HANDUK");
hasilEndWidth;
//jika memakai parameter
let hasilEndWidth2 = teksEndWith.endsWith("HANDUK", 32)
hasilEndWidth2

