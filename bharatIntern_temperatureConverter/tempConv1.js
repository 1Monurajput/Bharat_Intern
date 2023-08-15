const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to others
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }
    const celToKel = (cel) => {
        let a = parseInt(cel);
        let celKelvin = (a + 273.15).toFixed(2);
        return celKelvin;
    }
    
    // Fahrenheit to others
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    const fahToKel = (fah) => {
        let a = parseInt(fah);
        let fahKelvin = ((fah - 32) * 5/9 + 273.15).toFixed(1);
        return fahKelvin;
    }
    // kelvin to others
    const kelToCel = (kel) => {
        let kelCelsius = (kel - 273.15).toFixed(2);
        return kelCelsius;
    }
    const kelToFah = (kel) => {
        let kelFahrenheit = ((kel - 273.15) *9/5 + 32 ) .toFixed(2);
        return kelFahrenheit;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("result2").innerHTML = celToKel(inputTemp) + "&#176; Kelvin";
    }
    else if (valueTemp == 'kel') {
        document.getElementById("result").innerHTML = kelToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = kelToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = fahToKel(inputTemp) + "&#176; Kelvin";
    }

    
}
