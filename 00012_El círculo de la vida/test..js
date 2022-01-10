describe("" ,function() {
  it("El perimetro de un circulo de radio 1 es 6.28318530717958", function () {
    assert(Math.abs(perimetroCirculo(1) - 6.28318530717958) < 0.01, "perimetroCirculo de 1 debería ser aproximadamente 6.28318530717958")
  });
  it("El perimetro de un circulo de radio 2 es 12.56637061435916", function () {
    assert(Math.abs(perimetroCirculo(2) - 12.56637061435916) < 0.01, "perimetroCirculo de 2 debería ser aproximadamente 12.56637061435916")
  });
  it("El perimetro de un circulo de radio 0 es 0", function () {
    assert(Math.abs(perimetroCirculo(0) - 0) < 0.01, "perimetroCirculo de 0 debería ser aproximadamente 0")
  });
  it("El area de un circulo de radio 1 es 3.14159265358979", function () {
    assert(Math.abs(areaCirculo(1) - 3.14159265358979) < 0.01, "areaCirculo de 1 debería ser aproximadamente 3.14159265358979")
  });
  it("El area de un circulo de radio 2 es 12.56637061435916", function () {
    assert(Math.abs(areaCirculo(2) - 12.56637061435916) < 0.01, "areaCirculo de 2 debería ser aproximadamente 12.56637061435916")
  });
  it("El area de un circulo de radio 0 es 0", function () {
    assert(Math.abs(areaCirculo(0) - 0) < 0.01, "areaCirculo de 0 debería ser aproximadamente 0")
  });
}) 