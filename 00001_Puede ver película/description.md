> Definí una función `puedeVerPelicula` que reciba como argumentos un número `edad` y un booleano `tieneAutorizacion`, y retorne `true` si la persona está habilitada para ver la película o `false` si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
>
```javascript
ム puedeVerPelicula(12, false)
false
ム puedeVerPelicula(12, true)
true
ム puedeVerPelicula(16, false)
true
ム puedeVerPelicula(18, true)
true
```