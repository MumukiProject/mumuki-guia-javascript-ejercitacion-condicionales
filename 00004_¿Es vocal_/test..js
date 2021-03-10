it("Si hacemos esVocal('a') debería retornar true", function() {
let resultado = esVocal('a')
assert.equal(resultado, true,`esVocal('a') deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos esVocal('n') debería retornar false", function() {
let resultado = esVocal('n')
assert.equal(resultado, false,`esVocal('n') deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos esVocal('i') debería retornar true", function() {
let resultado = esVocal('i')
assert.equal(resultado, true,`esVocal('i') deberia retornar true pero fue ${resultado}`);
})