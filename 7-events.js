//HTML event adalah sesuai yang penting untuk kita bisa menjalankan javascript pada browser kita
//HTML events bisa digunakan dibeberapa kondisi, contoh :
/*
1. Saat halaman HTML selesai loading
2. Saat halaman HTML field inputnya telah terganti
3. Saat tombol HTML nya diklik dll.
*/

//HTML bisa menangani event handler atribut dengan kode javascript untuk ditambahkan di elemen HTML
//Contoh (bisa single quotes'', bisa double quotes """)
<element event="some javascript"></element>

//Contoh di bawah yaitu sebuah onclick attribute (dengan kode), ditambahkan ke <button elemen> :
//<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
//Contoh diatas, kode javascript mengganti konten elemen dengan id = "demo".


//DI contoh berikutnya adalah pergantian kode konten dalam elemen itu sendiri (memakai this.innerHTML) :
//<button onclick="this.innerHTML = Date()">The time is?</button>

//Beberaoa kode javascript sering menjadi panjang, lebih cocok jika melihat event attributes memangggil functions:
//Contoh :
//button onclick="displayDate()">The time is?</button>

//beberapa event html:
/*
onchange	HTML event yang terganti
onclick	    HTML event yang diklik
onmouseover	Jika arah panah mouse di sekitar element html
onmouseout	Jika arah panah mouse tidak di sekitar element html
onkeydown	Jika user mengkil keyboard
onload	    Jika browser sudah selesai loading
*/