/*
Javascript mempunyai 8 tipe data :
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object
*/

//contoh String ("")
let x = "sepeda";

//contoh number 
let y = 20;

//contoh boolean
let z = false;
let I = true;

let xx = 5;
let yy = 5;
let zz = 6;
(xx == yy)       // Returns true
(xx == zz)       // Returns false

//contoh object
const Mobil = {warna : "hitam", jenis : "matidc", jumlah: 1};

//contoh array object
const Motor = ["beat","hitam",1];

//contoh date object
const Tanggal = new Date ("02-06-2002");

//NOTE : Variabel javascript mendukung semua tipe data

/*
Konsep tipe data :
Tipe data sangat penting dalam dunia pemrograman agar bisa terkomputasi hasilnya
sebagai contoh, kode berikut tidak akan bisa di eksekusi jika tidak ada tipe data
*/

let hitung = 18 + "motor";

/*kode diatas akan menjadi string yaitu = "18motor", karena jika ada komputasi nomor
berhadapan dengan string maka akan menjadi string*/

let perhitungan = 12 + 10 + "motor";

/*kode diatas akan menjadi "22motor", kenapa hasilnya bisa dijumlah? karena Javascript
menghitung dari kiri ke kanan
*/

//Tipe data javascript itu dinamis (bisa berubah), contoh:
let buah;
buah = "dijual";
buah = "terjual";

//untuk mengetahui tipe data bisa menggunakan (typeof), contoh:
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

//tipe data undeined  (tidak terdefinisi), contoh:

let bakso; //ini tidak terdefinisi karena tidak ada valuenya/nilai, dan ini tidak terdefinisi type dan valuenya

let soto = undefined; //ini juga tidak terdefinisi baik type dan valuenya