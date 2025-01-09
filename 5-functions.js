/*Function berfungsi untuk mengeksekusi task yang berkomplikasi atau ber part part 
Function dalam javascript tereksekusi jika ada yang memanggil functionnya*/

//contoh fungsi hitung luas dengan parameter P, L dan menggunakan return
//mengapa menginisialisasi panjang = 10 bukan p = 10?
//karena parameter bersifat fleksibel bisa menggunakan variabel lain
function hitungLuas(P, L){
    return P * L;
}

let panjang = 10;
let lebar = 2;

console.log("Luasnya adalah :" + hitungLuas(panjang, lebar));

//berikut adalah contoh yang tidak menggunakan return
//mengapa tidak perlu menggunakan return atau biasa disebut void?
/*karena nilai dalam fungsi tidak perlu dikembalikan atau fungsinya
tidak untuk dihitung melainkan hanya untuk dicetak saja*/

function greeting(ucap){
    console.log(ucap);
}

greeting("hallo world");

//Function Return
/*fungsi akan berhenti ketika sampai tahap return
kemudian nilai akan kembali ke function yang dipanggil*/
//Contoh : 
let B = bFunction(4,3);

function bFunction(a, b){
    return a * b;
}

console.log(B);
//hasil B = 12;
/*Kenapa Bukan let x = function myFunction(4, 3);?
Penulisan seperti itu salah, karena kata kunci function digunakan untuk membuat fungsi, bukan untuk memanggil fungsi.
Jika kita menulis function myFunction(4, 3), JavaScript akan bingung karena kita mencoba mendefinisikan fungsi sambil 
memberikan nilai (argument) pada saat yang sama, yang tidak diperbolehkan.*/

//OPERATOR ()
//operator () bisa disebut juga (panggil) fungsi tersebut.
//Contoh:

function convertCelcius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let hasilHitung = convertCelcius(50);
console.log(hasilHitung);

//Fungsi bisa dipakai untuk nilai variabel
//Contoh :
let D = toCelcius(33);
let text = "temperaturnya adalah" + D + "Celsius";
//bisa diubah menjadi seperti ini:
//let teks = "temperaturnya adalah" + toFahreinheit(44) + "fahreinheit";

function toFahreinheit(nilai){
    return nilai * 2;
}

let teks = "temperaturnya adalah" + toFahreinheit(22) + "fahreinheit";
console.log(teks);

//LOCAL VARIABLES
/*Variabel yang dideklarasi di dalam fungsi akan menjadi
local variabel yang dimana hanya bisa dipakai di wilayah fungsi tersebut,
local variabel berfungsi saat function dimulai, dan local variabel dihapus
saat fuction dihapus*/

//Contoh :

//kode di atas sini tidak bisa pakai variabel Mobil
function mobilFunction(){
    let Mobil = "Avanza";
    //kode disini bisa memakai variabel Mobil
}
//kode disini tidak bisa menggunakan variabel Mobil