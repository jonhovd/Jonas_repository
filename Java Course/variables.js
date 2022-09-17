
let firstname = "Jonas"; //strings
let age; //numbers
age = 23;
let student = true; //booleans

age = age + 1;

console.log("Hei", firstname);
console.log("Du er", age, "gammel");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hei " + firstname;
document.getElementById("p2").innerHTML = "Du er " + age + " gammel";
document.getElementById("p3").innerHTML = "Enrolled " + student;