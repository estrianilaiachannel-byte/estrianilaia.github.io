if(localStorage.getItem("admin") !== "true"){
  location.href = "admin.html";
}

let list = document.getElementById("list");

function tampil(){
  list.innerHTML = "";
  produk.forEach((p,i)=>{
    list.innerHTML += `
      <div class="card">
        <img src="${p.gambar}">
        <h3>${p.nama}</h3>
        <p>${p.bahan}</p>
        <p><b>Rp ${p.harga.toLocaleString()}</b></p>
        <button class="edit" onclick="edit(${i})">Edit</button>
        <button class="hapus" onclick="hapus(${i})">Hapus</button>
      </div>
    `;
  });
}
tampil();

function tambah(){
  if(!nama.value || !harga.value) return alert("Lengkapi data!");

  produk.push({
    id: Date.now(),
    nama: nama.value,
    bahan: bahan.value,
    harga: parseInt(harga.value),
    gambar: gambar.value || "https://via.placeholder.com/300"
  });

  simpan();
  tampil();
  nama.value = bahan.value = harga.value = gambar.value = "";
}

function hapus(i){
  if(confirm("Hapus produk ini?")){
    produk.splice(i,1);
    simpan();
    tampil();
  }
}

function edit(i){
  nama.value = produk[i].nama;
  bahan.value = produk[i].bahan;
  harga.value = produk[i].harga;
  gambar.value = produk[i].gambar;
  hapus(i);
}
