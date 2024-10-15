
window.addEventListener('load', gestionarMuebles);

let muebles = {};

function gestionarMuebles() {
    // Obtener referencias a los elementos de los muebles
    muebles['mueble1'] = document.getElementById('mueble1');
    muebles['mueble2'] = document.getElementById('mueble2');
    muebles['mueble3'] = document.getElementById('mueble3');

    // Ocultar todos los muebles al iniciar, excepto el primero
    for (let key in muebles) {
        muebles[key].style.display = 'none';
    }
    muebles['mueble1'].style.display = 'block';

    // Agregar eventos a los botones de los muebles
    document.getElementById('mueble1-tab').addEventListener('click', () => mostrarMueble('mueble1'));
    document.getElementById('mueble2-tab').addEventListener('click', () => mostrarMueble('mueble2'));
    document.getElementById('mueble3-tab').addEventListener('click', () => mostrarMueble('mueble3'));
}

function mostrarMueble(mueble) {
    // Ocultar todos los muebles
    for (let key in muebles) {
        muebles[key].style.display = 'none';
    }

    // Mostrar el mueble seleccionado
    if (muebles[mueble]) {
        muebles[mueble].style.display = 'block';
    }
}
