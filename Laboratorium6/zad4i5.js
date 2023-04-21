function addValue() {
    var inputImie = document.getElementById("inputImie").value;
    var inputNazwisko = document.getElementById("inputNazwisko").value;

    var tr = document.createElement("tr");

    var tdImie = document.createElement("td");
    var tdNazwisko = document.createElement("td");


    var textNodeImie = document.createTextNode(inputImie);
    var textNodeNazwisko = document.createTextNode(inputNazwisko);
    tdImie.appendChild(textNodeImie);
    tdNazwisko.appendChild(textNodeNazwisko);

   
    tr.appendChild(tdImie);
    tr.appendChild(tdNazwisko);

    
    document.getElementById("tableBody").appendChild(tr);

    
    document.getElementById("inputImie").value = "";
    document.getElementById("inputNazwisko").value = "";
}
