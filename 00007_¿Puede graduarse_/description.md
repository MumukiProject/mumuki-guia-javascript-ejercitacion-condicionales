> Definí la función `puedeGraduarse` que tome por parámetros dos números `asistencia` y `materiasAprobadas` y un booleano `tesisAprobada`, y devuelva nos indique si una persona puede gruadarse.
Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
> 
```javascript
ム puedeGraduarse(80, 50, true)
true
ム puedeGraduarse(80, 50, false)
false
ム puedeGraduarse(80, 45, true)
false
ムpuedeGraduarse(80, 45, false)
false
ム puedeGraduarse(65, 50, true)
false
ム puedeGraduarse(33, 55, false)
false
ム puedeGraduarse(42, 45, true)
false
ム puedeGraduarse(28, 45, false)
false
```