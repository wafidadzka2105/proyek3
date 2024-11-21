// Harga awal per gram (contoh nilai)
const hargaPerGramAwalEmas = 1000000;
const hargaPerGramAwalLogam = 500000;

// Persentase kenaikan per gram (contoh: 2% = 0.02)
const persentaseKenaikanEmas = 0.02;
const persentaseKenaikanLogam = 0.015;

function updatePrice(type) {
    let gramInput;
    let priceElement;
    let hargaPerGram;
    let persentaseKenaikan;
    let totalHarga = 0;

    if (type === 'emas') {
        gramInput = parseInt(document.getElementById('emas-gram').value, 10);
        priceElement = document.getElementById('emas-price-value');
        hargaPerGram = hargaPerGramAwalEmas;
        persentaseKenaikan = persentaseKenaikanEmas;
    } else if (type === 'logam') {
        gramInput = parseInt(document.getElementById('logam-gram').value, 10);
        priceElement = document.getElementById('logam-price-value');
        hargaPerGram = hargaPerGramAwalLogam;
        persentaseKenaikan = persentaseKenaikanLogam;
    }

    // Pastikan input valid
    if (isNaN(gramInput) || gramInput < 1) {
        priceElement.textContent = "Masukkan jumlah gram yang valid.";
        return;
    }

    // Menghitung total harga dengan kenaikan per gram
    for (let i = 0; i < gramInput; i++) {
        totalHarga += hargaPerGram;
        hargaPerGram *= (1 + persentaseKenaikan);  // Kenaikan harga per gram
    }

    // Perbarui harga di halaman
    priceElement.textContent = totalHarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

// Menambahkan event listener pada perubahan input secara otomatis
document.getElementById('emas-gram').addEventListener('input', () => updatePrice('emas'));
document.getElementById('logam-gram').addEventListener('input', () => updatePrice('logam'));
