let num1 = parseInt(prompt("digite un primer numero: "));
let num2 = parseInt(prompt("digite un segundo numero: "));
let num3 = parseInt(prompt("digite un tecer numero: "));
let mayor;
if (num1 > num2 && num1 > num3) {
    mayor = num1
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}
alert("el numero mayor: " + mayor);
