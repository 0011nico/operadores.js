let grados = parseInt(prompt("ingrese la temperatura en la que se encuentra en este momento"));

if (grados < 15) {
    alert("se encuentra en una temperatura fria");
} else if (grados > 16 && grados < 25) {
    alert(" se encuentra a una temperatura agradable ");
} else {
    grados = 26 - 35;
    alert("se encuentra a una temperatura muy calurosa con: " + grados);
}

