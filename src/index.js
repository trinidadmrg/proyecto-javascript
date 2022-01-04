/**
 * @challenge: PRIMERA ENTREGA DEL PROYECTO FINAL
Deberás entregar la Estructura HTML y CSS del proyecto, las variables de JS necesarias y los objetos de JS, correspondientes a la primera entrega de tu proyecto final.
 *
 * @version : 2.0.0
 * @author : Trinidad Margni
 * @fecha : 17/12/2021
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
 *  - v2.0.0 – Primera Entrega del Proyecto Final
 */

//--------------------- Registro

alert(
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
    nombre: "blusa",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "blusa",
    tipo: "superior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "remera manga corta",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "remera manga corta",
    tipo: "superior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "remera manga corta",
    tipo: "superior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "remera manga corta",
    tipo: "superior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "musculosa",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "musculosa",
    tipo: "superior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "body sin mangas",
    tipo: "superior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "crop top",
    tipo: "superior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "crop top",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "crop top",
    tipo: "superior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "crop top",
    tipo: "superior",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "strapless",
    tipo: "superior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "strapless",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "strapless",
    tipo: "superior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "strapless",
    tipo: "superior",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "blusa de tiras",
    tipo: "superior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "blusa de tiras",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "blusa de tiras",
    tipo: "superior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "blusa de tiras",
    tipo: "superior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "blusa de tiras",
    tipo: "superior",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "camisa manga corta",
    tipo: "superior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "camisa manga corta",
    tipo: "superior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "camisa manga corta",
    tipo: "superior",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "camisa manga corta",
    tipo: "superior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "camisa manga corta",
    tipo: "superior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "camisa manga corta",
    tipo: "superior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "camisa manga larga",
    tipo: "superior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "camisa manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "laboral",
  },

  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "body manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "remera manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "remera manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "remera manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "remera manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "remera manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "remera manga larga",
    tipo: "superior",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "pollera",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "short",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "calido",
    ocasion: "bar",
  },

  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "minifalda",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "pantalones acampanados",
    tipo: "inferior",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "pantalones capri",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones capri",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "pantalones capri",
    tipo: "inferior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "pantalones capri",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones capri",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "pantalones capri",
    tipo: "inferior",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "skinny jeans",
    tipo: "inferior",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "pantalones palazzo",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "pantalones palazzo",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones palazzo",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "pantalones palazzo",
    tipo: "inferior",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "pantalones palazzo",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones palazzo",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "pantalones cargo",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones cargo",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "pantalones cargo",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones cargo",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "pantalones rectos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones rectos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "pantalones rectos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "pantalones rectos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "pantalones rectos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "pantalones rectos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "harem",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "harem",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "harem",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "harem",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },

  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "jeans basicos",
    tipo: "inferior",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "buzo",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "buzo",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "sueter",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "sueter",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "sueter",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "sueter",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "sueter",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "cardigan",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "cardigan",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "cardigan",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "cardigan",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "cardigan",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "cardigan",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "montgomery",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "montgomery",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "montgomery",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "montgomery",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "montgomery",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "polera",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "polera",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "polera",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "polera",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "polera",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "chaleco",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "chaleco",
    tipo: "abrigo",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "campera de jean",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "campera de jean",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "campera de jean",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "campera de jean",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "campera de jean",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "campera de ecocuero",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "campera de ecocuero",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "campera de ecocuero",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "campera de ecocuero",
    tipo: "abrigo",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "boina",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "bufanda",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "bufanda",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "bufanda",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "bufanda",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "bufanda",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "aros",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "anillos",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "collar",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "cinturon",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "corbata",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "corbata",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "corbata",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "gorra",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "gorra",
    tipo: "accesorios",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "gorra",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "gorra",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "sombrero",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "sombrero",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "sombrero",
    tipo: "accesorios",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "sombrero",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "sombrero",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "sombrero",
    tipo: "accesorios",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "zapatos de tacon",
    tipo: "calzados",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "frio",
    ocasion: "laboral",
  },
  {
    nombre: "zapatos de plataforma",
    tipo: "calzados",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "zapatillas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "zapatillas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "zapatillas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "zapatillas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "zandalias",
    tipo: "calzados",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "alpargatas",
    tipo: "calzados",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "alpargatas",
    tipo: "calzados",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "alpargatas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "alpargatas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "babuchas",
    tipo: "calzados",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "babuchas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "frio",
  },
  {
    nombre: "botas",
    tipo: "calzados",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "club",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "bar",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "amistad",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "club",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "familia",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "frio",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "bar",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "club",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "frio",
  },
  {
    nombre: "botines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "bar",
  },
  {
    nombre: "chanclas",
    tipo: "calzados",
    clima: "calido",
    ocasion: "amistad",
  },
  {
    nombre: "chanclas",
    tipo: "calzados",
    clima: "calido",
    ocasion: "familia",
  },
  {
    nombre: "chanclas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "amistad",
  },
  {
    nombre: "chanclas",
    tipo: "calzados",
    clima: "templado",
    ocasion: "familia",
  },
  {
    nombre: "mocasines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "romance",
  },
  {
    nombre: "mocasines",
    tipo: "calzados",
    clima: "calido",
    ocasion: "laboral",
  },
  {
    nombre: "mocasines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "romance",
  },
  {
    nombre: "mocasines",
    tipo: "calzados",
    clima: "templado",
    ocasion: "laboral",
  },
  {
    nombre: "mocasines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "romance",
  },
  {
    nombre: "mocasines",
    tipo: "calzados",
    clima: "frio",
    ocasion: "laboral",
  },
];

//--------------------- Colores

const coloresDeRopa = [
  "rojo",
  "rojo naranja",
  "naranja",
  "ámbar",
  "amarillo",
  "lima",
  "verde",
  "verde cian",
  "cian",
  "cerúleo",
  "azul",
  "violeta",
  "magenta",
  "fucsia",
  "granate",
  "caoba",
  "marrón",
  "marrón dorado",
  "oliva",
  "palta",
  "verde estándar",
  "esmeralda",
  "cerceta",
  "añil",
  "azul marino",
  "azul púrpura",
  "púrpura",
  "vino",
  "lacre",
  "cobre",
  "canela",
  "dorado",
  "chartreuse",
  "verde manzana",
  "verde bosque",
  "verde mar",
  "turquesa",
  "azul acero",
  "zafiro",
  "amatista",
  "purpúreo",
  "fandango",
  "coral",
  "salmón",
  "melón",
  "crema",
  "maíz",
  "té verde",
  "verde claro",
  "menta",
  "aguamarina",
  "celeste",
  "bígaro",
  "lavanda",
  "malva",
  "rosa",
  "negro",
  "azabache",
  "plomo",
  "gris acorazado",
  "gris",
  "plata",
  "ceniza",
  "platino",
  "blanco",
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

// Calido / Amistad

const caSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "superior"
);

const caSuperiorMapa = caSuperior.map((nombre) => nombre.nombre);

const caInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "inferior"
);

const caInferiorMapa = caInferior.map((nombre) => nombre.nombre);

const caCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "calzados"
);

const caCalzadoMapa = caCalzado.map((nombre) => nombre.nombre);

const caAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "accesorios"
);

const caAccesoriosMapa = caAccesorios.map((nombre) => nombre.nombre);

var randomTopCA =
  caSuperiorMapa[Math.floor(Math.random() * caSuperiorMapa.length)];
var randomBottomCA =
  caInferiorMapa[Math.floor(Math.random() * caInferiorMapa.length)];
var randomShoesCA =
  caCalzadoMapa[Math.floor(Math.random() * caCalzadoMapa.length)];
var randomPropCA =
  caAccesoriosMapa[Math.floor(Math.random() * caAccesoriosMapa.length)];

// Calido / Club

const ccSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "superior"
);

const ccSuperiorMapa = ccSuperior.map((nombre) => nombre.nombre);

const ccInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "inferior"
);

const ccInferiorMapa = ccInferior.map((nombre) => nombre.nombre);

const ccCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "calzados"
);

const ccCalzadoMapa = ccCalzado.map((nombre) => nombre.nombre);

const ccAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "accesorios"
);

const ccAccesoriosMapa = ccAccesorios.map((nombre) => nombre.nombre);

var randomTopCC =
  ccSuperiorMapa[Math.floor(Math.random() * ccSuperiorMapa.length)];
var randomBottomCC =
  ccInferiorMapa[Math.floor(Math.random() * ccInferiorMapa.length)];
var randomShoesCC =
  ccCalzadoMapa[Math.floor(Math.random() * ccCalzadoMapa.length)];
var randomPropCC =
  ccAccesoriosMapa[Math.floor(Math.random() * ccAccesoriosMapa.length)];

// Calido / Familia

const cfSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "superior"
);

const cfSuperiorMapa = cfSuperior.map((nombre) => nombre.nombre);

const cfInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "inferior"
);

const cfInferiorMapa = cfInferior.map((nombre) => nombre.nombre);

const cfCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "calzados"
);

const cfCalzadoMapa = cfCalzado.map((nombre) => nombre.nombre);

const cfAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "accesorios"
);

const cfAccesoriosMapa = cfAccesorios.map((nombre) => nombre.nombre);

var randomTopCF =
  cfSuperiorMapa[Math.floor(Math.random() * cfSuperiorMapa.length)];
var randomBottomCF =
  cfInferiorMapa[Math.floor(Math.random() * cfInferiorMapa.length)];
var randomShoesCF =
  cfCalzadoMapa[Math.floor(Math.random() * cfCalzadoMapa.length)];
var randomPropCF =
  cfAccesoriosMapa[Math.floor(Math.random() * cfAccesoriosMapa.length)];

// Calido / Laboral

const clSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "superior"
);

const clSuperiorMapa = clSuperior.map((nombre) => nombre.nombre);

const clInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "inferior"
);

const clInferiorMapa = clInferior.map((nombre) => nombre.nombre);

const clCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "calzados"
);

const clCalzadoMapa = clCalzado.map((nombre) => nombre.nombre);

const clAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "accesorios"
);

const clAccesoriosMapa = clAccesorios.map((nombre) => nombre.nombre);

var randomTopCL =
  clSuperiorMapa[Math.floor(Math.random() * clSuperiorMapa.length)];
var randomBottomCL =
  clInferiorMapa[Math.floor(Math.random() * clInferiorMapa.length)];
var randomShoesCL =
  clCalzadoMapa[Math.floor(Math.random() * clCalzadoMapa.length)];
var randomPropCL =
  clAccesoriosMapa[Math.floor(Math.random() * clAccesoriosMapa.length)];

// Calido / Bar

const cbSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "superior"
);

const cbSuperiorMapa = cbSuperior.map((nombre) => nombre.nombre);

const cbInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "inferior"
);

const cbInferiorMapa = cbInferior.map((nombre) => nombre.nombre);

const cbCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "calzados"
);

const cbCalzadoMapa = cbCalzado.map((nombre) => nombre.nombre);

const cbAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "calido" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "accesorios"
);

const cbAccesoriosMapa = cbAccesorios.map((nombre) => nombre.nombre);

var randomTopCB =
  cbSuperiorMapa[Math.floor(Math.random() * cbSuperiorMapa.length)];
var randomBottomCB =
  cbInferiorMapa[Math.floor(Math.random() * cbInferiorMapa.length)];
var randomShoesCB =
  cbCalzadoMapa[Math.floor(Math.random() * cbCalzadoMapa.length)];
var randomPropCB =
  cbAccesoriosMapa[Math.floor(Math.random() * cbAccesoriosMapa.length)];

// Templado / Romance

const trSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "superior"
);

const trSuperiorMapa = trSuperior.map((nombre) => nombre.nombre);

const trInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "inferior"
);

const trInferiorMapa = trInferior.map((nombre) => nombre.nombre);

const trCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "calzados"
);

const trCalzadoMapa = trCalzado.map((nombre) => nombre.nombre);

const trAcccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "accesorios"
);

const trAcccesoriosMapa = trAcccesorios.map((nombre) => nombre.nombre);

var randomTopTR =
  trSuperiorMapa[Math.floor(Math.random() * trSuperiorMapa.length)];
var randomBottomTR =
  trInferiorMapa[Math.floor(Math.random() * trInferiorMapa.length)];
var randomShoesTR =
  trCalzadoMapa[Math.floor(Math.random() * trCalzadoMapa.length)];
var randomPropTR =
  trAcccesoriosMapa[Math.floor(Math.random() * trAcccesoriosMapa.length)];

// Templado / Amistad

const taSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "superior"
);

const taSuperiorMapa = taSuperior.map((nombre) => nombre.nombre);

const taInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "inferior"
);

const taInferiorMapa = taInferior.map((nombre) => nombre.nombre);

const taCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "calzados"
);

const taCalzadoMapa = taCalzado.map((nombre) => nombre.nombre);

const taAcccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "accesorios"
);

const taAcccesoriosMapa = taAcccesorios.map((nombre) => nombre.nombre);

var randomTopTA =
  taSuperiorMapa[Math.floor(Math.random() * taSuperiorMapa.length)];
var randomBottomTA =
  taInferiorMapa[Math.floor(Math.random() * taInferiorMapa.length)];
var randomShoesTA =
  taCalzadoMapa[Math.floor(Math.random() * taCalzadoMapa.length)];
var randomPropTA =
  taAcccesoriosMapa[Math.floor(Math.random() * taAcccesoriosMapa.length)];

// Templado / Club

const tcSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "superior"
);

const tcSuperiorMapa = tcSuperior.map((nombre) => nombre.nombre);

const tcInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "inferior"
);

const tcInferiorMapa = tcInferior.map((nombre) => nombre.nombre);

const tcCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "calzados"
);

const tcCalzadoMapa = tcCalzado.map((nombre) => nombre.nombre);

const tcAcccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "accesorios"
);

const tcAcccesoriosMapa = tcAcccesorios.map((nombre) => nombre.nombre);

var randomTopTC =
  tcSuperiorMapa[Math.floor(Math.random() * tcSuperiorMapa.length)];
var randomBottomTC =
  tcInferiorMapa[Math.floor(Math.random() * tcInferiorMapa.length)];
var randomShoesTC =
  tcCalzadoMapa[Math.floor(Math.random() * tcCalzadoMapa.length)];
var randomPropTC =
  tcAcccesoriosMapa[Math.floor(Math.random() * tcAcccesoriosMapa.length)];

// Templado / Familia

const tfSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "superior"
);

const tfSuperiorMapa = tfSuperior.map((nombre) => nombre.nombre);

const tfInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "inferior"
);

const tfInferiorMapa = tfInferior.map((nombre) => nombre.nombre);

const tfCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "calzados"
);

const tfCalzadoMapa = tfCalzado.map((nombre) => nombre.nombre);

const tfAcccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "accesorios"
);

const tfAcccesoriosMapa = tfAcccesorios.map((nombre) => nombre.nombre);

var randomTopTF =
  tfSuperiorMapa[Math.floor(Math.random() * tfSuperiorMapa.length)];
var randomBottomTF =
  tfInferiorMapa[Math.floor(Math.random() * tfInferiorMapa.length)];
var randomShoesTF =
  tfCalzadoMapa[Math.floor(Math.random() * tfCalzadoMapa.length)];
var randomPropTF =
  tfAcccesoriosMapa[Math.floor(Math.random() * tfAcccesoriosMapa.length)];

// Templado / Laboral

const tlSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "superior"
);

const tlSuperiorMapa = tlSuperior.map((nombre) => nombre.nombre);

const tlInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "inferior"
);

const tlInferiorMapa = tlInferior.map((nombre) => nombre.nombre);

const tlCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "calzados"
);

const tlCalzadoMapa = tlCalzado.map((nombre) => nombre.nombre);

const tlAcccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "accesorios"
);

const tlAcccesoriosMapa = tlAcccesorios.map((nombre) => nombre.nombre);

var randomTopTL =
  tlSuperiorMapa[Math.floor(Math.random() * tlSuperiorMapa.length)];
var randomBottomTL =
  tlInferiorMapa[Math.floor(Math.random() * tlInferiorMapa.length)];
var randomShoesTL =
  tlCalzadoMapa[Math.floor(Math.random() * tlCalzadoMapa.length)];
var randomPropTL =
  tlAcccesoriosMapa[Math.floor(Math.random() * tlAcccesoriosMapa.length)];

// Templado / Bar

const tbSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "superior"
);

const tbSuperiorMapa = tbSuperior.map((nombre) => nombre.nombre);

const tbInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "inferior"
);

const tbInferiorMapa = tbInferior.map((nombre) => nombre.nombre);

const tbCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "calzados"
);

const tbCalzadoMapa = tbCalzado.map((nombre) => nombre.nombre);

const tbAcccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "templado" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "accesorios"
);

const tbAcccesoriosMapa = tbAcccesorios.map((nombre) => nombre.nombre);

var randomTopTB =
  tbSuperiorMapa[Math.floor(Math.random() * tbSuperiorMapa.length)];
var randomBottomTB =
  tbInferiorMapa[Math.floor(Math.random() * tbInferiorMapa.length)];
var randomShoesTB =
  tbCalzadoMapa[Math.floor(Math.random() * tbCalzadoMapa.length)];
var randomPropTB =
  tbAcccesoriosMapa[Math.floor(Math.random() * tbAcccesoriosMapa.length)];

// Frio / Romance

const frSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "superior"
);

const frSuperiorMapa = frSuperior.map((nombre) => nombre.nombre);

const frInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "inferior"
);

const frInferiorMapa = frInferior.map((nombre) => nombre.nombre);

const frCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "calzados"
);

const frCalzadoMapa = frCalzado.map((nombre) => nombre.nombre);

const frAbrigo = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "abrigo"
);

const frAbrigoMapa = frAbrigo.map((nombre) => nombre.nombre);

const frAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "romance" &&
    prenda.tipo === "accesorios"
);

const frAccesoriosMapa = frAccesorios.map((nombre) => nombre.nombre);

var randomTopFR =
  frSuperiorMapa[Math.floor(Math.random() * frSuperiorMapa.length)];
var randomBottomFR =
  frInferiorMapa[Math.floor(Math.random() * frInferiorMapa.length)];
var randomShoesFR =
  frCalzadoMapa[Math.floor(Math.random() * frCalzadoMapa.length)];
var randomCoatFR =
  frAbrigoMapa[Math.floor(Math.random() * frAbrigoMapa.length)];
var randomPropFR =
  frAccesoriosMapa[Math.floor(Math.random() * frAccesoriosMapa.length)];

// Frio / Amistad

const faSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "superior"
);

const faSuperiorMapa = faSuperior.map((nombre) => nombre.nombre);

const faInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "inferior"
);

const faInferiorMapa = faInferior.map((nombre) => nombre.nombre);

const faCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "calzados"
);

const faCalzadoMapa = faCalzado.map((nombre) => nombre.nombre);

const faAbrigo = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "abrigo"
);

const faAbrigoMapa = faAbrigo.map((nombre) => nombre.nombre);

const faAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "amistad" &&
    prenda.tipo === "accesorios"
);

const faAccesoriosMapa = faAccesorios.map((nombre) => nombre.nombre);

var randomTopFA =
  faSuperiorMapa[Math.floor(Math.random() * faSuperiorMapa.length)];
var randomBottomFA =
  faInferiorMapa[Math.floor(Math.random() * faInferiorMapa.length)];
var randomShoesFA =
  faCalzadoMapa[Math.floor(Math.random() * faCalzadoMapa.length)];
var randomCoatFA =
  faAbrigoMapa[Math.floor(Math.random() * faAbrigoMapa.length)];
var randomPropFA =
  faAccesoriosMapa[Math.floor(Math.random() * faAccesoriosMapa.length)];

// Frio / Club

const fcSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "superior"
);

const fcSuperiorMapa = fcSuperior.map((nombre) => nombre.nombre);

const fcInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "inferior"
);

const fcInferiorMapa = fcInferior.map((nombre) => nombre.nombre);

const fcCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "calzados"
);

const fcCalzadoMapa = fcCalzado.map((nombre) => nombre.nombre);

const fcAbrigo = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "abrigo"
);

const fcAbrigoMapa = fcAbrigo.map((nombre) => nombre.nombre);

const fcAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "club" &&
    prenda.tipo === "accesorios"
);

const fcAccesoriosMapa = fcAccesorios.map((nombre) => nombre.nombre);

var randomTopFC =
  fcSuperiorMapa[Math.floor(Math.random() * fcSuperiorMapa.length)];
var randomBottomFC =
  fcInferiorMapa[Math.floor(Math.random() * fcInferiorMapa.length)];
var randomShoesFC =
  fcCalzadoMapa[Math.floor(Math.random() * fcCalzadoMapa.length)];
var randomCoatFC =
  fcAbrigoMapa[Math.floor(Math.random() * fcAbrigoMapa.length)];
var randomPropFC =
  fcAccesoriosMapa[Math.floor(Math.random() * fcAccesoriosMapa.length)];

// Frio / Familia

const ffSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "superior"
);

const ffSuperiorMapa = ffSuperior.map((nombre) => nombre.nombre);

const ffInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "inferior"
);

const ffInferiorMapa = ffInferior.map((nombre) => nombre.nombre);

const ffCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "calzados"
);

const ffCalzadoMapa = ffCalzado.map((nombre) => nombre.nombre);

const ffAbrigo = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "abrigo"
);

const ffAbrigoMapa = ffAbrigo.map((nombre) => nombre.nombre);

const ffAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "familia" &&
    prenda.tipo === "accesorios"
);

const ffAccesoriosMapa = ffAccesorios.map((nombre) => nombre.nombre);

var randomTopFF =
  ffSuperiorMapa[Math.floor(Math.random() * ffSuperiorMapa.length)];
var randomBottomFF =
  ffInferiorMapa[Math.floor(Math.random() * ffInferiorMapa.length)];
var randomShoesFF =
  ffCalzadoMapa[Math.floor(Math.random() * ffCalzadoMapa.length)];
var randomCoatFF =
  ffAbrigoMapa[Math.floor(Math.random() * ffAbrigoMapa.length)];
var randomPropFF =
  ffAccesoriosMapa[Math.floor(Math.random() * ffAccesoriosMapa.length)];

// Frio / Laboral

const flSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "superior"
);

const flSuperiorMapa = flSuperior.map((nombre) => nombre.nombre);

const flInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "inferior"
);

const flInferiorMapa = flInferior.map((nombre) => nombre.nombre);

const flCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "calzados"
);

const flCalzadoMapa = flCalzado.map((nombre) => nombre.nombre);

const flAbrigo = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "abrigo"
);

const flAbrigoMapa = flAbrigo.map((nombre) => nombre.nombre);

const flAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "laboral" &&
    prenda.tipo === "accesorios"
);

const flAccesoriosMapa = flAccesorios.map((nombre) => nombre.nombre);

var randomTopFL =
  flSuperiorMapa[Math.floor(Math.random() * flSuperiorMapa.length)];
var randomBottomFL =
  flInferiorMapa[Math.floor(Math.random() * flInferiorMapa.length)];
var randomShoesFL =
  flCalzadoMapa[Math.floor(Math.random() * flCalzadoMapa.length)];
var randomCoatFL =
  flAbrigoMapa[Math.floor(Math.random() * flAbrigoMapa.length)];
var randomPropFL =
  flAccesoriosMapa[Math.floor(Math.random() * flAccesoriosMapa.length)];

// Frio / Bar

const fbSuperior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "superior"
);

const fbSuperiorMapa = fbSuperior.map((nombre) => nombre.nombre);

const fbInferior = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "inferior"
);

const fbInferiorMapa = fbInferior.map((nombre) => nombre.nombre);

const fbCalzado = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "calzados"
);

const fbCalzadoMapa = fbCalzado.map((nombre) => nombre.nombre);

const fbAbrigo = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "abrigo"
);

const fbAbrigoMapa = fbAbrigo.map((nombre) => nombre.nombre);

const fbAccesorios = prendasRopa.filter(
  (prenda) =>
    prenda.clima === "frio" &&
    prenda.ocasion === "bar" &&
    prenda.tipo === "accesorios"
);

const fbAccesoriosMapa = fbAccesorios.map((nombre) => nombre.nombre);

var randomTopFB =
  fbSuperiorMapa[Math.floor(Math.random() * fbSuperiorMapa.length)];
var randomBottomFB =
  fbInferiorMapa[Math.floor(Math.random() * fbInferiorMapa.length)];
var randomShoesFB =
  fbCalzadoMapa[Math.floor(Math.random() * fbCalzadoMapa.length)];
var randomCoatFB =
  fbAbrigoMapa[Math.floor(Math.random() * fbAbrigoMapa.length)];
var randomPropFB =
  fbAccesoriosMapa[Math.floor(Math.random() * fbAccesoriosMapa.length)];

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
}
