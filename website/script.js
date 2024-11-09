function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category.includes(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}