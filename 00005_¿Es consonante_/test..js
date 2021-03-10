it("Si hacemos esConsonante('a') debería retornar false", function() {
let resultado = esConsonante('a')
assert.equal(resultado, false,`esConsonante('a') deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos esConsonante('n') debería retornar true", function() {
let resultado = esConsonante('n')
assert.equal(resultado, true,`esConsonante('n') deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos esConsonante('i') debería retornar false", function() {
let resultado = esConsonante('i')
assert.equal(resultado, false,`esConsonante('i') deberia retornar false pero fue ${resultado}`);
})