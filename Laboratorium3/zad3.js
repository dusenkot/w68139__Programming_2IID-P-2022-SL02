function suma(){
let liczba1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let liczba2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

let suma = liczba1 + liczba2;

document.getElementById("zad").innerHTML = ("Suma podanych liczb to: " + suma);
}