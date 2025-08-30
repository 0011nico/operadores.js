function resta(num1, num2)
{
    let resultado = num1 - num2;
    alert(resultado);
    console.log(resultado);
}
function suma(num1, num2)
{
    let resultado = num1 + num2;
    alert(resultado);
    console.log(resultado);
}
function multiplicacion(num1, num2)
{
    let resultado = num1 * num2;
    alert(resultado);
    console.log(resultado);
}
function division(num1, num2)
{
    let resultado = num1 / num2;
    alert(resultado);
    console.log(resultado);
}
function modulo(num1, num2)
{
    let resultado = num1 % num2;
    alert(resultado);
    console.log(resultado);
}

letn1 = parseInt(prompt("digite num1: "));
letn2 = parseInt(prompt("digite num2: "));
resta(letn1, letn2);
suma(letn1, letn2);
multiplicacion(letn1, letn2);
division(letn1, letn2);
modulo(letn1, letn2);

