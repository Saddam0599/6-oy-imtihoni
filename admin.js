document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push({ name, price, description });
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added successfully');
    displayProducts();
    this.reset();
});

function displayProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Name: ${product.name}, Price: $${product.price}, Description: ${product.description}`;
        productList.appendChild(li);
    });
}

// Display products on page load
window.onload = function () {
    displayProducts();
};
