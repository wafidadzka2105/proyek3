document.addEventListener("DOMContentLoaded", () => {
    // Referensi elemen
    const registerForm = document.querySelector(".register-container form");
    const loginForm = document.querySelector(".login-container form");
    const registerButton = document.getElementById("register");
    const loginButton = document.getElementById("login");
    const container = document.getElementById("container");
    const backButton = document.getElementById("back-btn");
  
    // Toggle antara login dan registrasi
    registerButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
  
    loginButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  
    // Navigasi tombol kembali ke halaman utama
    backButton.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  
    // Fungsi untuk menyimpan data registrasi
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = registerForm.querySelector('input[placeholder="Nama Pengguna"]').value.trim();
      const email = registerForm.querySelector('input[placeholder="Email"]').value.trim();
      const phone = registerForm.querySelector('input[placeholder="Nomor Telepon"]').value.trim();
      const password = registerForm.querySelector('input[placeholder="Kata Sandi"]').value;
  
      if (username && email && phone && password) {
        const userData = { username, email, phone, password };
        localStorage.setItem("user", JSON.stringify(userData));
        alert("Registrasi berhasil! Silakan login.");
        container.classList.remove("right-panel-active"); // Pindah ke form login
      } else {
        alert("Semua kolom harus diisi.");
      }
    });
  
    // Fungsi untuk login
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.querySelector('input[placeholder="Nama Pengguna"]').value.trim();
      const password = loginForm.querySelector('input[placeholder="Kata Sandi"]').value;
  
      const savedUser = JSON.parse(localStorage.getItem("user"));
  
      if (savedUser && savedUser.username === username && savedUser.password === password) {
        // Periksa huruf pertama dari username
        const firstChar = username.charAt(0).toLowerCase(); // Konversi ke huruf kecil
        if (firstChar === "a") {
          alert("Login berhasil sebagai admin!");
          window.location.href = "dashboardadmin.html"; // Alihkan ke Dashboard Admin
        } else {
          alert("Login berhasil!");
          window.location.href = "Home.html"; // Alihkan ke Home
        }
      } else {
        alert("Nama pengguna atau kata sandi salah.");
      }
    });
  });
  