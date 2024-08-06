
const fromDollarToYen = require('./app.js')
test('1 dolar es igual a 145.92 yens', function() {
  const result = fromDollarToYen(1);  
    expect(result).toBe(145.92);
 });

const fromEuroToDollar = require('./app.js')
test( "1 euro es igual a 1.09 Dolares", function () {
    const result = fromEuroToDollar(1); 
    expect(result).toBe(1.09); 
});

const fromYenToPound = require('./app.js')
test ( "1 yen es igual a 0.0054 libras", function () {
    const result = fromYenToPound(1); 
    expect(result).toBe(0.0054);
})