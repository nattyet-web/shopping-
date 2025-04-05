// Fetch product data and display it on the homepage
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        
        // Display each product on the homepage
        products.forEach(product => {
            const productHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <a href="products/product${product.id}.html">View Details</a>
                </div>
            `;
            productList.innerHTML += productHTML;
        });
    });

// Fetch product details on the product page (e.g., product1.html)
if (window.location.pathname.includes('product')) {
    const productId = window.location.pathname.split('/').pop().split('.')[0].replace('product', '');

    fetch('../products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId); // Find product by ID
            if (product) {
                const productDetails = document.getElementById('product-details');
                productDetails.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                    <p><strong>Price: $${product.price}</strong></p>
                    <button>Add to Cart</button>
                `;
            }
        });
}
