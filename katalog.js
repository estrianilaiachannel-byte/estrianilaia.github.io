let box = document.getElementById("produk");

produk.forEach(p => {
  box.innerHTML += `
    <div class="card">
      <img src="${p.gambar}">
      <h3>${p.nama}</h3>
      <p>${p.bahan}</p>
      <p><b>Rp ${p.harga.toLocaleString()}</b></p>
      <a class="wa" 
         href="https://wa.me/6281234567890?text=Saya%20ingin%20membeli%20${p.nama}" 
         target="_blank">
         WhatsApp
      </a>
    </div>
  `;
});
