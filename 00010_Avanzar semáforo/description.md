Crear una función `avanzarSemaforo` que acepte como argumento un string `colorActual` y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

```javascript
console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'
```