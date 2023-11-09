/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro es p = 2*(a +b)
Ejemplo:5
Input:
lado A = 24
lado B = 5
Output: 58 */

const perimetroRectangulo = (ladoA, ladoB) => {
  if (isNaN(ladoA)) {
    alert("Ingrese valores numericos");
  } else if (isNaN(ladoB)) {
    alert("ingrese un valor numerico");
  } else {
    const perimetro = 2 * (ladoA + ladoB);
    document.write(
      `<h2>El perimetro de su rectangulo de LadoA: "${ladoA}" y LadoB: "${ladoB}" es = <span><h3>${perimetro}</h3></span><h2>`
    );
  }
};

perimetroRectangulo(
  parseFloat(prompt(`Ingrese el valor del Lado A`)),
  parseFloat(prompt(`Ingrese el valor del Lado B`))
);
