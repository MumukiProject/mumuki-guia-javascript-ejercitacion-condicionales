it("Si hacemos puedeGraduarse(80, 50, true) debería retornar true", function() {
let resultado = puedeGraduarse(80, 50, true)
assert.equal(resultado, true,`puedeGraduarse(80, 50, true) deberia retornar true pero fue ${resultado}`);
})