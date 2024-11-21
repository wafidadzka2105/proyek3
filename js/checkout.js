// checkout.js
function checkout() {
    // Ambil data dari keranjang
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Keranjang Anda kosong! Silakan tambahkan produk.');
        return;
    }

    // Ambil data pembayaran dari form
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (name && address && paymentMethod) {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });

        // Simulasi pemrosesan pembayaran dan penyelesaian checkout
        alert(`Terima kasih ${name}! Pembayaran berhasil dengan metode ${paymentMethod}. Total belanja: Rp${total}`);

        // Bersihkan keranjang setelah checkout berhasil
        localStorage.removeItem('cart');

        // Redirect ke halaman konfirmasi
        window.location.href = 'confirmation.html';
    } else {
        alert('Harap lengkapi informasi pembayaran');
    }
}

// Menambahkan event listener ke tombol checkout
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    checkout();
});
