// 1. Números del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Solo los pares del 2 al 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. Recorrer un array de frutas
const frutas = ["manzana", "pera", "plátano"];
for (const fruta of frutas) {
  console.log(fruta);
}

// 4. Tabla de multiplicar de un número
const numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}