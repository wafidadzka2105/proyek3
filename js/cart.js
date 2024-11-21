// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Menambahkan produk ke dalam keranjang
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Cek apakah produk sudah ada di dalam keranjang
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    // Simpan keranjang ke localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update tampilan keranjang
    updateCartDisplay();
}

// Menghapus produk dari keranjang
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update tampilan keranjang
    updateCartDisplay();
}

// Menampilkan isi keranjang
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';  // Reset tampilan keranjang

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'pb-4', 'mb-4');
        cartItem.innerHTML = `
            <div class="flex items-center space-x-4">
                <p class="text-lg font-medium">${item.name} (x${item.quantity})</p>
                <p class="text-lg text-gray-500">Rp${item.price}</p>
            </div>
            <div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">Hapus</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = `Total: Rp${total}`;
}

// Menambahkan event listener ke tombol "Add to Cart" di halaman produk
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-name');
        const productPrice = parseInt(this.getAttribute('data-price'), 10);
        addToCart(productId, productName, productPrice);
    });
});

// Menampilkan keranjang pada setiap halaman yang relevan
updateCartDisplay();
