let display;
let currentInput = "";

// Sayfa tamamen yüklendikten sonra çalışacak
window.onload = function() {
    display = document.getElementById('display');
};

function press(value) {
    if (!display) return;
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    if (!display) return;
    currentInput = "";
    display.value = "";
}

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
