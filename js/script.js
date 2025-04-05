fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('product-grid');
    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product';
      card.innerHTML = `
        <a href="products/product${product.id}.html">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">$${product.price}</p>
        </a>
      `;
      grid.appendChild(card);
    });
  });
