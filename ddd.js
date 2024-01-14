function calculate() {
    var userInput = parseFloat(document.getElementById('userInput').value);
    var b = 100 / 16 * userInput;
    var c = 2000 / 100;
    var d = c * parseInt(b);
    var result = parseInt(d * userInput);

    document.getElementById('result').innerText = 'Result: ' + result;
}

document.getElementById('userInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
