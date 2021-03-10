it("Si hacemos estaEnRango(3, 1, 10) debería retornar true", function() {
let resultado = estaEnRango(3, 1, 10)
assert.equal(resultado, true,`estaEnRango(3, 1, 10) deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos estaEnRango(1, 1, 10) debería retornar true", function() {
let resultado = estaEnRango(1, 1, 10)
assert.equal(resultado, true,`estaEnRango(1, 1, 10) deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos estaEnRango(12, 1, 10) debería retornar false", function() {
let resultado = estaEnRango(12, 1, 10)
assert.equal(resultado, false,`estaEnRango(12, 1, 10) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos estaEnRango(-3, 1, 10) debería retornar false", function() {
let resultado = estaEnRango(-3, 1, 10)
assert.equal(resultado, false,`estaEnRango(-3, 1, 10) deberia retornar false pero fue ${resultado}`);
})