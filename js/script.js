
window.addEventListener('load', gestionarMuebles);

let muebles = {};

function gestionarMuebles() {
    // Obtener referencias a los elementos de los muebles
    muebles['como'] = document.getElementById('como');
    muebles['como-ideal'] = document.getElementById('como-ideal');
    muebles['mueble1'] = document.getElementById('mueble1');
    muebles['mueble2'] = document.getElementById('mueble2');
    muebles['mueble3'] = document.getElementById('mueble3');

    // Asignar eventos a los labels para mostrar/ocultar las secciones
    document.getElementById('como-tab').addEventListener('click', () => mostrarMueble('como'));
    document.getElementById('como-ideal-tab').addEventListener('click', () => mostrarMueble('como-ideal'));
    document.getElementById('mueble1-tab').addEventListener('click', () => mostrarMueble('mueble1'));
    document.getElementById('mueble2-tab').addEventListener('click', () => mostrarMueble('mueble2'));
    document.getElementById('mueble3-tab').addEventListener('click', () => mostrarMueble('mueble3'));

    // Muestra la primera sección al cargar
    mostrarMueble('como');
}

function mostrarMueble(nombre) {
    // Ocultar todas las secciones
    for (let mueble in muebles) {
        muebles[mueble].style.display = 'none';
    }
    // Mostrar la sección seleccionada
    muebles[nombre].style.display = 'block';
}
