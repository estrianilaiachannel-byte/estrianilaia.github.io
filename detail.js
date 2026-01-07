let id = new URLSearchParams(window.location.search).get("id");
let p = produk.find(x => x.id == id);

document.getElementById("detail").innerHTML = `
  <img src="${p.gambar}">
  <h2>${p.nama}</h2>
  <p>Harga: Rp ${p.harga}</p>
  <p>Komposisi: ${p.komposisi}</p>
  <a href="https://wa.me/6281234567890?text=Saya%20ingin%20pesan%20${p.nama}" target="_blank">
    Pesan via WhatsApp
  </a>
`;
