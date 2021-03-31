> Definí una función `jugarPiedraPapelTijera` que reciba como argumentos dos strings `a` y `b` que representen una jugada (`piedra`, `papel`, `tijera`) y retorne un string con un mensaje avisando qué jugada ganó (o si hubo empate)

> 
```javascript
ム jugarPiedraPapelTijera('tijera', 'piedra')
¡Ganó piedra!
ム jugarPiedraPapelTijera('piedra', 'tijera')
¡Ganó piedra!
ム jugarPiedraPapelTijera('papel', 'piedra')
¡Ganó papel!
ム jugarPiedraPapelTijera('piedra', 'papel')
¡Ganó papel!
ム jugarPiedraPapelTijera('papel', 'tijera') 
¡Ganó tijera!
ム jugarPiedraPapelTijera('tijera', 'papel')
¡Ganó tijera!
ム jugarPiedraPapelTijera('piedra', 'piedra')
¡Empate!
ム jugarPiedraPapelTijera('papel', 'papel')
¡Empate!
ム jugarPiedraPapelTijera('tijera', 'tijera')
¡Empate!
```