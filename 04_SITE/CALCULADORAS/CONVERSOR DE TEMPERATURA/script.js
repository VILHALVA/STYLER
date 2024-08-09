document.addEventListener("DOMContentLoaded", function () {
    const temperaturaInput = document.getElementById("temperatura");
    const unidadeOrigemSelect = document.getElementById("unidadeOrigem");
    const converterButton = document.getElementById("converter");
    const resultadoDiv = document.getElementById("resultado");

    converterButton.addEventListener("click", function () {
        const temperatura = parseFloat(temperaturaInput.value);

        if (!isNaN(temperatura)) {
            const unidadeOrigem = unidadeOrigemSelect.value;
            const resultado = converterTemperatura(temperatura, unidadeOrigem);
            resultadoDiv.textContent = resultado;
        } 
        else {
            resultadoDiv.textContent = "Por favor, digite uma temperatura válida.";
        }
    });

    function converterTemperatura(temperatura, unidadeOrigem) {
        let resultado;
        switch (unidadeOrigem) {
            case "celsius":
                resultado = `Fahrenheit: ${celsiusParaFahrenheit(temperatura).toFixed(2)}°F, Kelvin: ${celsiusParaKelvin(temperatura).toFixed(2)}K`;
                break;
            case "fahrenheit":
                resultado = `Celsius: ${fahrenheitParaCelsius(temperatura).toFixed(2)}°C, Kelvin: ${fahrenheitParaKelvin(temperatura).toFixed(2)}K`;
                break;
            case "kelvin":
                resultado = `Celsius: ${kelvinParaCelsius(temperatura).toFixed(2)}°C, Fahrenheit: ${kelvinParaFahrenheit(temperatura).toFixed(2)}°F`;
                break;
        }
        return resultado;
    }

    function celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function celsiusParaKelvin(celsius) {
        return celsius + 273.15;
    }

    function fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function fahrenheitParaKelvin(fahrenheit) {
        return ((fahrenheit - 32) * 5/9) + 273.15;
    }

    function kelvinParaCelsius(kelvin) {
        return kelvin - 273.15;
    }

    function kelvinParaFahrenheit(kelvin) {
        return ((kelvin - 273.15) * 9/5) + 32;
    }
});
