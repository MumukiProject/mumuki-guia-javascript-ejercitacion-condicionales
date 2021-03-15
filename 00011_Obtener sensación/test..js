it("Si hacemos obtenerSensacion(33) debería retornar ¡Hace mucho calor!", function() {
let resultado = obtenerSensacion(33)
assert.equal(resultado, '¡Hace mucho calor!',`obtenerSensacion(33) deberia retornar '¡Hace mucho calor!' pero fue ${resultado}`);
})

it("Si hacemos obtenerSensacion(-3) debería retornar ¡Está helando!", function() {
let resultado = obtenerSensacion(-3)
assert.equal(resultado, '¡Está helando!',`obtenerSensacion(-3) deberia retornar '¡Está helando!' pero fue ${resultado}`);
})

it("Si hacemos obtenerSensacion(15) debería retornar Está Lindo", function() {
let resultado = obtenerSensacion(15)
assert.equal(resultado, 'Está lindo',`obtenerSensacion(15) deberia retornar 'Está lindo' pero fue ${resultado}`);
})

it("Si hacemos obtenerSensacion(27) debería retornar Hace calor", function() {
let resultado = obtenerSensacion(27)
assert.equal(resultado, 'Hace calor',`obtenerSensacion(27) deberia retornar 'Hace calor' pero fue ${resultado}`);
})