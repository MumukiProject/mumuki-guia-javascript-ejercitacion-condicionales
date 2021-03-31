 > Definí una función `obtenerNota` que reciba como argumento un número `puntaje` y devuelva un string dependiendo del `puntaje`, con las siguientes reglas:
>
| Puntaje | Nota |
| --- | --- |
| Menor a 6 | Desaprobado
| Mayor o igual a 6 y menor a 7 | Regular
| Mayor o igual a 7 y menor a 8 | Bueno
| Mayor o igual a entre 8 y menor a 10 | Muy bueno
| 10 | Excelente
| Menor a 0 o mayor a 10 | Puntaje inválido
>
```javascript
ムobtenerNota(7)
"Bueno"
ム obtenerNota(9.6)
"Muy bueno"
ム obtenerNota(12)
"Puntaje inválido"
```