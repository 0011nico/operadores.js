let edad = parseInt(prompt("digite su edad"));
if ((edad > 0) && (edad <= 12)) {
    alert("infantil");
} else if (edad >= 13 && edad <= 17) {
    alert("adulto");
} else if (edad <= 60) {
    alert("adulto mayor");
}
// operadores ternarios
((edad > 0) && (edad <= 12)) ? alert("infantil") : (edad >= 13 && edad <= 17) ? alert("adulto") : (edad <= 60) ? alert("adulto mayor"): alert ("digite su edad")
