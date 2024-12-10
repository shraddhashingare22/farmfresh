document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('products');
    const cartItemsList = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    // Fetch products from API
    fetch('http://localhost:8000/api/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products; // assuming the API returns an array of products
            products.forEach(product => {
                const productItem = document.createElement('li');
                productItem.textContent = `${product.name} - $${product.price}`;
                const addToCartButton = document.createElement('button');
                addToCartButton.textContent = 'Add to Cart';
                addToCartButton.onclick = () => addToCart(product);
                productItem.appendChild(addToCartButton);
                productsList.appendChild(productItem);
            });
        })
        .catch(err => console.error('Error fetching products:', err));

    // Add product to cart
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartItemsList.appendChild(cartItem);
    }

    // Checkout button functionality
    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout...');
        // Further checkout logic can go here, like making a POST request to the backend for order processing.
    });
});
