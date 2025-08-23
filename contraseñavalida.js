let pass = prompt ("digite su contraseña")
let numCaracteres = pass.length
console.log(numCaracteres)
//let resultado=(numCaracteres > 8)? alert ("contraseña segura"): alert ("contraseña muy corta")

//if largo
if (numCaracteres > 8) {
    console.log ("contraseña segura")
}
console.log ("contraseña corta")
