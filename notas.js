function notas() {
    let notas = [];
    for (let i = 0; i <= 4; i++) {
        let nota = parseFloat(prompt("Ingrese la primer nota del estudiante" + 1));
        notas[i] = nota
        alert(" las notas del esdiante son:" + notas);
    }
}
notas();
