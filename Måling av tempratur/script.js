function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
    document.getElementById("outputFarenheit").innerHTML=
    document.getElementById("outputKelvin").innerHTML=(valNum-32)/1.8 + 273.15;
}

