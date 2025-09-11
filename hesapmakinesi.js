// display alanını al
let display;
let currentInput = '';

// Sayfa yüklendikten sonra display'i al
window.onload = function () {
    display = document.getElementById('display');
};

// Butonlara basıldığında çağrılacak fonksiyon
function press(value) {
    currentInput += value;        // tuş değerini inputa ekle
    display.value = currentInput; // ekranı güncelle
}

// C tuşuna basıldığında ekranı temizle
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// = tuşuna basıldığında hesaplama yap
function calculate() {
    try {
        if (currentInput.trim() === '') return;
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Hata';
        currentInput = '';
    }
}
