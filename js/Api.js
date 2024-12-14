document.addEventListener("DOMContentLoaded", () => {
    const weightInput = document.getElementById("weight-1");
    const priceDisplay = document.getElementById("price-1");
    const apiKey = "YOUR_API_KEY"; // Masukkan API Key MetalpriceAPI Anda

    async function fetchGoldPrice() {
        try {
            const response = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=XAU&currencies=IDR`);
            const data = await response.json();
            if (data.rates && data.rates.IDR) {
                return data.rates.IDR; // Harga emas per gram dalam Rupiah
            } else {
                throw new Error("Data harga tidak tersedia");
            }
        } catch (error) {
            console.error("Error fetching gold price:", error);
            return 0; // Default jika API gagal
        }
    }

    async function updatePrice() {
        const goldPricePerGram = await fetchGoldPrice();
        const weight = parseFloat(weightInput.value);
        const totalPrice = goldPricePerGram * weight;
        priceDisplay.innerText = totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    }

    weightInput.addEventListener("input", updatePrice);

    // Update harga awal saat halaman pertama kali dimuat
    updatePrice();
});
