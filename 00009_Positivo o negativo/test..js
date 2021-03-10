it("Si hacemos esPositivoONegativo(3) debería retornar 'positivo'", function() {
let resultado = esPositivoONegativo(3)
assert.equal(resultado, 'positivo',`esPositivoONegativo(3) deberia retornar 'positivo' pero fue ${resultado}`);
})

it("Si hacemos esPositivoONegativo(-5) debería retornar 'negativo'", function() {
let resultado = esPositivoONegativo(-5)
assert.equal(resultado, 'negativo',`esPositivoONegativo(-5) deberia retornar 'negativo' pero fue ${resultado}`);
})

it("Si hacemos esPositivoONegativo(15) debería retornar 'positivo'", function() {
let resultado = esPositivoONegativo(15)
assert.equal(resultado, 'positivo',`esPositivoONegativo(15) deberia retornar 'positivo' pero fue ${resultado}`);
})
