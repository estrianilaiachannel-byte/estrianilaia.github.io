const box = document.getElementById("produk");

function tampil(){
  box.innerHTML = "";
  produk.forEach((p,i)=>{
    box.innerHTML += `
      <div class="card">
        <img src="${p.gambar}">
        <h3>${p.nama}</h3>
        <p>${p.deskripsi}</p>
        <h4>Rp ${p.harga.toLocaleString()}</h4>

        <a class="wa"
           href="https://wa.me/${noWA}?text=Saya ingin membeli ${p.nama}"
           target="_blank">WhatsApp</a>

        <div class="btn">
          <button class="edit" onclick="edit(${i})">Edit</button>
          <button class="hapus" onclick="hapus(${i})">Hapus</button>
        </div>
      </div>
    `;
  });
}
tampil();

function tambah(){
  produk.push({
    nama: nama.value,
    deskripsi: deskripsi.value,
    harga: parseInt(harga.value),
    gambar: gambar.value
  });
  simpan();
  tampil();
  nama.value = deskripsi.value = harga.value = gambar.value = "";
}

function hapus(i){
  if(confirm("Hapus produk?")){
    produk.splice(i,1);
    simpan();
    tampil();
  }
}

function edit(i){
  nama.value = produk[i].nama;
  deskripsi.value = produk[i].deskripsi;
  harga.value = produk[i].harga;
  gambar.value = produk[i].gambar;
  hapus(i);
}
