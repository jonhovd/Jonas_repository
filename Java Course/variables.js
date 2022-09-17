
let firstname = "Jonas"; //strings
let lastname = "Hovdenak";
let age; //numbers
age = 23;
let student = true; //booleans

age = age + 3;

console.log("Hei", firstname, lastname);
console.log("Du er", age, "år", "gammel");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hei " + firstname + lastname;
document.getElementById("p2").innerHTML = "Du er " + age + " år" + " gammel";
document.getElementById("p3").innerHTML = "Enrolled " + student;