// Initialize the conversion direction to Fahrenheit to Celsius
let isFahrenheitToCelsius = true;
let labelFc = document.getElementById('labelFc')
let resultFc = document.getElementById('resultFc')
let submitFc = document.getElementById('submitFc')

// Functionality to switch between Fahrenheit to Celsius and Celsius to Fahrenheit
labelFc.onclick = function () {
    if (isFahrenheitToCelsius === true) {
        labelFc.textContent = "Celsius to Fahrenheit"
        isFahrenheitToCelsius = false
    }
    else {
        labelFc.textContent = "Fahrenheit to Celsius"
        isFahrenheitToCelsius = true
    }
}

// Perform the temperature conversion based on the selected direction and validate user input
submitFc.onclick = function () {
    let inputFc = document.getElementById('inputFc').value

    if (isFahrenheitToCelsius === true && inputFc !== '') {
        resultFc.textContent = `The result is ${fahrenheitToCelsius(inputFc)}°C`
    }
    else if(isFahrenheitToCelsius === false && inputFc !== '') {
        resultFc.textContent = `The result is ${celsiusToFahrenheit(inputFc)}°F`
    }
    else if (inputFc === ''){
        resultFc.textContent = `Please enter a number.`
    }
}

// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit){
    fahrenheit = (fahrenheit - 32) * 5 / 9
    return fahrenheit.toFixed(2)
}

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
    celsius = celsius * 9 / 5 + 32;
    return celsius.toFixed(2)
}

// Initialize the conversion direction to Kilos to Lbs
    let isKilosToLbs = true
    let labelKilo = document.getElementById('labelKilo')
    let resultKilo = document.getElementById('resultKilo')
    let submitKilo = document.getElementById('submitKilo')

// Functionality to switch between Kilos to Lbs and Lbs to Kilos
    labelKilo.onclick = function (){
        if(isKilosToLbs === true){
            labelKilo.textContent = "Lbs to Kilos"
            isKilosToLbs = false
        }
        else {
            labelKilo.textContent = "Kilos to Lbs"
            isKilosToLbs = true
        }
    }

// Perform the weight conversion based on the selected direction and validate user input
    submitKilo.onclick = function (){
        let inputKilo = document.getElementById('inputKilo').value
        if (isKilosToLbs === true && inputKilo !== ''){
            resultKilo.textContent = `The result is ${kilosToLbs(inputKilo)} Lb(s)`
        }
        else if (isKilosToLbs === false && inputKilo !== ''){
            resultKilo.textContent = `The result is ${lbsToKilos(inputKilo)} Kg(s)`
        }
        else {
            resultKilo.textContent = 'Please enter a number'
        }
    }

// Convert Kilos to Lbs
    function kilosToLbs(kilos){
    kilos = kilos / 0.45359237
        return kilos.toFixed(4)
    }

// Convert Lbs to Kilos
    function lbsToKilos(lbs){
    lbs = lbs * 0.45359237
        return lbs.toFixed(4)
    }

// Initialize the conversion direction to Kelvin to Celsius
    let isKelvinToCelsius = true
    let labelKelvin = document.getElementById('labelKelvinCelsius')
    let submitKelvin = document.getElementById('submitKelvinCelsius')
    let resultKelvin = document.getElementById('resultKelvinCelsius')

// Functionality to switch between Kelvin to Celsius and Celsius to Kelvin
    labelKelvin.onclick = function (){
        if(isKelvinToCelsius === true){
            labelKelvin.textContent = 'Celsius to Kelvin'
            isKelvinToCelsius = false
        }
        else {
            labelKelvin.textContent = 'Kelvin to Celsius'
            isKelvinToCelsius = true
        }
    }

// Perform the weight conversion based on the selected direction and validate user input
    submitKelvin.onclick = function (){
    let inputKelvin = document.getElementById('inputKelvinCelsius').value
        if (isKelvinToCelsius === true && inputKelvin !== ''){
            resultKelvin.textContent = `The result is ${kelvinToCelsius(inputKelvin)}K`
        }
        else if (isKelvinToCelsius === false && inputKelvin !== ''){
            resultKelvin.textContent = `The result is ${celsiusToKelvin(inputKelvin)}°C`
        }
        else {
            resultKelvin.textContent = 'Please enter a number'
        }
    }

// Convert Kelvin to Celsius
    function kelvinToCelsius(celsius){
    celsius = celsius - 273.15
        return celsius.toFixed(2)
    }

// Convert Celsius to Kelvin
    function celsiusToKelvin(kelvin) {
        kelvin = Number(kelvin)
        return kelvin + 273.15
    }

// Initialize the conversion direction to Kelvin to Fahrenheit
    let isKelvinToFah = true
    let labelKelvinFah = document.getElementById('labelKelvinFah')
    let submitKelvinFah = document.getElementById('submitKelvinFah')
    let resultKelvinFah = document.getElementById('resultKelvinFah')

// Functionality to switch between Kelvin to Fahrenheit and Fahrenheit to Kelvin
    labelKelvinFah.onclick = function (){
        if(isKelvinToFah === true){
            labelKelvinFah.textContent = 'Fahrenheit to Kelvin'
            isKelvinToFah = false
        }
        else {
            labelKelvinFah.textContent = 'Kelvin to Fahrenheit'
            isKelvinToFah = true
        }
    }

// Perform the weight conversion based on the selected direction and validate user input
    submitKelvinFah.onclick = function (){
        let inputKelvinFah = document.getElementById('inputKelvinFah').value
        if (isKelvinToFah === true && inputKelvinFah !== ''){
            resultKelvinFah.textContent = `The result is ${kelvinToFahrenheit(inputKelvinFah)}K`
        }
        else if (isKelvinToFah === false && inputKelvinFah !== ''){
            resultKelvinFah.textContent = `The result is ${FahrenheitToKelvin(inputKelvinFah)}°F`
        }
        else {
            resultKelvinFah.textContent = 'Please enter a number'
        }
    }

// Convert Kelvin to Fahrenheit
    function kelvinToFahrenheit(kelvin){
    kelvin = (kelvin - 273.15) * 9 / 5 + 32
        return kelvin
    }

// Convert Fahrenheit to Kelvin
    function FahrenheitToKelvin(fahrenheit) {
    fahrenheit = (fahrenheit - 32) * 5 / 9 + 273.15
        return fahrenheit
    }

