/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario. */

const tablaMultiplicar = (numero) => {
  if (isNaN(numero)) {
    document.write("<h3>Ingrese un valor numerico</h3>");
  } else {
    document.write(
      `<h2>Tabla de multiplicar del <span><h3>${numero}</h3></span></h2>`
    );
    document.write(`<ul>`);
    for (let i = 0; i <= 10; i++) {
      let resultado = numero * i;
      document.write(`<li> (${numero}x${i}) = ${resultado}`);
    }
    document.write(`</ul>`);
  }
};

tablaMultiplicar(parseInt(prompt(`Ingrese su número`)));
