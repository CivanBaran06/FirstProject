// Kod, sayfa tamamen yüklendikten sonra çalışsın
window.onload = function () {
    let display = document.getElementById('display');
    let currentInput = '';

    // Butonlara basıldığında çağrılacak fonksiyon
    window.press = function (value) {
        currentInput += value;        // tuş değerini inputa ekle
        display.value = currentInput; // ekranı güncelle
    }

    // C tuşuna basıldığında ekranı temizle
    window.clearDisplay = function () {
        currentInput = '';
        display.value = '';
    }

    // = tuşuna basıldığında hesaplama yap
    window.calculate = function () {
        try {
            if (currentInput.trim() === '') {
                display.value = '0'; // boşsa hata vermesin
                return;
            }
            // eval ile matematiksel ifadeyi hesapla
            let result = eval(currentInput);
            if (isNaN(result)) throw new Error("Geçersiz işlem");
            display.value = result;
            currentInput = result.toString();
        } catch (error) {
            display.value = 'Hata';
            currentInput = '';
        }
    }
};
