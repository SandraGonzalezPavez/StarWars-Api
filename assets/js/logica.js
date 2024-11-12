let contadorPrimeros = 0;
let contadorSegundos = 0;
let contadorTerceros = 0;

const asignarEventos = () => {
    const primeros = document.getElementById("primeros");
    primeros.addEventListener("mouseover", mostrarPrimerosPersonajes);

    const segundos = document.getElementById("segundos");
    segundos.addEventListener("mouseover", mostrarSegundosPersonajes);

    const terceros = document.getElementById("terceros");
    terceros.addEventListener("mouseover", mostrarTercerosPersonajes);
};

function generadorTarjetas(personajes, claseCirculo, contador) {
    // Comprobar si hay personajes disponibles y el contador está dentro del rango
    if (contador < personajes.length) {
        return `<div class="col-sm">
                    <div class="card">
                        <div class="card-body">
                            <div class="${claseCirculo}"></div>
                            <h3 class="card-title">${personajes[contador].name}</h3>
                            <p class="card-text">${personajes[contador].height} cm - ${personajes[contador].mass} kg</p>
                        </div>
                    </div>
                </div>`;
    }
    return null; // No hay más tarjetas
}

const mostrarTarjetas = (generador, contenedor, contador, personajes, claseCirculo) => {
    const tarjeta = generador(personajes, claseCirculo, contador);
    if (tarjeta) {
        contenedor.insertAdjacentHTML("beforeend", tarjeta);
    }
};

// Función para mostrar los personajes de la sección 1 (primeros)
const mostrarPrimerosPersonajes = () => {
    let url = "https://swapi.dev/api/people/?page=1";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const personajes = data.results.slice(0, 5);
        const contenedor = document.querySelector("#primeros").closest(".entry").querySelector(".generated-cards");
        mostrarTarjetas(generadorTarjetas, contenedor, contadorPrimeros, personajes, "circle");
        contadorPrimeros++; // Incrementa el contador para la próxima tarjeta
    });
};

// Función para mostrar los personajes de la sección 2 (segundos)
const mostrarSegundosPersonajes = () => {
    let url = "https://swapi.dev/api/people/?page=1";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const personajes = data.results.slice(5, 10);
        const contenedor = document.querySelector("#segundos").closest(".entry1").querySelector(".generated-cards");
        mostrarTarjetas(generadorTarjetas, contenedor, contadorSegundos, personajes, "circle1");
        contadorSegundos++; // Incrementa el contador para la próxima tarjeta
    });
};

// Función para mostrar los personajes de la sección 3 (terceros)
const mostrarTercerosPersonajes = () => {
    let url = "https://swapi.dev/api/people/?page=2";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const personajes = data.results.slice(0, 5);
        const contenedor = document.querySelector("#terceros").closest(".entry2").querySelector(".generated-cards");
        mostrarTarjetas(generadorTarjetas, contenedor, contadorTerceros, personajes, "circle2");
        contadorTerceros++; // Incrementa el contador para la próxima tarjeta
    });
};

// Llamar a la función para asignar eventos al cargar la página
window.onload = asignarEventos;









