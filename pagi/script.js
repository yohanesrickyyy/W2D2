// disimpan dengan extensi .js
// menghubungkan dengan html menggunakan tag script
// tag script bisa diletakan sebelum baris </body>
// javascript case sensitive: tidak boleh ada yang berbeda
// gunakan camelCase : tidak ada spasi, jika ada dua kata harus menggunakan camelCase
// diakhir cmd harus menggunakan semicolon ;

// document.getElementById("name").innerHTML="nama saya John Doe";

// Variabel JS
// 1. Penulisan nama variabel Bisa menggunakan huruf, angka, tanda _, dan tanda $
// 2. Penulisan nama Variabel Harus diawali dengan Huruf
// 3. Case sensitive
// 4. Tidak boleh ada SPASI. alternatif spasi menggunakan _
// 5. var, let, const

// var nama ="John Doe" // var sudah banyak digunakan oleh framework lain, yang menyebabkan kemungkinan error dengan framework lain.
// let nama = "John Doe"; // diprioritaskan dipergunakan dibandingkan dengan var
// const nama = "John Doe"; // mutlak tidak bisa diganti seperti phi (3,14)

// --------------------------------------------------------------------------------------------------

// TIPE DATA

// String : kata atau kalimat

// Number : tidak usah menggunakan petik 2 "" ataupun petik 1 '


// Array : Kumpulan data. menggunakan []
// contoh
///////////// 0         1       2          3  dst     (Indeks Array)
// var buah = ["Apel", "Jeruk", "mangga", "Alpukat"];
// document.getElementById("hasil").innerHTML = buah[1];


// Tipe Data Object : meruapakan data yang banyak dalam value
// var mobil ={
//   merk: "honda",
//   tahun: 2021,
//   warna: "hitam"
// };

// Object literal memanggil propery dalam tipe data object
// *tipe data "dibuat tahun" dan "pilihan warna yang tersedia adalah "disebut sebagai string kosong
// document.getElementById("mobil").innerHTML= mobil.merk + " dibuat tahun" + mobil.tahun + " pilihan warna yang tersedia adalah " + mobil.warna

// --------------------------------------------------------------------------------------------------

// Operator Aritmatika
// penjumlahan (+)
// pengurangan (-)
// perkalian (*)
// pembagian (/)
// modulus (%) : Sisa bagi contoh modulus 2x5=1 karena 2x5=10, 10-11=1
//increment (++)
// decrement (--)

// contoh  Operator Aritmatika
// let bilangan1= 6;
// let bilangan2= 3;

// let penjumlahan= bilangan1 + bilangan2;
// let pengurangan= bilangan1 - bilangan2;
// let perkalian = bilangan1 * bilangan2;
// let pembagian= bilangan1 / bilangan2;
// let modulus = bilangan1 % bilangan2;

// document.getElementById("penjumlahan").innerHTML= penjumlahan;
// document.getElementById("pengurangan").innerHTML = pengurangan;
// document.getElementById("perkalian").innerHTML = perkalian;
// document.getElementById("pembagian").innerHTML = pembagian;
// document.getElementById("modulus").innerHTML = modulus;

// --------------------------------------------------------------------------------------------------

// Function and Event

// Function : feature yang bisa kita panggil berkali-kali conth: getElementbyID
// contoh buat function sednri
// function nama_fungsi(){

// }
function tampilkan_kelas(){
  return "RMT 004";
}

document.getElementById("kelas").innerHTML= tampilkan_kelas();

// Event: aksi yang bisa dilakukan pada HTML
// seperti onchange, onclick, dll

// --------------------------------------------------------------------------------------------------

// Ecmascript 6

