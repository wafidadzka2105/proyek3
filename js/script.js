let currentIndex = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = slider.children;
    const totalSlides = slides.length;

    // Looping slide agar kembali ke awal atau akhir
    currentIndex = (index + totalSlides) % totalSlides;

    // Pastikan slider memiliki transisi yang halus
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Auto-slide setiap 5 detik, dengan clear interval saat interaksi manual
let autoSlideInterval = setInterval(nextSlide, 5000);

document.getElementById('nextButton').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

document.getElementById('prevButton').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}
// Script untuk mengatur harga berdasarkan berat emas yang diinput
document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight-1');
    const priceElement = document.getElementById('price-1');
    let basePricePerGram = 500000; // Harga per gram

    weightInput.addEventListener('input', () => {
        const weight = parseFloat(weightInput.value);
        if (!isNaN(weight) && weight > 0) {
            priceElement.textContent = (weight * basePricePerGram).toLocaleString('id-ID');
        }
    });
});
