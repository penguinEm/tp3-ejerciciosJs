/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación. */

const suma = [];

//lanzar los dados 50 veces y armar el array con sus resultados
for (let i = 1; i <= 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let sumaDeAmbosDados = dado1 + dado2;

  suma.push(sumaDeAmbosDados);
  console.log(dado1)
}
console.log(`El resultado es: ${suma}`);
let vecesTirado = 0
//mostrar con una tabla y armar el array para cada posible valor con filter
document.write(`<table>`);
document.write(`<thead>`);
document.write(`<trow>`);
document.write(`<th>Suma`);
document.write(`<th>Apariciones`);
document.write(`<tbody>`);
for (indiceValores = 2; indiceValores <= 12; indiceValores++) {
  let valores = suma.filter((item) => item === indiceValores);
  console.log(valores);
  document.write(`<tr>`);
  document.write(`<td>El valor ${indiceValores} `);
  document.write(`<td>aparece ${valores.length} veces</td>`);
  document.write(`</tr>`);
  vecesTirado +=  valores.length;
}
document.write(`</tbody>`);
document.write(`</th>`);
document.write(`</th>`);
document.write(`<tbody>`);
document.write(`</tbody>`);
document.write(`</trow>`);
document.write(`</thead>`);
document.write(`</table>`);

console.log(`El par de dados se tiraron ${vecesTirado} veces`);