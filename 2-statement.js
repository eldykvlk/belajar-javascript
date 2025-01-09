//-----------Statement------------

//Statement terdiri dari Values, Operators, Expressions, Keywords, and Comments.
//run di console inspect element

let a, b, c;
a = 10;
b = 20;
c = a + b;
console.log(c);
//one line juga bisa
a = 20; b = 30; c = a + b;

//---------------White Space
//Javasript itu bisa mengandalkan white space atau spasi untuk mudah dibaca
//contoh :
//dari
//let nama ="Andi";
//menjadi
let nama = "Andi";


//--------------Line Break
//Javascript bisa banget spasi baris selanjutnya sampai lebih dari 80 karakter biar mudah dibaca, contoh:
//dari
document.getElementById("demo").innerHTML="hello world";
//menjadi 
document.getElementById("demo").innerHTML
="hello world";


//--------------Code Blocks
//Javascript bisa banget menjalankan beberapa statement dalam satu kurung kurawal "{}" karena fungsi kurung kurawal untuk itu
//Contoh
function codeBlock(){
    document.getElementById("statement1").innerHTML="hello1";
    document.getElementById("statement2").innerHTML="hello2";
    document.getElementById("statement3").innerHTML="hello3";
}


//---------------Javascript Keywords
/*
Keyword	Description
var	Declares a variable
let	Declares a block variable
const	Declares a block constant
if	Marks a block of statements to be executed on a condition
switch	Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop
function	Declares a function
return	Exits a function
try	Implements error handling to a block of statements
*/


