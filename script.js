function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    let result = 0;

    switch (inputUnit) {
        case "metros":
            result = inputValue * 100; 
            document.getElementById("result").innerText = `${inputValue} metros son ${result.toFixed(2)} centímetros.`;
            break;
        case "centimetros":
            result = inputValue / 100; 
            document.getElementById("result").innerText = `${inputValue} centímetros son ${result.toFixed(2)} metros.`;
            result = inputValue * 10; 
            document.getElementById("result").innerText += ` y ${inputValue} centímetros son ${result.toFixed(2)} milímetros.`;
            break;
        case "milimetros":
            result = inputValue / 1000; 
            document.getElementById("result").innerText = `${inputValue} milímetros son ${result.toFixed(2)} metros.`;
            result = inputValue / 10; 
            document.getElementById("result").innerText += ` y ${inputValue} milímetros son ${result.toFixed(2)} centímetros.`;
            break;
        default:
            document.getElementById("result").innerText = "Unidad no válida.";
            break;
    }
}