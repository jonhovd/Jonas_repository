function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML=(valNum-500)/10;
    document.getElementById("outputFarenheit").innerHTML=(valNum-500)/10 + 32;
    document.getElementById("outputKelvin").innerHTML=(valNum-500)/10 + 273.15;
}

