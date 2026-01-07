const noWA = "6281234567890";

let produk = JSON.parse(localStorage.getItem("produk")) || [
  {
    nama: "facion style korea",
    deskripsi: "Bahan lembut, terbuat dari kain katun",
    harga: 200000,
    gambar: "images/p1.jpg"
  }
];

function simpan(){
  localStorage.setItem("produk", JSON.stringify(produk));
}
