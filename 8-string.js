//String itu untuk menyimpan teks
//String ditulis dengan quote
//Contoh :
let text = "John Doe";
//single quotes juga bisa
let text2 = 'john Doe';

//Quotes di dalam quotes
//Kamu bisa memakai quotes di dalam quotes asal tidak bersinggungan quotes disekitar string
//Contoh :
let answer1 = "It's Allright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

//Temmplate Strings (``) bisa menyimpan dua jenis quotes("" dan '')
//Contoh :
let doubleQuotes = `nama aku "Eldy" biasa dipanggil 'el'`;
//NOTE : Template tersebut tidak disupport browser internet explorer

//STRING LENGTH
//Untuk mengetahui panjang string, bisa menggunakan length property:
//Contoh :
let teks = "abcdefghijklmn";
let panjangTeks = teks.length;
console.log(panjangTeks);

//ESCAPE CHARACTERS
//Karena strings harus ditulis diantra quotes, javascript akan binung jika ada dua quotes yang sama jenisnya di dalam satu strings
//Contoh yang salah :
//let badStrings = "Panggil aku "Shiva" paman";

//Untuk mengatasinya kamu harus menggunakan escape character
//backlash character (\) menukar spesial karakter ke dalam string
//diantaranya contoh backslash :
/*

Kode	    Hasil	     Deskripsi
\'	        '	        Single quote
\"	        "	        Double quote
\\	        \	        Backslash

*/
//Contoh
let goodStrings = "Panggil aku \"Shiva\" Paman";
//Output : Panggil aku "Shiva" Paman

//6 escape karakter lainnya :
/*
Code	Result
\b	    Backspace
\f	    Form Feed
\n	    New Line
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator
*/

//BREAKING LONG LINES (Mencegah kode panjang)
//Contoh (kita bisa pakai baris baru untuk statement setelah operator):
document.getElementById("demo").innerHTML =
"Hello Dolly!";

//JavaScript Strings as Objects
//Normalnya javascript strings adalah primitive values, dibuat dari literals(penginisialisasikan):
let x = "john";

