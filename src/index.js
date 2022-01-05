/**
 * @challenge: INCORPORAR EVENTOS
Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  de la interfaz de nuestro simulador
 *
 * @version : 1.8.0
 * @author : Trinidad Margni
 * @fecha : 23/12/2021
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
 */

//--------------------- Boton Comenzar

let boton = document.getElementById("boton-comenzar");
boton.addEventListener ("click", comenzarProceso);

function comenzarProceso (event) {
  let borrarDiv = document.getElementById("presentacion");
  borrarDiv.className = "oculto";
}

//--------------------- Proceso 

function bienvenida (event) {
  event.preventDefault();

  // Trae los valores:
  let padre = document.getElementById("saludar-usuario")
  let userName = document.getElementById("input-name").value

  // Crea un nuevo elemento:
  let newWelcome = document.createElement("div");
  newWelcome.className = 'd-flex justify-content-center';
  newWelcome.innerHTML = `<h2 id="titulo">Hola ${userName}, por favor define como quieres elegir tu nuevo outfit</h2>`;
  padre.appendChild(newWelcome)

  // Remueve/oculta elementos anteriores:
  let formElement = document.getElementById("formulario-inicio");
  formElement.parentNode.removeChild(formElement);

  // Muestra elementos ocultos:
  let primerPregunta = document.getElementById("proceso-generador");
  primerPregunta.className = "visible"
}

function opcionRecomendacion(event) {
  event.preventDefault;

  // Trae los valores:
  let padre = document.getElementById("proceso-generador");
  let titulo = document.getElementById("titulo");

  // Cambia el titulo:
  titulo.innerHTML =`Generacion de outfit: por recomendacion`;

  // Remueve/oculta elementos anteriores:
  let divElement = document.getElementById("nuevas-opciones");
  divElement.parentNode.removeChild(divElement);

  // Muestra elementos ocultos:
  let segundaPregunta = document.getElementById("proceso-generador-dos");
  segundaPregunta.className = "visible"
}

function botonSecundario (event) {
  event.preventDefault();

  // Trae los valores:
  let sectionPadre = document.getElementById("resultados-proceso");
  let situationSelected = document.getElementById("situation").value;
  let weatherSelected = document.getElementById("weather").value;
  let titulo = document.getElementById("titulo");

  // Cambia el titulo:
  titulo.innerHTML =`Todo listo!`;

  // Remueve/oculta elementos anteriores:
  let divElement = document.getElementById("proceso-generador-dos");
  divElement.parentNode.removeChild(divElement);

  // Crea un nuevo elemento:
  let newResult = document.createElement("div");
  newResult.className = "d-flex justify-content-center align-items-center resultados";
  newResult.innerHTML = `Has elegido una situacion de ${situationSelected} en un clima de ${weatherSelected}. A continuacion podras vislumbrar tu nuevo outfit</p>`;
  sectionPadre.appendChild(newResult)
}

/* alert(
  "¡Bienvenid@! Estás a un paso de planificar los mejores outfits de forma completamente gratuita. Registrate para poder avanzar."
);

class Registro {
  constructor(nombre, apellido, nacimiento, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.correo = correo;
  }
  responder() {
    alert("Recibimos tus datos correctamente");
  }
}

const nuevaCuenta = new Registro(
  prompt("Ingrese su nombre"),
  prompt("Ingrese su apellido"),
  prompt("Ingrese su nacimiento"),
  prompt("Ingrese su correo electrónico")
);
nuevaCuenta.responder();

alert(
  "Nombre: " +
    nuevaCuenta.nombre +
    " " +
    nuevaCuenta.apellido +
    ". Fecha de nacimiento: " +
    nuevaCuenta.nacimiento +
    ". Correo electronico: " +
    nuevaCuenta.correo +
    "."
);

let respuesta = prompt(
  "Por favor, ingrese si los datos son correctos: si / no"
);

if (respuesta === "si") {
  alert("Bienvenid@! Ya puedes utilizar la herramienta!");
} else {
  alert("Por favor, recargue la pagina e intente nuevamente");
}

//--------------------- Prendas de ropa

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

//--------------------- Funciones

function comenzar() {
  let funcionalidad = prompt(
    "¿Cómo prefieres elegir? (En base a una prenda que ya tengo / En base a lo que me recomienden)"
  );
  if (funcionalidad === "En base a lo que me recomienden") {
    recomendarPrenda();
  } else if (funcionalidad === "En base a una prenda que ya tengo") {
    alert(
      "Lo lamentamos, esa funcionalidad aún se encuentra en desarrollo. Reinicia la página y prueba con una recomendación génerica."
    );
  } else {
    alert(
      "Lo lamentamos, tu solicitud no ha podido ser interpretada. Reinicia la página e intenta escribir la opción elegida exactamente como se ve en pantalla"
    );
  }
}

comenzar();

function recomendarPrenda() {
  let ocasion = prompt(
    "¿Cuál es la ocasión? (romance - amistad - club - familia - laboral - bar) "
  );
  let clima = prompt("¿Cómo está el clima? (calido - frio - templado)");
  if (clima === "calido" && ocasion === "romance") {
    alert(
      "Tu outfit será: " +
        randomTopCR +
        ", " +
        randomBottomCR +
        ", " +
        randomShoesCR +
        ". Acompañando con " +
        randomPropCR
    );
  } else if (clima === "calido" && ocasion === "amistad") {
    alert(
      "Tu outfit será: " +
        randomTopCA +
        ", " +
        randomBottomCA +
        ", " +
        randomShoesCA +
        ". Acompañando con " +
        randomPropCA
    );
  } else if (clima === "calido" && ocasion === "club") {
    alert(
      "Tu outfit será: " +
        randomTopCC +
        ", " +
        randomBottomCC +
        ", " +
        randomShoesCC +
        ". Acompañando con " +
        randomPropCC
    );
  } else if (clima === "calido" && ocasion === "familia") {
    alert(
      "Tu outfit será: " +
        randomTopCF +
        ", " +
        randomBottomCF +
        ", " +
        randomShoesCF +
        ". Acompañando con " +
        randomPropCF
    );
  } else if (clima === "calido" && ocasion === "laboral") {
    alert(
      "Tu outfit será: " +
        randomTopCL +
        ", " +
        randomBottomCL +
        ", " +
        randomShoesCL +
        ". Acompañando con " +
        randomPropCL
    );
  } else if (clima === "calido" && ocasion === "bar") {
    alert(
      "Tu outfit será: " +
        randomTopCB +
        ", " +
        randomBottomCB +
        ", " +
        randomShoesCB +
        ". Acompañando con " +
        randomPropCB
    );
  } else if (clima === "frio" && ocasion === "romance") {
    alert(
      "Tu outfit será: " +
        randomTopFR +
        ", " +
        randomBottomFR +
        ", " +
        randomShoesFR +
        ". Acompañando con " +
        randomPropFR +
        ". De abrigo, llevarás " +
        randomCoatFR
    );
  } else if (clima === "frio" && ocasion === "amistad") {
    alert(
      "Tu outfit será: " +
        randomTopFA +
        ", " +
        randomBottomFA +
        ", " +
        randomShoesFA +
        ". Acompañando con " +
        randomPropFA +
        ". De abrigo, llevarás " +
        randomCoatFA
    );
  } else if (clima === "frio" && ocasion === "club") {
    alert(
      "Tu outfit será: " +
        randomTopFC +
        ", " +
        randomBottomFC +
        ", " +
        randomShoesFC +
        ". Acompañando con " +
        randomPropFC +
        ". De abrigo, llevarás " +
        randomCoatFC
    );
  } else if (clima === "frio" && ocasion === "familia") {
    alert(
      "Tu outfit será: " +
        randomTopFF +
        ", " +
        randomBottomFF +
        ", " +
        randomShoesFF +
        ". Acompañando con " +
        randomPropFF +
        ". De abrigo, llevarás " +
        randomCoatFF
    );
  } else if (clima === "frio" && ocasion === "laboral") {
    alert(
      "Tu outfit será: " +
        randomTopFL +
        ", " +
        randomBottomFL +
        ", " +
        randomShoesFL +
        ". Acompañando con " +
        randomPropFL +
        ". De abrigo, llevarás " +
        randomCoatFL
    );
  } else if (clima === "frio" && ocasion === "bar") {
    alert(
      "Tu outfit será: " +
        randomTopFB +
        ", " +
        randomBottomFB +
        ", " +
        randomShoesFB +
        ". Acompañando con " +
        randomPropFB +
        ". De abrigo, llevarás " +
        randomCoatFB
    );
  } else if (clima === "templado" && ocasion === "romance") {
    alert(
      "Tu outfit será: " +
        randomTopTR +
        ", " +
        randomBottomTR +
        ", " +
        randomShoesTR +
        ". Acompañando con " +
        randomPropTR
    );
  } else if (clima === "templado" && ocasion === "amistad") {
    alert(
      "Tu outfit será: " +
        randomTopTA +
        ", " +
        randomBottomTA +
        ", " +
        randomShoesTA +
        ". Acompañando con " +
        randomPropTA
    );
  } else if (clima === "templado" && ocasion === "club") {
    alert(
      "Tu outfit será: " +
        randomTopTC +
        ", " +
        randomBottomTC +
        ", " +
        randomShoesTC +
        ". Acompañando con " +
        randomPropTC
    );
  } else if (clima === "templado" && ocasion === "familia") {
    alert(
      "Tu outfit será: " +
        randomTopTF +
        ", " +
        randomBottomTF +
        ", " +
        randomShoesTF +
        ". Acompañando con " +
        randomPropTF
    );
  } else if (clima === "templado" && ocasion === "laboral") {
    alert(
      "Tu outfit será: " +
        randomTopTL +
        ", " +
        randomBottomTL +
        ", " +
        randomShoesTL +
        ". Acompañando con " +
        randomPropTL
    );
  } else if (clima === "templado" && ocasion === "bar") {
    alert(
      "Tu outfit será: " +
        randomTopTB +
        ", " +
        randomBottomTB +
        ", " +
        randomShoesTB +
        ". Acompañando con " +
        randomPropTB
    );
  } else {
    alert(
      "Lo lamento, debido a un error interno no hemos podido encontrar un match. Intenta nuevamente."
    );
  }
} */
