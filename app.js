

function fromDollarToYen(dolares) {
    const priceYen = 145.92;
    const yenes = dolares * priceYen

    return yenes;
 }

const resultado = fromDollarToYen(20); 
//console.log("20 dolares equivalen a " + resultado + "yenes");
module.exports =  fromDollarToYen; 

function fromEuroToDollar (euro) {
    const priceDollar =  1.09; 
    const dolar = euro * priceDollar

    return dolar;
}
const changeToDollar = fromEuroToDollar(3)
console.log("3 Euro es igual a " + changeToDollar + " Dolares")
module.exports = fromEuroToDollar; 

function fromYenToPound (yenes) {
    const pricePound = 0.0054
    const pound = yenes * pricePound

    return pound;
}
const changeToPound = fromYenToPound(186)
console.log(" 186 yenes es igual a " + changeToPound + "libras Esterlinas")
module.exports = fromYenToPound