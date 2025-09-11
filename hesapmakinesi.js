let display = document.getElementById('display');
let currentInput = "";

// Butona basıldığında
function press(value) {
  currentInput += value;
  display.value = currentInput;
}

// C tuşu
function clearDisplay() {
  currentInput = "";
  display.value = "";
}

// = tuşu
function calculate() {
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
