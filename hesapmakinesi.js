// display alanını al
let display = document.getElementById('display');
let currentInput = '';

// Butonlara basıldığında çağrılacak fonksiyon
function press(value) {
    currentInput += value;       // tuş değerini inputa ekle
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
        // eval ile matematiksel ifadeyi hesapla
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Hata';
        currentInput = '';
    }
}
