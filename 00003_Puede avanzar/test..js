it("Si hacemos puedeAvanzar('verde') debería retornar true", function() {
  let resultado = puedeAvanzar('verde')
  assert.equal(resultado, true,`puedeAvanzar('verde') deberia retornar true pero fue ${resultado}`);
})

it("Si hacemos puedeAvanzar('amarillo') debería retornar false", function() {
  let resultado = puedeAvanzar('amarillo')
  assert.equal(resultado, false,`puedeAvanzar('amarillo') deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeAvanzar('rojo') debería retornar false", function() {
  let resultado = puedeAvanzar('rojo')
  assert.equal(resultado, false,`puedeAvanzar('rojo') deberia retornar false pero fue ${resultado}`);
})

it("Si hacemos puedeAvanzar('naranja') debería retornar Error: color de semáforo inválido", function() {
  let resultado = puedeAvanzar('naranja')
  assert.equal(resultado, 'Error: color de semáforo inválido',`puedeAvanzar('naranja') deberia retornar Error: color de semáforo inválido pero fue ${resultado}`);
})