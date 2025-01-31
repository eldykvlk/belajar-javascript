//STRING TEMPLATE
//tata cara penggunaan atau penempatan string

//Back-Tics Syntax
//lebih baik menggunakan back tics (``) untuk mendefinisikan string
let stringBackTics = `aku biasa dipanggil ELdy`;

//Quotes Inside Strings
//mendukung double quiotes di dalam sebuah string
let stringInside = `aku biasa dipanggil "ELdy"`;

//Multiline Strings
//string mendukung jenis dua baris string
let TeksMultiLine = `aku biasa
                    dipanggil
                    Eldy`;

//Interpolation
//String bisa menyisipka expression dan variabel ke string
//Sintak nya : ${...}

//Variable Substitutions
//Template Strings mendukung variabel ada di dalam string
let makanan = "Nasi";
let minuman = "Air putih";
let teksSubstitusi = `Aku suka makan ${makanan} dan minum  ${minuman}`;
teksSubstitusi;

//Expression Substitution
//Untuk mendukung expression string
let nilaiTerbesar = 80;
let nilaiTerkecil = 40;
let hasilSelisih = `Total hasil selisih : ${nilaiTerbesar - nilaiTerkecil}`;
hasilSelisih;

//HTML Templates
//Memasukan string bervalue ke html
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
html;