// Enkle måten

//let username = window.prompt("Hva heter du?");
//console.log(username);


// Vanskelige måten

let username;
document.getElementById("myButton").onclick = function () {

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}

