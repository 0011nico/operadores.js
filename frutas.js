function frutas() {
    let frutas = [];// creacion del arreglo
    frutas.push("manzana"); // agrego elemento
    console.log(frutas); // muestro arreglo
    frutas.push("banana"); // agrego elemento
    console.log(frutas); // muestro arreglo
    frutas.push("cereza"); // agrego elemento
    console.log(frutas); // muestro arreglo
    console.log(frutas[0]); // muestro elemento en posicion 0
    frutas.pop();
    console.log(frutas);
    frutas.shift();
    console.log(frutas);
    frutas.unshift("Mango");
    console.log(frutas);

}
frutas(); // llamo a la funcion
