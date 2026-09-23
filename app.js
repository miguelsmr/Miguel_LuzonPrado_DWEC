console.log("¡Hola DWEC! Mi taller ya funciona.");
const boton = document.getElementById('boton1');
const aviso = document.getElementById('aviso');

let contador = 0;

boton.addEventListener('click', function () {
  contador++;
  aviso.textContent = 'Has pulsado ' + contador + ' veces';
});