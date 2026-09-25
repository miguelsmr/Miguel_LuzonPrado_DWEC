// Datos que no van a cambiar en toda la partida
const nombre = "Aragorn";
const habilidades = ["Espada", "Liderazgo", "Rastreo"];

// Datos que sí pueden cambiar durante el juego
let nivel = 5;
let vida = 100;
let esJefe = false;

// Mostrar cada dato con un mensaje descriptivo
console.log(`Nombre: ${nombre}`);
console.log(`Nivel: ${nivel}`);
console.log(`Vida: ${vida}`);
console.log(`¿Es jefe final?: ${esJefe}`);
console.log(`Habilidades: ${habilidades.join(", ")}`);

// Comprobar el tipo de cada variable con typeof
console.log(typeof nombre);
console.log(typeof nivel);
console.log(typeof vida);
console.log(typeof esJefe);
console.log(typeof habilidades);