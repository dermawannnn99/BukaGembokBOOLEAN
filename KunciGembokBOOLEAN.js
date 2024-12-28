/**
 * case kali ini, buat if else untuk membuka kunci gembok
 * yang hanya bisa membuka kunci akses hanya admin
 */

let AksesAdmin = true //akses admin diizinkan membuka gembok
let AksesUser = false

if (AksesAdmin || AksesUser) {
    console.log ("Gembok Berhasil Dibuka")
}
else {
    console.log ("Gembok Hanya Bisa Dibuka dengan Akses Admin!")
}