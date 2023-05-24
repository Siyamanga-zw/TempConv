let celsius = document.getElementById("celsius");
let kelvin = document.getElementById("kelvin");
let numb1 = 273.15

function ConverterCelcius(){
    let result = (parseFloat(celsius.value)) + numb1;
    kelvin.value =(parseFloat(result.toFixed(2)));
    console.log(result);
}
function ConverterKelvin() {
    let result = (parseFloat(kelvin.value)) - numb1;
    celsius.value = parseFloat(result.tofixed(2))
    console.log (result)
}