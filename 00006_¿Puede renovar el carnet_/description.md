Crear una función `puedeRenovarCarnet` que tome como argumentos tres booleanos, `pasoTests`, `tieneMultasImpagas` y `pagoImpuestos`, y devuelva `true` si una persona está habilitada para renovar su carnet de conducir o `false` si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

```javascript
console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false
```