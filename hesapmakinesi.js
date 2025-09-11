let display;
let currentInput = "";

// Sayfa tamamen yüklendikten sonra çalışacak
window.onload = function() {
    display = document.getElementById('display');
};

// Butona basıldığında çalışacak fonksiyon
function press(value) {
    if (!display) return; // display null ise hata verme
    currentInput += value;
    display.value = currentInput;
}

// C tuşu
function clearDisplay() {
    if (!display) return;
    currentInput = "";
    display.value = "";
}

// = tuşu
function calculate() {
    if (!display) return;
    try {
        if (currentInput.trim() === "") return;
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch {
        display.value = "Hata";
        currentInput = "";
    }
}
