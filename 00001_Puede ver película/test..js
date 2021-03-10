it("Si hacemos puedeVerPelicula(12, false) debería retornar false", function() {
let resultado = puedeVerPelicula(12, false)
assert.equal(resultado, false,`puedeVerPelicula(12, false) deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeVerPelicula(12, true) debería retornar true", function() {
let resultado = puedeVerPelicula(12, true)
assert.equal(resultado, true,`puedeVerPelicula(12, true) deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos puedeVerPelicula(16, false) debería retornar false", function() {
let resultado = puedeVerPelicula(16, false)
assert.equal(resultado, true,`puedeVerPelicula(16, true) deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos puedeVerPelicula(18, true) debería retornar true", function() {
let resultado = puedeVerPelicula(18, true)
assert.equal(resultado, true,`puedeVerPelicula(18, true) deberia retornar true pero fue ${resultado}`);
})