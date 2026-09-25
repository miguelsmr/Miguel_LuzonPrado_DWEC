console.log("¡Hola DWEC! Mi taller ya funciona.");

const boton = document.getElementById('boton1');
const aviso = document.getElementById('aviso');
let contador = 0;

if (boton) {
  boton.addEventListener('click', function () {
    contador++;
    aviso.textContent = 'Has pulsado ' + contador + ' veces';
  });
}

const modonoche = document.getElementById('modonoche');

if (modonoche) {
  modonoche.addEventListener('click', function () {
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
      modonoche.textContent = '☀️';
    } else {
      modonoche.textContent = '🌙';
    }
  });
}

const boton3 = document.getElementById('boton3');
const mensaje3 = document.getElementById('mensaje3');

if (boton3) {
  boton3.addEventListener('click', function () {
    mensaje3.textContent = 'Cambiado con script externo';
  });
}