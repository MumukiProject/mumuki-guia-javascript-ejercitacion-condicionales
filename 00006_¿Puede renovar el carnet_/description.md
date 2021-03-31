> Definí una función `puedeRenovarCarnet` que reciba como argumentos tres booleanos, `pasoTests`, `tieneMultasImpagas` y `pagoImpuestos`, y nos indique si una persona está habilitada para renovar su carnet de conducir.
Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

> 
```javascript
ム puedeRenovarCarnet(true, true, true)
false
ム puedeRenovarCarnet(true, true, false)
false
ム puedeRenovarCarnet(true, false, true)
true
ム puedeRenovarCarnet(true, false, false)
false
ム puedeRenovarCarnet(false, true, true)
false
ム puedeRenovarCarnet(false, true, false)
false
ム puedeRenovarCarnet(false, false, true)
false
ム puedeRenovarCarnet(false, false, false)
false
```