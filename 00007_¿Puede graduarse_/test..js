it("Si hacemos puedeGraduarse(80, 50, true) debería retornar true", function() {
let resultado = puedeGraduarse(80, 50, true)
assert.equal(resultado, true,`puedeGraduarse(80, 50, true) deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(80, 50, false) debería retornar false", function() {
let resultado = puedeGraduarse(80, 50, false)
assert.equal(resultado, false,`puedeGraduarse(80, 50, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(80, 45, true) debería retornar false", function() {
let resultado = puedeGraduarse(80, 45, true)
assert.equal(resultado, false,`puedeGraduarse(80, 45, true) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(80, 45, false) debería retornar false", function() {
let resultado = puedeGraduarse(80, 45, false)
assert.equal(resultado, false,`puedeGraduarse(80, 45, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(65, 50, true) debería retornar false", function() {
let resultado = puedeGraduarse(65, 50, true)
assert.equal(resultado, false,`puedeGraduarse(65, 50, true) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(33, 55, false) debería retornar false", function() {
let resultado = puedeGraduarse(33, 55, false)
assert.equal(resultado, false,`puedeGraduarse(33, 55, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(42, 45, true) debería retornar false", function() {
let resultado = puedeGraduarse(42, 45, true)
assert.equal(resultado, false,`puedeGraduarse(42, 45, true) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeGraduarse(28, 45, false) debería retornar false", function() {
let resultado = puedeGraduarse(28, 45, false)
assert.equal(resultado, false,`puedeGraduarse(28, 45, false) deberia retornar false pero fue ${resultado}`);
})