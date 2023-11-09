/* Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:

--Mostrar la longitud del arreglo.
--Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
--Añade en última posición la ciudad de París.
--Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.*/

const arrayDeCiduades = [];

while (true) {
  let ciudadesIngresadas = prompt(`Ingrese el nombre de ciudades`);
  if (ciudadesIngresadas === null) {
    break;
  } else if (!isNaN(ciudadesIngresadas) || ciudadesIngresadas === "") {
    alert(`Ingrese un nombre de ciudad válido`);
  } else {
    arrayDeCiduades.push(ciudadesIngresadas);
  }
}

//mostrar por pantalla
if (arrayDeCiduades[0] !== undefined) {
  arrayDeCiduades.push("París");
  document.write(
    `<h2> El arraglo de ciudades tiene ${arrayDeCiduades.length} elementos </h2>`
  );
  document.write(
    `<li>Elemento en la 1° posicion: ${arrayDeCiduades[0]}</li>`
  );
  document.write(`<li>Elemento en la 2° posicion: ${arrayDeCiduades[1]}</li>`);
  document.write(
    `<li>Elemento en la ultima posicion: ${
      arrayDeCiduades[arrayDeCiduades.length - 2]
    }</li> <br>`
  );
  document.write(
    `<li>Elemento en la ultima posicion: ${
      arrayDeCiduades[arrayDeCiduades.length - 1]
    }</li></ul>`
  );

  // bucle para mostrar la lista de ciudades completa
  document.write(`<h2>Arreglo de ciudades</h2>`);
  document.write(`<ul>`);
  for (let i = 0; i < arrayDeCiduades.length; i++) {
    document.write(`<li> Elemento: ${arrayDeCiduades[i]} </li>`);
  }
  document.write(`</ul>`);
} else {
  document.write("<h3>No se ingresaron elementos</h3>");
}
