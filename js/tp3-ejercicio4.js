/* 4- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función. */

function numeroPar(numero) {
  if (numero % 2 === 0) {
    document.write(`<h2>El número  ${numero} par</h2>`);
  } else if (isNaN(numero)) {
    alert(`Ingresar un número válido`);
  } else {
    document.write(`<h3>El número ingresado ${numero} impar</h3>`);
  }
}

numeroPar((numero = parseInt(prompt(`Ingrese un numero a verificar`))));
