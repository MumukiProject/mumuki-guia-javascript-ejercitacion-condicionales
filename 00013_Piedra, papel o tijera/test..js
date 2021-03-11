it("Si hacemos jugarPiedraPapelTijera('tijera', 'piedra') debería retornar ¡Ganó piedra!", function() {
let resultado = jugarPiedraPapelTijera('tijera', 'piedra')
assert.equal(resultado, '¡Ganó piedra!',`jugarPiedraPapelTijera('tijera', 'piedra') deberia retornar '¡Ganó piedra!' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijera('piedra', 'tijera') debería retornar ¡Ganó piedra!", function() {
let resultado = jugarPiedraPapelTijera('piedra', 'tijera')
assert.equal(resultado, '¡Ganó piedra!',`jugarPiedraPapelTijera('piedra', 'tijera') deberia retornar '¡Ganó piedra!' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijera('papel', 'piedra') debería retornar ¡Ganó papel!", function() {
let resultado = jugarPiedraPapelTijera('papel', 'piedra')
assert.equal(resultado, '¡Ganó papel!',`jugarPiedraPapelTijera('papel', 'piedra') deberia retornar '¡Ganó papel!' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijera('tijera', 'papel') debería retornar ¡Ganó tijera!", function() {
let resultado = jugarPiedraPapelTijera('tijera', 'papel')
assert.equal(resultado, '¡Ganó tijera!',`jugarPiedraPapelTijera('tijera', 'papel') deberia retornar '¡Ganó tijera!' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijera('piedra', 'piedra') debería retornar ¡Empate!", function() {
let resultado = jugarPiedraPapelTijera('piedra', 'piedra')
assert.equal(resultado, '¡Empate!',`jugarPiedraPapelTijera('piedra', 'piedra') deberia retornar '¡Empate!' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijera('papel', 'papel') debería retornar ¡Empate!", function() {
let resultado = jugarPiedraPapelTijera('papel', 'papel')
assert.equal(resultado, '¡Empate!',`jugarPiedraPapelTijera('papel', 'papel') deberia retornar '¡Empate!' pero fue ${resultado}`);
})