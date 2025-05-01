console.log('JavaScript is working!');

function validateForm() {
    const inputCelcius = document.getElementById('konversi-input');
    console.log(inputCelcius.value);

    if (inputCelcius.value === '') {
        alert('Input tidak boleh kosong!');
    }
    let celcius = parseFloat(document.getElementById('konversi-input').value);
    if (isNaN(celcius)) {
        alert('Masukkan angka yang valid!');
        return false;
    }
    let fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('result-input').value = fahrenheit.toFixed(2);
    document.getElementById('calculate-detail').value = `(${celcius} * 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
}

function reverse() {
    let fahrenheit = parseFloat(document.getElementById('result-input').value);
    let celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('konversi-input').value = celcius.toFixed(2);
    document.getElementById('calculate-detail').value = `(${fahrenheit} * 1.8) + 32 = ${celcius.toFixed(2)}`;
}

function reset() {
    document.getElementById('konversi-input').value = '';
    document.getElementById('result-input').value = '';
    document.getElementById('calculate-detail').value = '';
}

