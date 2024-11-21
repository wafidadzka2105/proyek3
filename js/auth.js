// auth.js
// Fungsi untuk login pengguna
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Simulasi pengecekan login, bisa diganti dengan API nyata
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('user', username);  // Menyimpan username di localStorage
            window.location.href = 'index.html'; // Redirect ke halaman home setelah login
        } else {
            alert('Username atau Password salah');
        }
    } else {
        alert('Harap masukkan username dan password');
    }
}

// Fungsi untuk register pengguna
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        // Simulasi penyimpanan pengguna baru (dapat diganti dengan API backend)
        alert('Pendaftaran berhasil!');
        window.location.href = 'login.html';  // Redirect ke halaman login setelah pendaftaran
    } else {
        alert('Harap lengkapi semua data');
    }
}

// Menangani aksi login dan register
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', loginUser);
}

if (document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener('submit', registerUser);
}
