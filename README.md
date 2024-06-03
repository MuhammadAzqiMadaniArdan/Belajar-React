Sebuah Repositori mengenai Pembelajaran React😄

Memulai React
->Menggunakan react membutuhkan 2 script react yang bisa kita panggil lewat unkpkg.com
->react sebagai library utama
->react-dom agar kita bisa menggunakan method - method untuk mainipulasi dom
 
EMOTE KEYBOARD
Windows + titik

->type script = text/babel atau text/JSX

FUN FACT
->setiap JSX atau babel yang memiliki element html diharuskan memggunakan tag penutup

3 ATURAN JSX
1.Selalu Mengembalikan satu element
Solusi : Bungkus beberapa element ke dalam satu element tag kosong <> element lainnya </>
2.Selalu Tutup semua tag
contoh : <img />, <br />
3.Gunakan camelCase untuk Atribut
contoh : class pada html : className=""
         onclick pada html : onClick={e => {alert('ok!')}} 

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


Instalasi dan Konfigurasi

1.Build Tools
->viteJS

2.Instalasi vite
->PNPM create vite

3.Instalasi PNPM
npm install -g pnpm

4.Dist 
->client web

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

COMPONENT
2.Stateless
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

LIFTING STATE UPP

PropDrilling

1.TEknik Container Component

