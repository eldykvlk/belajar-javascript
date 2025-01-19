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
//metode itu menggunakan 2 paraeter yaitu start position, dan end position (end tidak termasuk)
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
let substr1 = texti.substr(7,12);
substr1;

//Jika parameternya hanya satu maka akan mencetak akhir dari urutan string
let substr2 = texti.substr(7);
substr2;

//Jika parameternya negatif maka akan dihitung mulai dari akhir string ke urutan akhir
let substr3 = texti.substr(-4);
substr3;
