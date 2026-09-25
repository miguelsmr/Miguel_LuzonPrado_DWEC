let mensaje = "global";

function saludar() {
  let mensaje = "dentro de la función";
  console.log(mensaje);
}

saludar();
console.log(mensaje);

if (true) {
  let secreto = 42;
}
console.log(secreto);

// Respuestas:
// 1. Predicción antes de ejecutar: "dentro de la función", luego "global", y la última línea daría error.
// 2. Al ejecutar coincide con la predicción.
// 3. console.log(secreto) da ReferenceError porque "secreto" se declaró con let
//    dentro del bloque if{}, y let respeta el scope de bloque: fuera de esas llaves
//    la variable no existe.