//OBJECTS
//object adalah sebuah variabel yang memiliki banyak value dengan propertinya
//contoh object

const car = {merk: "toyota", warna:"hitam", jumlah:2};

//bisa juga untuk memasukan object ke dalam literal "{}"
//buat objek
const makan = {};
//tambah properties
makan.pertama = "nasi";
makan.kedua = "sayur";
makan.harga = 2000;

console.log(makan);

//bisa juga menggunakan kata kunci atau keyword "new Object()"
//Contoh :

// Buat Object
const person = new Object();

// Buat Properti
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

//Namun untuk lebih baik performanya dan cepat serta simpel eksekusi programnya
//direkomendasikan dengan literal method atau "{}"

//OBJECT PROPERTIES
//properties sangat penting dalam object, dia bisa ditambahkan dihapus, diubah bahkan hanya bisa dibaca

// Cara mengakses property :

// objectName.property
let age1 = person.age;

//objectName["property"]
let age2 = person["age"];

//objectName[expression]
let age3 = person[x];

let jajan = {};
jajan.nama = "permen";
jajan.harga = 2000;
jajan.tempat = "warung";
console.log(jajan);

//contoh akses cara 1 (variable.properti)
console.log("dia suka jajan " + jajan.nama + " yang harga " + jajan.harga + " di " + jajan.tempat);
//contoh akses cara 2 (variabel["array"])
console.log(jajan["harga"]);  //harga kan number, mengapa di arraynya string(""), karena harga adalah properti bukan value
//contoh akses cara 3 (expression)
let nm = "nama";
let hrg = "harga";
let tpt = "tempat";
console.log("jajanan itu adalah " + jajan[nm] + " harganya " + jajan[hrg] + " beli di " + jajan[tpt]);
//jadi cara nomor 3 di atas adalah menginisialisasi properti dengan variabel baru untuk dipanggil valuenya

//Delete Properties (menghapus properties)
let sepeda = {
    rantai : "bagus",
    batangan : "solois",
    jumlah : 1,
}
console.log(sepeda);
delete sepeda.rantai;
//bisa juga
delete sepeda["rantai"]; //mengapa menggunakan string? karena rantai adalah value

//Nested Objects (Objek yang bercabang)
//Value pada properti dalam objek bisa mempunyai properti lagi
//Contoh

let pelajar = {
    nama : "Eldy",
    kelas : 10,
    biodata : {
        alamat : "bogor",
        noHp : 8899,
    }
}

//cara akses nested objects
//cara 1
pelajar.biodata.alamat;
//cara 2
pelajar.biodata["alamat"];
//cara 3
pelajar["biodata"]["alamat"];
//cara 4
let bio = "biodata";
let alm = "alamat";
pelajar[bio][alm];

//OBJECTS METHODS
//object methods adalah methods ynag bisa berjalan di dalam object
//methods adalah definisi dari fungsi yang disimpan sebagai nilai(values) di dalam properti
//contoh

let orang = {
    namaDepan : "budi",
    namaBelakang : "dodi",
    namaLengkap : function lengkap(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}
//"this" itu menunjukan objek orang karena "this" berada pada ruang lingkup objek orang
//cara mengakses methods yang di dalam object adalah dengan 
//object.properti()
console.log (orang.namaLengkap());
//jika object.properti atau tanpa ()
//maka akan mencetak sintak fungsi itu sendiri

//Javascript methods on object
//di dalam objek methods kita bisa tambah javascript methods
//contoh toUpperCase (method untuk mengkapital semua huruf)
//contoh sintak :
let wisata = {
    tempat : "Bogor",
    kapital : function besar(){
        return (this.tempat).toUpperCase();
    }
}
    console.log(wisata.kapital());

//Javascript display Object (cara menampilkan object)
//Beberapa sousi untuk menampilkan objek javascript
/*
    Menampilkan object properties dengan nama (person.name)
    Menampilkan object properties dengan loop
    Menampilkan object dengan Object.values() 
    Menampilkan object dengan JSON.stringify()
*/

//contoh menampilkan dalam html
/*
<p id="demo"></p>
*/
const salam = {
    kalimatSalam : "Assalamualaikum"
};
document.getElementById("demo").innerHTML = salam.kalimatSalam;

//Menampilkan object dengan loop
const salam2 = {
    kalimatSalam : "Assalamualaikum",
    salamkeDua : "Akhi"
};

let text = "";
for (let X in salam2) {
    text += salam2[X] + " ";//X menginisialisasi semua properti pada objek salam2 lalu dikembalikan dengan nilai propertinya
};

console.log(text);
//atau
document.getElementById("demo").innerHTML = text;

//Menampilkan objek dengan Object.values(matkul);
const matkul = {
    pertama : "matematika",
    kedua : "penjas"
};
const myArray = Object.values(matkul);

console.log(myArray);
document.getElementById("demo").innerHTML = myArray;

//Object.etnries()membuat lebih simpel untuk menggunakan loops untuk object
const fruits = {Bananas:300, Oranges:200, Apples:500};

let teks = "";
for (let [fruit, value] of Object.entries(fruits)) {
    teks += fruit + ": " + value + "<br>";
}

//Menampilkan dengan JSON.stringify()
//objek javascript bisa dikonversi menjadi string dengan JSON method JSON.stringify()
//contoh :
const game = {
    fight : "The Warriors",
    sport : "Wining Eleven"
}

let myString = JSON.stringify(game);

console.log(myString);
//ditampilkan dalam bentuk JSON, hasilnya :
/*{"fight":"The Warriors","sport":"Wining Eleven"}*/

//tampilkan dalam html
document.getElementById("demo").innerHTML = myString;

//Object Constructor functions
//Terkadang kita membutuhkan untuk membuat banyak objek dengan tipe yang sama
//untuk membuat tipe objek, kita memakai object construct function.
//Contoh :
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
//dalam function constructor, "this" itu ngga punya value, value "this" akan menjadi obek baru jika objek baru, dibuat.

//Sekarang kita bisa menggunakan new Person() untuk membuat banyak objek Person :
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
//jadi construktor parameternya menampung value diatas untuk dijadikan value properti.

//Menambah properti ke sebuah object
//contoh:
hobiku.dirumah = "baca buku";
//properti baru diatas akan ditambahkan di objek hobiku bukan person objek

//Menambah properti ke Constructor itu tidak bisa kecuali mengunakan function prototype
//contoh yang salah :
Person.nationality = "Indo";
//contoh yang benar:
Person.prototype.nationality = "Indo";

//Constructor Function Methods
//Sebuah constructor bisa juga mempunyai methods
//Contoh :
function namaMurid(depan, belakang){
    this.namaDepan = depan,
    this.namaBelakang = belakang,
    this.namaLengkap = function(){
        return this.namaDepan + " " + this.namaBelakang;
    };
}

//Menambahkan method ke sebuah objek
//Contoh
myMother.changeName = function (nama) {
    this.lastName = nama;
}

//Menambahkan method ke sebuah objek harus menggunakan function prototype
//Contoh :
myMother.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");

//Daftar tipe Javascript yang ada pada dalam constructor :
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

//Apakah kamu tahu?
/*
Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().


//Contoh terakhir : 
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function
*/