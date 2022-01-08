/**
 * @challenge: INCORPORAR JQUERY AL PROYECTO
Suma al proyecto integrador los conceptos de jQuery que vimos en las últimas dos clases.
 *
 * @version : 1.11.0
 * @author : Trinidad Margni
 * @fecha : 07/01/2021
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
 *  - v1.6.0 – Primera Entrega de: PRIMER PRE-ENTREGA DEL PROYECTO FINAL
 *  - v1.7.0 – Primera Entrega de: INTERACTUAR CON HTML
 *  - v1.8.0 – Primera Entrega de: INCORPORAR EVENTOS
 *  - v1.9.0 – Primera entrega de: SEGUNDA PRE-ENTREGA DEL PROYECTO FINAL
 *  - v1.10.0 – Primera entrega de: INCORPORAR JQUERY AL PROYECTO 
 */

//--------------------- Boton Comenzar

$(document).ready(function () {
  console.log("El documento esta listo");
});

$("#boton-comenzar").click(function comenzarProceso(event) {
  $("#presentacion").hide("fast");
});

//--------------------- Proceso Inicial

function bienvenidaUsuario(event) {
  event.preventDefault();

  // Trae los valores:
  let userName = document.getElementById("input-name").value;
  localStorage.setItem("Nombre", userName);

  // Crea un nuevo elemento:
  $("#saludar-usuario").append(`
    <div class="d-flex justify-content-center">
      <h2 id="titulo">Hola ${userName}, por favor define como quieres elegir tu nuevo outfit</h2>
    </div>`);

  // Remueve/oculta elementos anteriores:
  $("#formulario-inicio").hide("fast");

  // Muestra elementos ocultos:
  $("#proceso-generador").slideDown("fast");
}

let button = document.querySelector("#bienvenida");
button.addEventListener("click", bienvenidaUsuario);

//////////////

$("#opcion-recomendacion").click(function recomendacionUsuario(event) {
  event.preventDefault;

  // Cambia el titulo:
  $("#titulo").text(`Generacion de outfit: por recomendacion`);

  // Remueve/oculta elementos anteriores:
  $("#proceso-generador").slideUp("fast");

  // Muestra elementos ocultos:
  $("#proceso-generador-dos").slideDown("fast");
});

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
  {
    nombre: "patines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "ojotas",
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

$("#boton-secundario").click(function botonSecundario(event) {
  event.preventDefault();

  // Trae los valores:
  let situationSelected = document.getElementById("situation").value;
  let weatherSelected = document.getElementById("weather").value;

  // Cambia el titulo:
  $("#titulo").text(`Todo listo!`);

  // Remueve/oculta elementos anteriores:
  $("#proceso-generador-dos").hide("fast");

  // Crea un nuevo elemento:

  $("#resultados-proceso").append(`
  <div class="d-flex justify-content-center align-items-center flex-column resultados">
  <p>Has elegido una situacion de ${situationSelected} en un clima de ${weatherSelected}. A continuacion podras vislumbrar tu nuevo outfit</p> 
  <div id="bloque-outfit")>
  </div>
  </div>`);

  // Genera el outfit:

  if (weatherSelected === "calido" && situationSelected === "romance") {
    $("#bloque-outfit").append(`
    <div class="resultadoFinal">
    <h2>Tu outfit sera ${randomTopCR}, ${randomBottomCR} y ${randomShoesCR}. Acompañando con ${randomPropCR}</h2>
    </div>
    `);

    let outfitActual = {
      randomTopCR,
      randomBottomCR,
      randomShoesCR,
      randomPropCR,
    };
    let existenOutfitsAnteriores = localStorage.getItem("outfitsAnteriores");

    if (existenOutfitsAnteriores !== null) {
      let outfitsAnteriores = JSON.parse(
        localStorage.getItem("outfitsAnteriores")
      );
      outfitsAnteriores.unshift(outfitActual);
      localStorage.setItem(
        "outfitsAnteriores",
        JSON.stringify(outfitsAnteriores)
      );
    } else {
      let outfitsAnteriores = [];
      outfitsAnteriores.unshift(outfitActual);
      localStorage.setItem(
        "outfitsAnteriores",
        JSON.stringify(outfitsAnteriores)
      );
    }

    generarUltimoOutfit(outfitActual);
  } else {
    $("#bloque-outfit").append(`
    <div class="resultadoFinal">
    <h2>Lo lamento, debido a un error interno no hemos podido encontrar un match. Intenta nuevamente</h2>
    </div>
    `);
  }
});

// Outfits anteriores:

generarOutfits();

function generarUltimoOutfit (outfit) {
  $("#lista-outfits-anteriores").prepend(`
  <li>
    Outfit: ${outfit.randomTopCR} +  ${outfit.randomBottomCR} + ${outfit.randomShoesCR} + ${outfit.randomPropCR}
  </li>
`);
}

function generarOutfits(event) {
  const outfitsAnteriores = JSON.parse(
    localStorage.getItem("outfitsAnteriores")
  );
  outfitsAnteriores.forEach((outfit) => {
    $("#lista-outfits-anteriores").append(`
    <li>
      Outfit: ${outfit.randomTopCR} +  ${outfit.randomBottomCR} + ${outfit.randomShoesCR} + ${outfit.randomPropCR}
    </li>
  `);
  });
}

$("#boton-outfits-anteriores").click(function () {
  $("#outfits-anteriores").slideDown("fast");
});
