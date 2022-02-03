/**
 * @challenge: TERCERA PRE-ENTREGA DEL PROYECTO FINAL
Deberás incorporar jQuery para controlar elementos, sumar efectos y animaciones, así como optimizar diseño HTML y CSS, en función de la tercera entrega de tu proyecto final.
 *
 * @version : 1.12.0
 * @author : Trinidad Margni
 * @fecha : 17/01/2021
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
 *  - v1.11.0 – Primera entrega de: AJAX EN TU PROYECTO
 *  - v1.12.0 – Primera entrega de: TERCERA PRE-ENTREGA DEL PROYECTO FINAL
 *  - v2.00.0 – ENTREGA DEL PROYECTO FINAL
 */

//--------------------- Presentation and first steps

let userName = localStorage.getItem("Name");
let userNameExists = userName !== null;
let showingPreviousOutfits = false;

$(document).ready(function () {
  console.log("Doc is ready");

  // If there is an existing user then...
  if (userNameExists) {
    $("#initialize-button").attr("class", "hidden");
    $("#new-outfit-button").removeClass("hidden");
  }
  // If there is not an existing user then, do nothing...
});

//--------------------- It starts the process for new users

$("#initialize-button").click(function () {
  $("#form-name").show("fast");
  $("#presentation").hide("fast");
});

$("#send-new-user").click(function setNameAndGiveOptions(event) {
  event.preventDefault();
  let userName = document.getElementById("input-name").value;
  localStorage.setItem("Name", userName);

  // Brings values back:
  localStorage.getItem("Name", userName);

  // It creates a new element:
  $("#hello-user").append(`
      <div class="d-flex justify-content-center">
        <h2 id="title">Hello ${userName}, let's create an awesome outfit for you!</h2>
      </div>`);

  // It removes/hides previous items:
  $("#form-name").hide("fast");
  $("#new-outfit-button").hide("fast");

  // It shows hidden elements:
  $("#generator-process").slideDown("fast");
  $("#back-to-start").show("fast");
});

//--------------------- It starts the process for existent users

$("#new-outfit-button").click(function welcomeUser(event) {
  event.preventDefault();

  // Brings values back:
  localStorage.getItem("Name", userName);

  // It creates a new element:
  $("#hello-user").append(`
    <div class="d-flex justify-content-center">
      <h2 id="title">Hello ${userName}, let's create an awesome outfit for you!</h2>
    </div>`);

  // It removes/hides previous items:
  $("#form-name").hide("fast");
  $("#new-outfit-button").hide("fast");
  $("#presentation").hide("fast");

  // It shows hidden elements:
  $("#generator-process").slideDown("fast");
  $("#back-to-start").show("fast");
});

//--------------------- Option: "Based on a recomendation"

$("#recomendation-option").click(function recommendToUser(event) {
  event.preventDefault;

  // It changes the title:
  $("#title").text(`Generacion de outfit: por recomendacion`);

  // It removes/hides previous items:
  $("#generator-process").slideUp("fast");

  // It shows hidden elements:
  $("#second-generator-process").slideDown("fast");
});

//--------------------- Filters, maps and randoms to provide a result

function returnRandomName(mapa) {
  const someClothing = mapa[Math.floor(Math.random() * mapa.length)];
  return someClothing.name;
}

function getClothingByCaracteristics(weather, ocassion, type) {
  return allClothings.filter(
    (clothing) =>
      clothing.weather.includes(weather) &&
      clothing.ocassion.includes(ocassion) &&
      clothing.type === type
  );
}

// WARM / ROMANTIC

const warmRomanticTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.TOP
);
const warmRomanticBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.BOTTOM
);
const warmRomanticShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.SHOES
);
const warmRomanticProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.PROP
);
const warmRomanticTopRandom = returnRandomName(warmRomanticTop);
const warmRomanticBottomRandom = returnRandomName(warmRomanticBottom);
const warmRomanticShoesRandom = returnRandomName(warmRomanticShoes);
const warmRomanticPropRandom = returnRandomName(warmRomanticProp);

// WARM / FRIENDS

const warmFriendsTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.TOP
);
const warmFriendsBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.BOTTOM
);
const warmFriendsShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.SHOES
);
const warmFriendsProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.PROP
);
const warmFriendsTopRandom = returnRandomName(warmFriendsTop);
const warmFriendsBottomRandom = returnRandomName(warmFriendsBottom);
const warmFriendsShoesRandom = returnRandomName(warmFriendsShoes);
const warmFriendsPropRandom = returnRandomName(warmFriendsProp);

// WARM / CLUB

const warmClubTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.TOP
);
const warmClubBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.BOTTOM
);
const warmClubShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.SHOES
);
const warmClubProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.PROP
);
const warmClubTopRandom = returnRandomName(warmClubTop);
const warmClubBottomRandom = returnRandomName(warmClubBottom);
const warmClubShoesRandom = returnRandomName(warmClubShoes);
const warmClubPropRandom = returnRandomName(warmClubProp);

// WARM / FAMILY

const warmFamilyTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.TOP
);
const warmFamilyBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.BOTTOM
);
const warmFamilyShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.SHOES
);
const warmFamilyProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.PROP
);
const warmFamilyTopRandom = returnRandomName(warmFamilyTop);
const warmFamilyBottomRandom = returnRandomName(warmFamilyBottom);
const warmFamilyShoesRandom = returnRandomName(warmFamilyShoes);
const warmFamilyPropRandom = returnRandomName(warmFamilyProp);

// WARM / BUSINESS

const warmBusinessTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.TOP
);
const warmBusinessBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.BOTTOM
);
const warmBusinessShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.SHOES
);
const warmBusinessProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.PROP
);
const warmBusinessTopRandom = returnRandomName(warmBusinessTop);
const warmBusinessBottomRandom = returnRandomName(warmBusinessBottom);
const warmBusinessShoesRandom = returnRandomName(warmBusinessShoes);
const warmBusinessPropRandom = returnRandomName(warmBusinessProp);

// WARM / BAR

const warmBarTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.TOP
);
const warmBarBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.BOTTOM
);
const warmBarShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.SHOES
);
const warmBarProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.WARM,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.PROP
);
const warmBarTopRandom = returnRandomName(warmBarTop);
const warmBarBottomRandom = returnRandomName(warmBarBottom);
const warmBarShoesRandom = returnRandomName(warmBarShoes);
const warmBarPropRandom = returnRandomName(warmBarProp);

// MILD / ROMANTIC

const mildRomanticTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.TOP
);
const mildRomanticBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.BOTTOM
);
const mildRomanticShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.SHOES
);
const mildRomanticCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.COAT
);
const mildRomanticProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.PROP
);
const mildRomanticTopRandom = returnRandomName(mildRomanticTop);
const mildRomanticBottomRandom = returnRandomName(mildRomanticBottom);
const mildRomanticShoesRandom = returnRandomName(mildRomanticShoes);
const mildRomanticCoatRandom = returnRandomName(mildRomanticCoat);
const mildRomanticPropRandom = returnRandomName(mildRomanticProp);

// MILD / FRIENDS

const mildFriendsTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.TOP
);
const mildFriendsBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.BOTTOM
);
const mildFriendsShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.SHOES
);
const mildFriendsCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.COAT
);
const mildFriendsProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.PROP
);
const mildFriendsTopRandom = returnRandomName(mildFriendsTop);
const mildFriendsBottomRandom = returnRandomName(mildFriendsBottom);
const mildFriendsShoesRandom = returnRandomName(mildFriendsShoes);
const mildFriendsCoatRandom = returnRandomName(mildFriendsCoat);
const mildFriendsPropRandom = returnRandomName(mildFriendsProp);

// MILD / CLUB

const mildClubTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.TOP
);
const mildClubBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.BOTTOM
);
const mildClubShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.SHOES
);
const mildClubCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.COAT
);
const mildClubProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.PROP
);
const mildClubTopRandom = returnRandomName(mildClubTop);
const mildClubBottomRandom = returnRandomName(mildClubBottom);
const mildClubShoesRandom = returnRandomName(mildClubShoes);
const mildClubCoatRandom = returnRandomName(mildClubCoat);
const mildClubPropRandom = returnRandomName(mildClubProp);

// MILD / FAMILY

const mildFamilyTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.TOP
);
const mildFamilyBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.BOTTOM
);
const mildFamilyShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.SHOES
);
const mildFamilyCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.COAT
);
const mildFamilyProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.PROP
);
const mildFamilyTopRandom = returnRandomName(mildFamilyTop);
const mildFamilyBottomRandom = returnRandomName(mildFamilyBottom);
const mildFamilyShoesRandom = returnRandomName(mildFamilyShoes);
const mildFamilyCoatRandom = returnRandomName(mildFamilyCoat);
const mildFamilyPropRandom = returnRandomName(mildFamilyProp);

// MILD / BUSINESS

const mildBusinessTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.TOP
);
const mildBusinessBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.BOTTOM
);
const mildBusinessShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.SHOES
);
const mildBusinessCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.COAT
);
const mildBusinessProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.PROP
);
const mildBusinessTopRandom = returnRandomName(mildBusinessTop);
const mildBusinessBottomRandom = returnRandomName(mildBusinessBottom);
const mildBusinessShoesRandom = returnRandomName(mildBusinessShoes);
const mildBusinessCoatRandom = returnRandomName(mildBusinessCoat);
const mildBusinessPropRandom = returnRandomName(mildBusinessProp);

// MILD / BAR

const mildBarTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.TOP
);
const mildBarBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.BOTTOM
);
const mildBarShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.SHOES
);
const mildBarCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.COAT
);
const mildBarProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.MILD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.PROP
);
const mildBarTopRandom = returnRandomName(mildBarTop);
const mildBarBottomRandom = returnRandomName(mildBarBottom);
const mildBarShoesRandom = returnRandomName(mildBarShoes);
const mildBarCoatRandom = returnRandomName(mildBarCoat);
const mildBarPropRandom = returnRandomName(mildBarProp);

// COLD / ROMANTIC

const coldRomanticTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.TOP
);
const coldRomanticBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.BOTTOM
);
const coldRomanticShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.SHOES
);
const coldRomanticCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.COAT
);
const coldRomanticProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.ROMANTIC,
  TYPES_OF_CLOTHING.PROP
);
const coldRomanticTopRandom = returnRandomName(coldRomanticTop);
const coldRomanticBottomRandom = returnRandomName(coldRomanticBottom);
const coldRomanticShoesRandom = returnRandomName(coldRomanticShoes);
const coldRomanticCoatRandom = returnRandomName(coldRomanticCoat);
const coldRomanticPropRandom = returnRandomName(coldRomanticProp);

// COLD / FRIENDS

const coldFriendsTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.TOP
);
const coldFriendsBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.BOTTOM
);
const coldFriendsShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.SHOES
);
const coldFriendsCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.COAT
);
const coldFriendsProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FRIENDS,
  TYPES_OF_CLOTHING.PROP
);
const coldFriendsTopRandom = returnRandomName(coldFriendsTop);
const coldFriendsBottomRandom = returnRandomName(coldFriendsBottom);
const coldFriendsShoesRandom = returnRandomName(coldFriendsShoes);
const coldFriendsCoatRandom = returnRandomName(coldFriendsCoat);
const coldFriendsPropRandom = returnRandomName(coldFriendsProp);

// COLD / CLUB

const coldClubTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.TOP
);
const coldClubBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.BOTTOM
);
const coldClubShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.SHOES
);
const coldClubCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.COAT
);
const coldClubProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.CLUB,
  TYPES_OF_CLOTHING.PROP
);
const coldClubTopRandom = returnRandomName(coldClubTop);
const coldClubBottomRandom = returnRandomName(coldClubBottom);
const coldClubShoesRandom = returnRandomName(coldClubShoes);
const coldClubCoatRandom = returnRandomName(coldClubCoat);
const coldClubPropRandom = returnRandomName(coldClubProp);

// COLD / FAMILY

const coldFamilyTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.TOP
);
const coldFamilyBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.BOTTOM
);
const coldFamilyShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.SHOES
);
const coldFamilyCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.COAT
);
const coldFamilyProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.FAMILY,
  TYPES_OF_CLOTHING.PROP
);
const coldFamilyTopRandom = returnRandomName(coldFamilyTop);
const coldFamilyBottomRandom = returnRandomName(coldFamilyBottom);
const coldFamilyShoesRandom = returnRandomName(coldFamilyShoes);
const coldFamilyCoatRandom = returnRandomName(coldFamilyCoat);
const coldFamilyPropRandom = returnRandomName(coldFamilyProp);

// COLD / BUSINESS

const coldBusinessTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.TOP
);
const coldBusinessBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.BOTTOM
);
const coldBusinessShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.SHOES
);
const coldBusinessCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.COAT
);
const coldBusinessProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BUSINESS,
  TYPES_OF_CLOTHING.PROP
);
const coldBusinessTopRandom = returnRandomName(coldBusinessTop);
const coldBusinessBottomRandom = returnRandomName(coldBusinessBottom);
const coldBusinessShoesRandom = returnRandomName(coldBusinessShoes);
const coldBusinessCoatRandom = returnRandomName(coldBusinessCoat);
const coldBusinessPropRandom = returnRandomName(coldBusinessProp);

// COLD / BAR

const coldBarTop = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.TOP
);
const coldBarBottom = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.BOTTOM
);
const coldBarShoes = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.SHOES
);
const coldBarCoat = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.COAT
);
const coldBarProp = getClothingByCaracteristics(
  TYPES_OF_TEMPERATURES.COLD,
  TYPES_OF_OCASSIONS.BAR,
  TYPES_OF_CLOTHING.PROP
);
const coldBarTopRandom = returnRandomName(coldBarTop);
const coldBarBottomRandom = returnRandomName(coldBarBottom);
const coldBarShoesRandom = returnRandomName(coldBarShoes);
const coldBarCoatRandom = returnRandomName(coldBarCoat);
const coldBarPropRandom = returnRandomName(coldBarProp);

//--------------------- Conditionals and outfit generations

$("#secondary-button").click(function botonSecundario(event) {
  event.preventDefault();

  // Brings values back:
  let situationSelected = document.getElementById("situation").value;
  let weatherSelected = document.getElementById("weather").value;

  // It changes the title:
  $("#title").text(`It's all set!`);

  // It removes/hides previous items:
  $("#second-generator-process").hide("fast");

  // It creates a new element:

  $("#process-results").append(`
  <div class="d-flex justify-content-center align-items-center flex-column resultados">
  <p>You have chosen a situation of ${situationSelected} in a weather that is ${weatherSelected}. Now you can see your new outfit:</p> 
  <div id="outfit-block")>
  </div>
  </div>`);

  //--------------------- It gives you back the outfit

  function showRecommendedOutfit(top, bottom, shoes, prop, coat) {
    $("#outfit-block").append(`
      <div class="finalResult">
      <h2>Your outfit is going to be ${top} with ${bottom} and ${shoes}. Accompanying with ${prop}${coat === undefined ? "." : ` and ${coat}`}</h2>
        <div class="outfitImages">
          <img class="clothes" src="/img/${top}.jpg"/>
          <img class="clothes" src="/img/${bottom}.jpg"/>
          <img class="clothes" src="/img/${shoes}.jpg"/>
          <img class="clothes" src="/img/${prop}.jpg"/>
          ${
            coat === undefined
              ? ""
              : `<img class="clothes" src="/img/${coat}.jpg"/>`
          }
        </div>
      </div>
      `);

    let actualOutfit = {
      top,
      bottom,
      shoes,
      prop,
    };

    if (coat !== undefined) {
      actualOutfit.coat = coat;
    }

    let thereArePreviousOutfits = localStorage.getItem("previousOutfits");

    if (thereArePreviousOutfits !== null) {
      let previousOutfits = JSON.parse(localStorage.getItem("previousOutfits"));
      previousOutfits.unshift(actualOutfit);
      localStorage.setItem("previousOutfits", JSON.stringify(previousOutfits));
    } else {
      let previousOutfits = [];
      previousOutfits.unshift(actualOutfit);
      localStorage.setItem("previousOutfits", JSON.stringify(previousOutfits));
    }

    generateLastOutfit(actualOutfit);
    $("#palette-section").slideDown("fast");
  }

  if (weatherSelected === "warm" && situationSelected === "romantic") {
    showRecommendedOutfit(
      warmRomanticTopRandom,
      warmRomanticBottomRandom,
      warmRomanticShoesRandom,
      warmRomanticPropRandom
    );
  } else if (weatherSelected === "warm" && situationSelected === "friends") {
    showRecommendedOutfit(
      warmFriendsTopRandom,
      warmFriendsBottomRandom,
      warmFriendsShoesRandom,
      warmFriendsPropRandom
    );
  } else if (weatherSelected === "warm" && situationSelected === "club") {
    showRecommendedOutfit(
      warmClubTopRandom,
      warmClubBottomRandom,
      warmClubShoesRandom,
      warmClubPropRandom
    );
  } else if (weatherSelected === "warm" && situationSelected === "family") {
    showRecommendedOutfit(
      warmFamilyTopRandom,
      warmFamilyBottomRandom,
      warmFamilyShoesRandom,
      warmFamilyPropRandom
    );
  } else if (weatherSelected === "warm" && situationSelected === "business") {
    showRecommendedOutfit(
      warmBusinessTopRandom,
      warmBusinessBottomRandom,
      warmBusinessShoesRandom,
      warmBusinessPropRandom
    );
  } else if (weatherSelected === "warm" && situationSelected === "bar") {
    showRecommendedOutfit(
      warmBarTopRandom,
      warmBarBottomRandom,
      warmBarShoesRandom,
      warmBarPropRandom
    );
  } else if (weatherSelected === "mild" && situationSelected === "romantic") {
    showRecommendedOutfit(
      mildRomanticTopRandom,
      mildRomanticBottomRandom,
      mildRomanticShoesRandom,
      mildRomanticPropRandom
    );
  } else if (weatherSelected === "mild" && situationSelected === "friends") {
    showRecommendedOutfit(
      mildFriendsTopRandom,
      mildFriendsBottomRandom,
      mildFriendsShoesRandom,
      mildFriendsPropRandom
    );
  } else if (weatherSelected === "mild" && situationSelected === "club") {
    showRecommendedOutfit(
      mildClubTopRandom,
      mildClubBottomRandom,
      mildClubShoesRandom,
      mildClubPropRandom
    );
  } else if (weatherSelected === "mild" && situationSelected === "family") {
    showRecommendedOutfit(
      mildFamilyTopRandom,
      mildFamilyBottomRandom,
      mildFamilyShoesRandom,
      mildFamilyPropRandom
    );
  } else if (weatherSelected === "mild" && situationSelected === "business") {
    showRecommendedOutfit(
      mildBusinessTopRandom,
      mildBusinessBottomRandom,
      mildBusinessShoesRandom,
      mildBusinessPropRandom
    );
  } else if (weatherSelected === "mild" && situationSelected === "bar") {
    showRecommendedOutfit(
      mildBarTopRandom,
      mildBarBottomRandom,
      mildBarShoesRandom,
      mildBarPropRandom
    );
  } else if (weatherSelected === "cold" && situationSelected === "romantic") {
    showRecommendedOutfit(
      coldRomanticTopRandom,
      coldRomanticBottomRandom,
      coldRomanticShoesRandom,
      coldRomanticPropRandom,
      coldRomanticCoatRandom
    );
  } else if (weatherSelected === "cold" && situationSelected === "friends") {
    showRecommendedOutfit(
      coldFriendsTopRandom,
      coldFriendsBottomRandom,
      coldFriendsShoesRandom,
      coldFriendsPropRandom,
      coldFriendsCoatRandom
    );
  } else if (weatherSelected === "cold" && situationSelected === "club") {
    showRecommendedOutfit(
      coldClubTopRandom,
      coldClubBottomRandom,
      coldClubShoesRandom,
      coldClubPropRandom,
      coldClubCoatRandom
    );
  } else if (weatherSelected === "cold" && situationSelected === "family") {
    showRecommendedOutfit(
      coldFamilyTopRandom,
      coldFamilyBottomRandom,
      coldFamilyShoesRandom,
      coldFamilyPropRandom,
      coldFamilyCoatRandom
    );
  } else if (weatherSelected === "cold" && situationSelected === "business") {
    showRecommendedOutfit(
      coldBusinessTopRandom,
      coldBusinessBottomRandom,
      coldBusinessShoesRandom,
      coldBusinessPropRandom,
      coldBusinessCoatRandom
    );
  } else if (weatherSelected === "cold" && situationSelected === "bar") {
    showRecommendedOutfit(
      coldBarTopRandom,
      coldBarBottomRandom,
      coldBarShoesRandom,
      coldBarPropRandom,
      coldBarCoatRandom
    );
  } else {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Sorry, due to an internal error we couldn't find a match. Try again</h2>
    </div>
    `);
  }
});

//--------------------- It shows your previous outfits

generateOutfit();

function generateLastOutfit(outfit) {
  $("#previous-outfits-list").prepend(`
  <li>
    Outfit: ${outfit.top} +  ${outfit.bottom} + ${outfit.shoes} + ${outfit.prop}
  </li>
  <img class="previousClothes" src="/img/${outfit.top}.jpg"/>
  <img class="previousClothes" src="/img/${outfit.bottom}.jpg"/>
  <img class="previousClothes" src="/img/${outfit.shoes}.jpg"/>
  <img class="previousClothes" src="/img/${outfit.prop}.jpg"/>
`);
}

function generateOutfit(event) {
  const previousOutfits = JSON.parse(localStorage.getItem("previousOutfits"));
  previousOutfits.forEach((outfit) => {
    $("#previous-outfits-list").append(`
    <li>
      Outfit: ${outfit.top} +  ${outfit.bottom} + ${outfit.shoes} + ${outfit.prop}
    </li>
  <img class="previousClothes" src="/img/${outfit.top}.jpg"/>
  <img class="previousClothes" src="/img/${outfit.bottom}.jpg"/>
  <img class="previousClothes" src="/img/${outfit.shoes}.jpg"/>
  <img class="previousClothes" src="/img/${outfit.prop}.jpg"/>
  `);
  });
}

$("#previous-outfits-button").click(function () {
  if (showingPreviousOutfits === false) {
    $("#previous-outfits").slideDown("fast");
    showingPreviousOutfits = true;
  } else {
    $("#previous-outfits").slideUp("fast");
    showingPreviousOutfits = false;
  }
});

$("#previous-outfits-hide").click(function () {
  $("#previous-outfits").slideUp("fast");
});

//--------------------- Color palette option & API

let apiURL = "https://www.colr.org/json/schemes/random/1";
let colorPalette = [];

$.ajax({
  method: "GET",
  dataType: "json",
  url: apiURL,
  crossDomain: true,
  success: function (respuesta) {
    let colors = respuesta.schemes[0].colors;
    colorPalette.push(colors[0]);
    colorPalette.push(colors[1]);
    colorPalette.push(colors[2]);
    $("#generate-palette").click(() => {
      $("#outfit-palette").append(`
      <div class="paletteDiv" style="background-color: #${colors[0]}"></div>
      <div class="paletteDiv" style="background-color: #${colors[1]}"></div>
      <div class="paletteDiv" style="background-color: #${colors[2]}"></div>
    `);
      $("#generate-palette").attr("class", "hidden");
      $("#color-palette-title").text("Here is your new palette");
    });
  },
});
