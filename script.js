function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        const productName = product.querySelector("p").innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function filterProducts(category) {
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
function openOrderForm(element) {
    const productItem = element.closest('.product-item');
    const productName = productItem.getAttribute('data-name');
    const productPrice = productItem.getAttribute('data-price');

    document.getElementById('product-name').innerText = `Product: ${productName}`;
    document.getElementById('product-price').innerText = `Price: ₹${productPrice}`;

    document.getElementById('order-modal').style.display = 'block';
}

function closeOrderForm() {
    document.getElementById('order-modal').style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target === modal) {
        closeOrderForm();
    }
}

function searchProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        const productName = product.querySelector("p").innerText.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? "block" : "none";
    });
}

function filterProducts(category) {
    const products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        product.style.display = category === "all" || product.dataset.category === category ? "block" : "none";
    });
}
function sendOrderToWhatsApp() {
    const productName = document.getElementById('product-name').innerText.replace('Product: ', '');
    const productPrice = document.getElementById('product-price').innerText.replace('Price: ₹', '');
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;
    
    // Compose order message
    const message = `Hello, I would like to place an order:\n\n` +
                    `Product: ${productName}\n` +
                    `Price: ₹${productPrice}\n` +
                    `Quantity: ${quantity}\n\n` +
                    `Customer Details:\n` +
                    `Name: ${name}\n` +
                    `Address: ${address}`;

    if (!name || !address || !quantity) {
        alert('Please fill in all the fields before placing the order.');
        return; // Stop the function if fields are missing
    }
    
    // URL-encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with the owner's phone number and pre-filled message
    const whatsappURL = `https://wa.me/919425584518?text=${encodedMessage}`;
    
    // Open WhatsApp link in a new tab
    window.open(whatsappURL, '_blank');
    
    // Close the form modal
    closeOrderForm();
}
function redirectToInstagram() {
    // Replace this URL with your actual Instagram profile link
    const instagramURL = "https://www.instagram.com/gif.tsandlove?igsh=MWl3Z2VmeGlrMmFkbQ==";
    
    // Redirect to Instagram
    window.location.href = instagramURL;
}
