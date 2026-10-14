
const UKURAN_TIM = 5;

document.getElementById("formDaftar").addEventListener("submit", function(event) {
    event.preventDefault();

    const namaTim = document.getElementById("nama").value;
    const jumlahAnggota = Number(document.getElementById("anggota").value);

    if (jumlahAnggota !== UKURAN_TIM) {
        alert("Satu tim wajib terdiri dari " + UKURAN_TIM + " orang!");
    } else {
        alert("Tim " + namaTim + " berhasil didaftarkan!");
    }
});
