/* 5- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas. */

function verificarString(texto) {
  const textoMayuscula = texto.toUpperCase();
  const textoMinuscula = texto.toLowerCase();
  if (texto === "" || !isNaN(texto)) {
    alert(`Ingresa un texto válido`);
  } else if (texto === textoMayuscula) {
    document.write(`El texto ingresado "${texto}" esta escrito en mayuscula.`);
  } else if (texto === textoMinuscula) {
    document.write(`El texto ingresado "${texto}" esta escrito en minuscula.`);
  } else {
    document.write(
      `Su texto "${texto}" esta escrito tanto en mayusculas como en minusculas.`
    );
  }
}

verificarString(prompt(`Ingrese su texto`));
