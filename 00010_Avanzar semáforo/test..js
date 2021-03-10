it("Si hacemos avanzarSemaforo('verde') debería retornar 'amarillo'", function() {
let resultado = avanzarSemaforo('verde')
assert.equal(resultado, 'amarillo',`avanzarSemaforo('verde') deberia retornar 'amarillo' pero fue ${resultado}`);
})

it("Si hacemos avanzarSemaforo('amarillo') debería retornar 'rojo'", function() {
let resultado = avanzarSemaforo('amarillo')
assert.equal(resultado, 'rojo',`avanzarSemaforo('amarillo') deberia retornar 'rojo' pero fue ${resultado}`);
})

it("Si hacemos avanzarSemaforo('rojo') debería retornar 'verde'", function() {
let resultado = avanzarSemaforo('rojo')
assert.equal(resultado, 'verde',`avanzarSemaforo('rojo') deberia retornar 'verde' pero fue ${resultado}`);
})