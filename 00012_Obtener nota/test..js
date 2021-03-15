it("Si hacemos obtenerNota(7) debería retornar Bueno", function() {
let resultado = obtenerNota(7)
assert.equal(resultado, 'Bueno',`obtenerNota(7) deberia retornar 'Bueno' pero fue ${resultado}`);
})

it("Si hacemos obtenerNota(9.6) debería retornar Muy bueno", function() {
let resultado = obtenerNota(9.6)
assert.equal(resultado, 'Muy bueno',`obtenerNota(9.6) deberia retornar 'Muy bueno' pero fue ${resultado}`);
})

it("Si hacemos obtenerNota(12) debería retornar Puntaje inválido", function() {
let resultado = obtenerNota(12)
assert.equal(resultado, 'Puntaje inválido',`obtenerNota(12) deberia retornar 'Puntaje inválido' pero fue ${resultado}`);
})