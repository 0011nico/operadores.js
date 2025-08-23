let peso = parseFloat(prompt("digite su peso en kilogramos: "));
let estatura = parseFloat(prompt("digite su estatura en metros: "));
let IMC = (peso / (estatura * estatura));

if (IMC < 18.5) {
    alert(" Su indice de masa corporal es de bajo peso" + IMC)
}
else if (IMC >= 18.5 && IMC < 25) {
    alert(" Su indice de masa corporal es de peso normal" + IMC)
}
else if (IMC >= 25 && IMC <30) {
    alert(" Su indice de masa corporal es de sobrepeso" + IMC)
}
else {
    alert(" Su indice de masa corporal es de obesidad" + IMC)
}

