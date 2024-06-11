<h3>Sebuah Repositori mengenai Pembelajaran React😄</h3>
<center>
<p style="text-align:center;">
 <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="100" height="100"/>&nbsp;
</p>
</center>
<h1>Memulai React  </h1>
->Menggunakan react membutuhkan 2 script react yang bisa kita panggil lewat unkpkg.com
->react sebagai library utama
->react-dom agar kita bisa menggunakan method - method untuk mainipulasi dom
 
<h1>EMOTE KEYBOARD</h1>
Windows + titik

->type script = text/babel atau text/JSX

<h1>FUN FACT</h1>
->setiap JSX atau babel yang memiliki element html diharuskan memggunakan tag penutup

<h1>3 ATURAN JSX</h1>
1.Selalu Mengembalikan satu element
Solusi : Bungkus beberapa element ke dalam satu element tag kosong <> element lainnya </>
2.Selalu Tutup semua tag
contoh : <img />, <br />
3.Gunakan camelCase untuk Atribut
contoh : class pada html : className=""
         onclick pada html : onClick={e => {alert('ok!')}} 

<h1>Dasar React</h1>
4.KOMPONEN
membuat komponen di function dan di return tag html;

5.KOMPONEN BERSARANG
KOMPONEN di dalam KOMPONEN

6.Menggunakan Kembali Komponen

7.PROPS
->samam seperti parameter pada function yang sapat digunakan jika komponen sama tapi value berbeda

8.PROPS REFACTOR
->destructuring teknik
->ternary

9.UNIQUE KEY 

10.STATE
->Data yang berubah seiring waktu
->biasanya diawali dengan set 
contoh : setLikes

11.HOOKS
->Menambahakan logic 
contoh : setState() -> untuk mengembalikan array (mengelola state)


<h1>Instalasi dan Konfigurasi</h1>

1.Build Tools
->viteJS

2.Instalasi vite
->PNPM create vite

3.Instalasi PNPM
npm install -g pnpm

4.Dist 
->client web

<h1>Easy Function</h1>
1. .... = Spread Operator

2.Fungsi e.preventDefault()\
->keamanan
->agar saat melakukan submit http website tidak diredirect ke page yang lain
contoh :
sebelum : localhost/1234/susububuk
setelah : localhost/1234

data tetap ditambahkan tetapi http tidak tambah

3.GuardClose
-> menggunakan sepert (!name)

4.Destructer 
parameter yang terdapat pada function tetapi parameter menggunakan ({parameter}) kurung buka didalamnya
->destructing dapat diambil dari function yang ditampilkan dan memiliki atribut atau event
contoh :
<Form onItem=()>

function Form({onItem}){
    
}

<h1>COMPONENT</h1>
1.Stateless
->tidak memeiliki State
->menerima state hanya auntuk menampilkan data
- >biasanya hanya menampilkan data kecil saja
contoh :
function header
function Anime

2.Stateful
->punya state
->bisa reusable
contoh :
function search()

3.Structural COMPONENT
->berperan membuat struktur aplikasi
(layout,screen,pages
)
->contoh
function main atau function app
->berukuran besar dan tidak dapat dipakai kembali (non-reusable)

<h1>Teknik</h1>
LIFTING STATE UPP

PropDrilling

1.TEknik Container Component

