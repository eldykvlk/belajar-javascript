//String Javascript bersifat primitif dan tidak dapat diubah: Semua metode string menghasilkan string baru tanpa mengubah string asli
//beberapa methods strings :
/*
String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

//JAVASCRIPT STRING LENGTH
//menghitung panjang string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
length;

//JAVASCRIPT STRING CHARACTERS
//ada empat (4) metode dalam mengekstrak karakter string
/*
1.methods at(position)
2.methods charAt(position)
3.methods charCodeAt(position)
4.memakai properti access [] seperti array
*/

//1. JAVASCRIPT STRING chartAt()
//methods ini mengembalikan karakter sebuah spesifik index(position) ke dalam  string
//contoh :
let text2 = "hello world";
let char = text2.charAt(0);
char;

//2. JAVASCRIPT STRING charCodeAt()
//Methods ini mengembalikan karakter kode di inde spesifik di dalam sebuah string
//Methods ini mengembalikan UTF-16 code (sebuah integer antara 0 sampai 65535)
//Contoh :
let text3 = "Hello World";
let char3 = text3.charCodeAt(1);
char3;

//3. JAVASCRIPT STRING at()
//ES2022 mengenalkan metode string at()
//ini untuk mengetahui string sesuai spesifik index
//metode ini bisa memasukan index minus (-) dibanding methods charAt()
//contoh :
let text4 = "Eldy";
let  char4 = text4.at(0);
char4;
//bisa juga begini
let char4v2 = text4[0];
char4v2;

//4.Property Access[]
//Contoh:
let text5 = "hello";
let char5 = text5[2];
char5;
/*
Akses properti mungkin sedikit tidak dapat diprediksi:
Itu membuat string terlihat seperti array (padahal sebenarnya tidak)
Jika tidak ada karakter yang ditemukan, [ ] mengembalikan tidak terdefinisi, sedangkan charAt() mengembalikan string kosong.
Itu hanya bisa dibaca. str[0] = "A" tidak memberikan kesalahan (tetapi tidak berfungsi!)
*/
text5[0] = "A";

//Extracting String Parts
//Ada 3 metode untuk ekstrak part sebuah string:
/*
1.slice(start, end)
2.substring(start, end)
3.substr(start, length)
*/

//1.Slice
//mengekstrak sebuah string menjadi string baru
//metode itu menggunakan 2 parameter yaitu start position, dan end position (end tidak termasuk)
let texti = "Apple, Banana, Kiwi";
let partSlice1 = texti.slice(7, 13);
partSlice1;

//Jika hanya menggunakan 1 parameter maka akan mengembalikan/memotong sisa String
let partSlice2 = texti.slice(7);
partSlice2;

//Jika menggunakan angka negatif di parameter, maka akan memotong dari end atau dari string akhir ke awal
let partSlice3 = texti.slice(-12);
partSlice3

let partSlice4 = texti.slice(-12, -6);
partSlice4

//2.substring
//substring() mirip dengan slice().
//Perbedaannya adalah nilai awal dan akhir kurang dari 0 diperlakukan sebagai 0 di substring().
//Jadi ngga bisa parameter minus, seperti(-12, -6), hasilnya akan Apple, Banana, Kiwi
let subs1 = texti.substring(-12, 5);
subs1;

//3.substr
//substr() mirip dengan slice().
//Perbedaannya adalah parameter kedua menentukan panjang bagian yang diekstrak.
let substr1 = texti.substr(7,12);//Banana, Kiwi ada di antara 7 dan 12
substr1;

//Jika parameternya hanya satu maka akan mencetak akhir dari urutan string
let substr2 = texti.substr(7);
substr2;

//Jika parameternya negatif maka akan dihitung mulai dari akhir string ke urutan akhir
let substr3 = texti.substr(-4);
substr3;

//CONVERTING TO UPPER AND LOWER CASE
//Mengubah ke huruf besar dan huruf kecil

/*
1.Jika ingin mengubah ke huruf besar pakai toUpperCase();
2.JIka ingin mengubah ke huruf kecil pakai toLowerCase();
*/
//Contoh :
let huruf = "Hello world";
let hurufBesar = huruf.toUpperCase();
hurufBesar;
let hurufKecil = huruf.toLowerCase();
hurufKecil

//JAVASCRIPT STRING CONCAT()
//concat() menggabung dua string atau lebih 
//Contoh :
let concat1 = "Hello";
let concat2 = "world";
let hasilConcat = concat1.concat(" ",concat2);
hasilConcat;
//jadi concat juga bisa menggantikan operator + dalam menggabung string, seperti mengganti ini :
let concatPlus = concat1 + " " + concat2;
concatPlus;
//NOTE:
//Semua string methods mengembalikan string baru, dia tidak memodifikasi string asli atau asalnya
//Singkatnya : string tidak bisa berubah, hanya terganti.

//TRIM
//JAVASCRPT STRING TRIM
//Trim berfungsi menghilangka space kosong dari dua sisi string
//Contoh :
let textTrim = "   Hello world     ";
let hasilTrim = textTrim.trim();
hasilTrim;

//JAVASCRIPT STRING trimStart()
//Sama seperti method trim namun ini hanya menghapus space kosong pada awal string
//Contoh :
let textStart = "    Hello World     ";
let hasilTrimStart = textStart.trimStart();
hasilTrimStart;

//JAVASCRIPT STRING trimEnd()
//Menghapus space kosong pada akhir string
//Contoh :
let textEnd = "    Hello World    ";
let hasilTrimEnd = textEnd.trimEnd();
hasilTrimEnd;

//JAVASCRIPT PADDING
//Padding adalah memberi string lapisan atau bantalan untuk diurut sampai ke panjang string yang diinginkan
//Lalu memunculkan value saat diurutannya

//padStart()
// adalah metode pads string dari urutan awal string.
let teksPadding = "5";
let setelahPadding = teksPadding.padStart(4, "0")
setelahPadding;
//kode diatas menjelaskan value teksPadding akan muncul saat string "0" sudah berurutan sampai 4 urutan.

//padEnd()
//adalah metode pads string dari urutan akhir string.
let teksPadding2 = "5";
let Endpadding = teksPadding2.padEnd(4, "0");
Endpadding;
//kode diatas menjelaskan value teksPadding akan muncul saat string "0" sebelum berurutan sampai 4 urutan.

//NOTE : padding adalah methods untuk string, jika ingin pad number. 
//Maka convert ke string dahulu
//Contoh :
let numberPad = 5;
let teksPadding3 = numberPad.toString();
let hasilPadding = teksPadding3.padStart(4, "0");
hasilPadding;

//JAVASCRIPT STRING repeat(count) parameter nomor pengulangan
//repeat() mengembalikan string berupa jumlah salinan string
//Contoh:
let repeat = "hello world ";
let hasilRepeat = repeat.repeat(2);
hasilRepeat;

//JAVASCRIPT STRING CONTENT replace()
//Mengganti spesifik value menjadi value yang lain
//Contoh
let teksReplace = "Hello World dan World";
let hasilReplace = teksReplace.replace("World", "dunia"); //huruf besar harus diperhatikan
hasilReplace;
//Replace hanya mengganti strng pertama yang diganti.
//replace sangat sensitive terhadap kapital atau tidaknya 
//huruf yang membuat dia tidak bisa berfungsi

//agar tidak menjadikannya sensitive maka gunakan regular expression
//dengan garis miring i (/i)
//Contoh : 
let teksReplace2 = "Hello World"
let hasilReplace2 = teksReplace2.replace(/world/i, "dunia");
hasilReplace2;

//Untuk mengganti semua huruf (spesifik) yang sama, pakai /g (pencocokan Global)
let teksReplace3 = "Hello World World World";
let hasilReplace3 = teksReplace3.replace(/World/g, "Dunia");
hasilReplace3;

//JAVASCRIPT STRING replaceAll()
//berfungsi mengganti semua string
//Contoh :
let teksReplace4 = "kucing, kucing domba";
let hasilReplace4 = teksReplace4.replaceAll("kucing", "ayam");
hasilReplace4;

//Jika ingin menggunakan regular expression (tidak spesifik)
//gunakan /g
//Contoh :
let teksReplace5 = "kucing, kucing, domba";
let hasilReplace5 = teksReplace5.replaceAll(/kucing/g, "domba");
hasilReplace5;

//JAVASCRIPT STRING split()
//String bisa diconvert menjadi array dengan split() method
//Contoh :
/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/


let teksSplit = "Hello, World";
let hasilSplit = teksSplit.split(",");
hasilSplit;
