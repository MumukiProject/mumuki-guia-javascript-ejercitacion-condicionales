it("Si hacemos obtenerNota(7) debería retornar Bueno", function() {
let resultado = obtenerNota(7)
assert.equal(resultado, 'Bueno',`obtenerNota(7) deberia retornar 'Bueno' pero fue ${resultado}`);
})

it("Si hacemos obtenerNota(9.6) debería retornar Excelente", function() {
let resultado = obtenerNota(9.6)
assert.equal(resultado, 'Excelente',`obtenerNota(9.6) deberia retornar 'Excelente' pero fue ${resultado}`);
})

it("Si hacemos obtenerNota(12) debería retornar Puntaje invalido", function() {
let resultado = obtenerNota(12)
assert.equal(resultado, 'Puntaje invalido',`obtenerNota(12) deberia retornar 'Puntaje invalido' pero fue ${resultado}`);
})