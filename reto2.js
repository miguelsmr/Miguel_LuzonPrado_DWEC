// 1. Array con al menos 4 tareas del día
const tareas = ["Repasar apuntes", "Hacer la compra", "Entrenar", "Terminar el reto de JS"];

// 2. Variable con las horas disponibles hoy
let horasDisponibles = 4;

// 3. Bucle que recorre las tareas y las muestra numeradas
for (let i = 0; i < tareas.length; i++) {
  console.log(`${i + 1}. ${tareas[i]}`);
}

// 4. Decisión según horasDisponibles
if (horasDisponibles > 5) {
  console.log("Día tranquilo");
} else if (horasDisponibles >= 3) {
  console.log("Día normal");
} else {
  console.log("Día ajustado");
}