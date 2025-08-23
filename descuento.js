let compra1 = prompt("digite el valor de sus compras");

if (compra1 >= 100 && compra1 <200) {
    let descuento1 = compra1 * 10 / 100
    let precio= compra1-descuento1
    console.log("obtienes un descuento del 10% por compras mayores a 100.000")
    alert (precio)
}

if (compra1 >= 200) {
    let descuento2 = compra1 * 20 / 100
    let precio=compra1-descuento2
    console.log("obtienes un descuento del 20% por compras mayores a 200.000")
    alert(precio)
}
//operadpres ternarios

(compra1 >= 100 && compra1 <200) ? alert("obtienes un descuento del 10% por compras mayores a 100.000"):
    (compra1 >= 200) ? alert("obtienes un descuento del 20% por compras mayores a 200.000") :
        alert("NO tiene descuento")
