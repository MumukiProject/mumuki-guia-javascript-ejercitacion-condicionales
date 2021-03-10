it("Si hacemos puedeRenovarCarnet(true, true, true) debería retornar false", function() {
let resultado = puedeRenovarCarnet(true, true, true)
assert.equal(resultado, false,`puedeRenovarCarnet(true, true, true) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(true, true, false) debería retornar false", function() {
let resultado = puedeRenovarCarnet(true, true, false)
assert.equal(resultado, false,`puedeRenovarCarnet(true, true, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(true, false, true) debería retornar true", function() {
let resultado = puedeRenovarCarnet(true, false, true)
assert.equal(resultado, true,`puedeRenovarCarnet(true, false, true) deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(true, false, false) debería retornar false", function() {
let resultado = puedeRenovarCarnet(true, false, false)
assert.equal(resultado, false,`puedeRenovarCarnet(true, false, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(false, true, true) debería retornar false", function() {
let resultado = puedeRenovarCarnet(false, true, true)
assert.equal(resultado, false,`puedeRenovarCarnet(false, true, true) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(false, true, false) debería retornar false", function() {
let resultado = puedeRenovarCarnet(false, true, false)
assert.equal(resultado, false,`puedeRenovarCarnet(false, true, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(false, false, true) debería retornar false", function() {
let resultado = puedeRenovarCarnet(false, false, true)
assert.equal(resultado, false,`puedeRenovarCarnet(false, false, true) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeRenovarCarnet(false, false, false) debería retornar false", function() {
let resultado = puedeRenovarCarnet(false, false, false)
assert.equal(resultado, false,`puedeRenovarCarnet(false, false, false) deberia retornar false pero fue ${resultado}`);
})