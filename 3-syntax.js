//--Javascript Syntax//

//--Cara membuat variabel:
var x;
let x;

//--Cara menggunakan variabel:
x = 5;
y = 6;

//--Javascript Values terbagi menjadi 2:
//1. Fixed values : Nilai yang sudah ditetapkan (Literals)
//2. Variabel values : Nilai yang bisa diinisialisasi/diisi (Variables)

//--Javascript Literals terbagi menjadi 2:
//1. Nomor yang desimal ataupun tidak, contoh : 10.50 dan 1001
//2. String teks yang kutip 1 ('') atau 2 (""), Contoh : "John Doe" dan 'john doe'

//--Javascript Variables untuk menyimpan data nilai/value yaitu menggunakan var, let, dan const, contoh :
let x;
x = 6;
const x = 3;
var y = 4;

//NOTE : let untuk nilai yang bisa berubah, const untuk nilai yang tidak bisa diubah, var untuk browser lama.

//--Javascript Operators, Javascript yang menggunakan operator aritmatika ( + - * / %(modulus) ++ ** --) untuk menghitung values atau nilai:
//contoh :
(5 + 6) * 10
//assignment operator ( = ) untuk menentukan nilai ke variabel
//contoh :
let x, y;
x = 5;
y = 6;

let x;
x = 5;
x++;
z = x;

let text = "Hello"; text += " World"; //operator additional +=, hasil "Hello World"

//operator substraction -=(10 - 5)
let x = 10;
x -= 5;

//--Javascript expression, kombinasi antara values, variables, dan operator, yang dimana bisa dihitung nilainya
//perhitungannya disebut evaluation atau evaluasi
//contoh 5 * 10 evaluates/evaluasi menjadi 50:
5 * 10
x * 5
//tipenya juga bisa string atau campuran nomor
//contoh:
"john" + " " + "doe"

//--Javascript Keywords/kata kunci, dipakai untuk mengidentifikasi aksi untuk dijalankan/ditampilkan
//keyword (let) untuk memanggil browser untuk create/membuat variabel:
//contoh:
let x; y;
x = 5 + 10;
y = x * 10;
//keyword (var) juga untuk memberitahu browser untuk membuat variabel
var x; y;
x = 5 + 6;
y = x * 10;

//--Javascripts comment, tidak semua statement itu di eksekusi, slash "//" atau antara /* dan */ itu bisa digunakan untuk komentar(membuat baris tidak dieksekusi)
//contoh:
//hello world
/*hello world*/

//--Javascript identifiers / names, identifiers atau pengidentifikasi digunakan untuk menamai variabel dan keywords atau kata kunci serta functions (fungsi).
//peraturan penamaan yang legal sama seperti kebanyakan bahasa pemrograman
//penamaan javascript harus dimulai dengan:

//huruf (A-Z atau a-z)
//tanda dollar ($)
//atau underscore (_)

//NOTE : nomor tidak bisa menjadi karakter pertama sebuah nama, oleh karena itu javascript mudah untuk dicari penamaannya

//--Javascript in case sensitive, javascript itu sensitive terhadap jenis huruf penamaan variabel,
//contoh: lastName dengan lastname, itu adalah variabel yang berbeda:
let lastName; lastname;
lastName = "Doe";
lastname = "Peterson";

//--Javascript and Camel Case, dalam sejarah, programer mempunyai cara untuk menggabungkan huruf variabel ke berbagai jenis
//contoh :
//1. Hypens (-), first-name
//tidak bisa digunakan di javascript karena tanda (-) merupakan operator
//2. Underscore (_), first_name
//3. Upper Camel Case (Pascal case), seperti punuk unta penamaan hurufnya (kecil dan besar/kapital)
//contoh : FirstName

