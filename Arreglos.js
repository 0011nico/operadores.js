function numeros()
{
    let numeros = [1, 2, 3, 4];//creacion de un arreglo
    console.log(numeros[2]) //mostrar valor en la posicion 2
    console.log(numeros[0]) //mostrar valor en la posicion 0
    console.log(numeros) // mostrar el arreglo
    numeros[2] = 7; // cambiar [2] por 7
    console.log(numeros) // mostrar arreglo
    numeros[4] = 22; // agregar dato en la posicion 4
    console.log(numeros) // mostrar arreglo
    numeros.push(33); // agregar
    console.log(numeros) // muestra arreglo
}
numeros();
