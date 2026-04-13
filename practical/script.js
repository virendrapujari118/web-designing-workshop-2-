let input = document.getElementById("celsius");
let result = document.getElementById("result");

input.addEventListener("input", function () {
    let celsius = input.value;

    if (celsius === "") {
        result.innerHTML = "Enter a value!";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    result.innerHTML = celsius + " °C = " + fahrenheit.toFixed(2) + " °F";
});