const products = JSON.parse(localStorage.getItem("products"));
const container = document.querySelector(".product-container");

container.innerHTML = "";
products.forEach(p => {
container.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<h4>Rp ${p.price.toLocaleString()}</h4>
<a href="detail.html?id=${p.id}" class="btn">Detail</a>
</div>
`;
});
