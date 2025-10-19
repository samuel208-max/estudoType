function celsiusParaFahrenheit(celsius: number): number {
    return Number(((celsius * 1.8) + 32).toFixed(2));
}

function fahrenheitParaCelsius(fahrenheit: number): number {
    return Number(((fahrenheit - 32) / 1.8).toFixed(2));
}

function celsiusParaKelvin(celsius: number): number {
    return Number((celsius + 273.15).toFixed(2));
}

function fahrenheitParaKelvin(fahrenheit: number): number {
    return Number((((fahrenheit - 32) / 1.8) + 273.15).toFixed(2));
}

function kelvinParaCelsius(kelvin: number): number {
    return Number((kelvin - 273.15).toFixed(2));
}

function kelvinParaFahrenheit(kelvin: number): number {
    return Number((((kelvin - 273.15) * 1.8) + 32).toFixed(2));
}

// Testes
console.log(celsiusParaFahrenheit(100));    // 212.00
console.log(fahrenheitParaCelsius(100));    // 37.78
console.log(celsiusParaKelvin(100));        // 373.15
console.log(fahrenheitParaKelvin(100));     // 310.93
console.log(kelvinParaCelsius(100));        // -173.15
console.log(kelvinParaFahrenheit(100));     // -279.67