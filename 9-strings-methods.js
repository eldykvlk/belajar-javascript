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