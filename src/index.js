/**
 * @challenge: SEGUNDA ENTREGA DEL PROYECTO FINAL
Deberás agregar y entregar uso de JSON y Storage, y DOM y eventos del usuario, correspondientes a la segunda entrega de tu proyecto final.
 *
 * @version : 1.9.0
 * @author : Trinidad Margni
 * @fecha : 28/12/2021
 *
 * History:
 *  - v1.0.0 – Primera entrega de: CREAR UN ALGORITMO JS SIMPLE
 *  - v1.1.0 – Primera entrega de: CREAR UN ALGORITMO CON UN CONDICIONAL
 *  - v1.1.1 – Segunda entrega de: CREAR UN ALGORITMO CON UN CONDICIONAL. Correccion de nombre de versionado, parseo y comparaciones.
 *  - v1.2.0 – Primera entrega de: CREAR UN ALGORITMO UTILIZANDO UN CICLO
 *  - v1.3.0 – Primera entrega de: SIMULADOR INTERACTIVO
 *  - v1.3.1 – Segunda entrega de: SIMULADOR INTERACTIVO
 *  - v1.4.0 – Primera entrega de: INCORPORAR OBJETOS
 *  - v1.4.1 – Segunda entrega de: INCORPORAR OBJETOS
 *  - v1.5.0 – Primera entrega de: INCORPORAR ARRAYS
 *  - v1.6.0 – Primera Entrega del Proyecto Final
 *  - v1.7.0 – Primera Entrega de Interactuar con HTML
 *  - v1.8.0 – Primera Entrega de Incorporar Eventos
 *  - v1.9.0 – Segunda entrega del proyecto final
 */

//--------------------- Boton Comenzar

let boton = document.getElementById("boton-comenzar");
boton.addEventListener("click", comenzarProceso);

function comenzarProceso(event) {
  let borrarDiv = document.getElementById("presentacion");
  borrarDiv.className = "oculto";
}

//--------------------- Proceso Inicial

function bienvenida(event) {
  event.preventDefault();

  // Trae los valores:
  let padre = document.getElementById("saludar-usuario");
  let userName = document.getElementById("input-name").value;

  // Crea un nuevo elemento:
  let newWelcome = document.createElement("div");
  newWelcome.className = "d-flex justify-content-center";
  newWelcome.innerHTML = `<h2 id="titulo">Hola ${userName}, por favor define como quieres elegir tu nuevo outfit</h2>`;
  padre.appendChild(newWelcome);

  // Remueve/oculta elementos anteriores:
  let formElement = document.getElementById("formulario-inicio");
  formElement.parentNode.removeChild(formElement);

  // Muestra elementos ocultos:
  let primerPregunta = document.getElementById("proceso-generador");
  primerPregunta.className = "visible";
}

function opcionRecomendacion(event) {
  event.preventDefault;

  // Trae los valores:
  let padre = document.getElementById("proceso-generador");
  let titulo = document.getElementById("titulo");

  // Cambia el titulo:
  titulo.innerHTML = `Generacion de outfit: por recomendacion`;

  // Remueve/oculta elementos anteriores:
  let divElement = document.getElementById("nuevas-opciones");
  divElement.parentNode.removeChild(divElement);

  // Muestra elementos ocultos:
  let segundaPregunta = document.getElementById("proceso-generador-dos");
  segundaPregunta.className = "visible";
}

//--------------------- Objetos

const prendasRopa = [
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
];

//--------------------- Filtros, Mapas y Randoms

// Calido / Romance

const crSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "superior"
);

const crSuperiorMapa = crSuperior.map((nombre) => nombre.nombre);

const crInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "inferior"
);

const crInferiorMapa = crInferior.map((nombre) => nombre.nombre);

const crCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "calzados"
);

const crCalzadoMapa = crCalzado.map((nombre) => nombre.nombre);

const crAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "accesorios"
);

const crAccesoriosMapa = crAccesorios.map((nombre) => nombre.nombre);

var randomTopCR =
  crSuperiorMapa[Math.floor(Math.random() * crSuperiorMapa.length)];
var randomBottomCR =
  crInferiorMapa[Math.floor(Math.random() * crInferiorMapa.length)];
var randomShoesCR =
  crCalzadoMapa[Math.floor(Math.random() * crCalzadoMapa.length)];
var randomPropCR =
  crAccesoriosMapa[Math.floor(Math.random() * crAccesoriosMapa.length)];

//--------------------- Condicionales / Generacion de Outfit

function botonSecundario(event) {
  event.preventDefault();

  // Trae los valores:
  let sectionPadre = document.getElementById("resultados-proceso");
  let situationSelected = document.getElementById("situation").value;
  let weatherSelected = document.getElementById("weather").value;
  let titulo = document.getElementById("titulo");

  // Cambia el titulo:
  titulo.innerHTML = `Todo listo!`;

  // Remueve/oculta elementos anteriores:
  let divElement = document.getElementById("proceso-generador-dos");
  divElement.parentNode.removeChild(divElement);

  // Crea un nuevo elemento:
  let newResult = document.createElement("div");
  newResult.className =
    "d-flex justify-content-center align-items-center flex-column resultados";
  newResult.innerHTML = `<p>Has elegido una situacion de ${situationSelected} en un clima de ${weatherSelected}. A continuacion podras vislumbrar tu nuevo outfit</p> <div id="bloque-outfit")></div>`;
  sectionPadre.appendChild(newResult);
  
  // Genera el outfit:

  if (weatherSelected === "calido" && situationSelected === "romance") {
    let padreDos = document.getElementById("bloque-outfit");
    newOutfitResult = document.createElement("div");
    newOutfitResult.className =
    "resultadoFinal"
    newOutfitResult.innerHTML = `<h2>Tu outfit sera ${randomTopCR}, ${randomBottomCR} y ${randomShoesCR}. Acompañando con ${randomPropCR}</h2>`
    padreDos.appendChild(newOutfitResult);
  } else {
    let padreDos = document.getElementById("bloque-outfit");
    newOutfitResult = document.createElement("div");
    newOutfitResult.className =
    "resultadoFinal"
    newOutfitResult.innerHTML = `<h2>Lo lamento, debido a un error interno no hemos podido encontrar un match. Intenta nuevamente</h2>`
    padreDos.appendChild(newOutfitResult);
   }
}
