it("Si hacemos esParOImpar(3) debería retornar 'impar'", function() {
let resultado = esParOImpar(3)
assert.equal(resultado, 'impar',`esParOImpar(3) deberia retornar 'impar' pero fue ${resultado}`);
})

it("Si hacemos esParOImpar(10) debería retornar 'par'", function() {
let resultado = esParOImpar(10)
assert.equal(resultado, 'par',`esParOImpar(10) deberia retornar 'par' pero fue ${resultado}`);
})

it("Si hacemos esParOImpar(0) debería retornar 'par'", function() {
let resultado = esParOImpar(0)
assert.equal(resultado, 'par',`esParOImpar(0) deberia retornar 'par' pero fue ${resultado}`);
})