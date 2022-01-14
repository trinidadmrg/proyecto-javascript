//--------------------- Presentation and first steps

let userName = localStorage.getItem("Name");
let userNameExists = userName !== null;

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

//--------------------- Objects to generate outfits

const TYPES_OF_CLOTHING = {
  TOP: "TOP",
  BOTTOM: "BOTTOM",
  SHOES: "SHOES",
  PROP: "PROP",
  COAT: "COAT",
};

const TYPES_OF_TEMPERATURES = {
  WARM: "WARM",
  MILD: "MILD",
  COLD: "COLD",
};

const TYPES_OF_OCASSIONS = {
  ROMANTIC: "ROMANTIC",
  FRIENDS: "FRIENDS",
  CLUB: "CLUB",
  FAMILY: "FAMILY",
  BUSINESS: "BUSINESS",
  BAR: "BAR",
};

const allClothings = [
  {
    name: "blouse",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
    ],
  },
  {
    name: "short sleeve t-shirt",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [TYPES_OF_OCASSIONS.FRIENDS, TYPES_OF_OCASSIONS.FAMILY],
  },
  {
    name: "tank top",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM],
    ocassion: [TYPES_OF_OCASSIONS.FRIENDS, TYPES_OF_OCASSIONS.FAMILY],
  },
  {
    name: "sleeveless bodysuit",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "crop top",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "strapless top",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "strappy blouse",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "short-sleeved shirt",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
    ],
  },
  {
    name: "long-sleeved shirt",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [TYPES_OF_OCASSIONS.BUSINESS],
  },
  {
    name: "long-sleeved bodysuit",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "long-sleeved t-shirt",
    type: TYPES_OF_CLOTHING.TOP,
    weather: [TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.BUSINESS,
    ],
  },
  {
    name: "skirt",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.BUSINESS,
    ],
  },
  {
    name: "short",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "mini skirt",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "bell bottom pants",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "capri pants",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
    ],
  },
  {
    name: "skinny jeans",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "palazzo pants",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
    ],
  },
  {
    name: "cargo pants",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [TYPES_OF_OCASSIONS.FRIENDS, TYPES_OF_OCASSIONS.FAMILY],
  },
  {
    name: "straight-leg pants",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "basic jeans",
    type: TYPES_OF_CLOTHING.BOTTOM,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "sweater",
    type: TYPES_OF_CLOTHING.COAT,
    weather: [TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "cardigan",
    type: TYPES_OF_CLOTHING.COAT,
    weather: [TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "montgomery",
    type: TYPES_OF_CLOTHING.COAT,
    weather: [TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "jacket",
    type: TYPES_OF_CLOTHING.COAT,
    weather: [TYPES_OF_TEMPERATURES.COLD],
    ocassion: [TYPES_OF_OCASSIONS.FRIENDS, TYPES_OF_OCASSIONS.FAMILY],
  },
  {
    name: "leather jacket",
    type: TYPES_OF_CLOTHING.COAT,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "beret",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "scarf",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "earrings",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "rings",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "necklace",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "belt",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "necktie",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [TYPES_OF_OCASSIONS.BUSINESS],
  },
  {
    name: "cap",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [TYPES_OF_OCASSIONS.FAMILY, TYPES_OF_OCASSIONS.FRIENDS],
  },
  {
    name: "hat",
    type: TYPES_OF_CLOTHING.PROP,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
    ],
  },
  {
    name: "high heel",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "platforms",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
      TYPES_OF_OCASSIONS.BUSINESS,
    ],
  },
  {
    name: "shoes",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [TYPES_OF_OCASSIONS.FRIENDS, TYPES_OF_OCASSIONS.FAMILY],
  },
  {
    name: "sandals",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
    ],
  },
  {
    name: "espadrilles",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [TYPES_OF_TEMPERATURES.WARM, TYPES_OF_TEMPERATURES.MILD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
    ],
  },
  {
    name: "boots",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [TYPES_OF_TEMPERATURES.MILD, TYPES_OF_TEMPERATURES.COLD],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "ankle boots",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [
      TYPES_OF_OCASSIONS.ROMANTIC,
      TYPES_OF_OCASSIONS.FRIENDS,
      TYPES_OF_OCASSIONS.FAMILY,
      TYPES_OF_OCASSIONS.BUSINESS,
      TYPES_OF_OCASSIONS.BAR,
      TYPES_OF_OCASSIONS.CLUB,
    ],
  },
  {
    name: "flip flops",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [TYPES_OF_TEMPERATURES.WARM],
    ocassion: [TYPES_OF_OCASSIONS.FRIENDS, TYPES_OF_OCASSIONS.FAMILY],
  },
  {
    name: "loafers",
    type: TYPES_OF_CLOTHING.SHOES,
    weather: [
      TYPES_OF_TEMPERATURES.WARM,
      TYPES_OF_TEMPERATURES.MILD,
      TYPES_OF_TEMPERATURES.COLD,
    ],
    ocassion: [TYPES_OF_OCASSIONS.ROMANTIC, TYPES_OF_OCASSIONS.BUSINESS],
  },
];

//--------------------- Filters, maps and randoms to provide a result

function returnRandomName(mapa) {
  const someClothing = mapa[Math.floor(Math.random() * mapa.length)];
  return someClothing.name;
}

// WARM / ROMANTIC

const warmRomanticTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const warmRomanticBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const warmRomanticShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const warmRomanticProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const warmRomanticTopRandom = returnRandomName(warmRomanticTop);
const warmRomanticBottomRandom = returnRandomName(warmRomanticBottom);
const warmRomanticShoesRandom = returnRandomName(warmRomanticShoes);
const warmRomanticPropRandom = returnRandomName(warmRomanticProp);

// WARM / FRIENDS

const warmFriendsTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const warmFriendsBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const warmFriendsShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const warmFriendsProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const warmFriendsTopRandom = returnRandomName(warmFriendsTop);
const warmFriendsBottomRandom = returnRandomName(warmFriendsBottom);
const warmFriendsShoesRandom = returnRandomName(warmFriendsShoes);
const warmFriendsPropRandom = returnRandomName(warmFriendsProp);

// WARM / CLUB

const warmClubTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const warmClubBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const warmClubShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const warmClubProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const warmClubTopRandom = returnRandomName(warmClubTop);
const warmClubBottomRandom = returnRandomName(warmClubBottom);
const warmClubShoesRandom = returnRandomName(warmClubShoes);
const warmClubPropRandom = returnRandomName(warmClubProp);

// WARM / FAMILY

const warmFamilyTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const warmFamilyBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const warmFamilyShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const warmFamilyProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const warmFamilyTopRandom = returnRandomName(warmFamilyTop);
const warmFamilyBottomRandom = returnRandomName(warmFamilyBottom);
const warmFamilyShoesRandom = returnRandomName(warmFamilyShoes);
const warmFamilyPropRandom = returnRandomName(warmFamilyProp);

// WARM / BUSINESS

const warmBusinessTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const warmBusinessBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const warmBusinessShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const warmBusinessProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const warmBusinessTopRandom = returnRandomName(warmBusinessTop);
const warmBusinessBottomRandom = returnRandomName(warmBusinessBottom);
const warmBusinessShoesRandom = returnRandomName(warmBusinessShoes);
const warmBusinessPropRandom = returnRandomName(warmBusinessProp);

// WARM / BAR

const warmBarTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const warmBarBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const warmBarShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const warmBarProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.WARM) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const warmBarTopRandom = returnRandomName(warmBarTop);
const warmBarBottomRandom = returnRandomName(warmBarBottom);
const warmBarShoesRandom = returnRandomName(warmBarShoes);
const warmBarPropRandom = returnRandomName(warmBarProp);

// MILD / ROMANTIC

const mildRomanticTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const mildRomanticBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const mildRomanticShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const mildRomanticCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const mildRomanticProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const mildRomanticTopRandom = returnRandomName(mildRomanticTop);
const mildRomanticBottomRandom = returnRandomName(mildRomanticBottom);
const mildRomanticShoesRandom = returnRandomName(mildRomanticShoes);
const mildRomanticCoatRandom = returnRandomName(mildRomanticCoat);
const mildRomanticPropRandom = returnRandomName(mildRomanticProp);

// MILD / FRIENDS

const mildFriendsTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const mildFriendsBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const mildFriendsShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const mildFriendsCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const mildFriendsProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const mildFriendsTopRandom = returnRandomName(mildFriendsTop);
const mildFriendsBottomRandom = returnRandomName(mildFriendsBottom);
const mildFriendsShoesRandom = returnRandomName(mildFriendsShoes);
const mildFriendsCoatRandom = returnRandomName(mildFriendsCoat);
const mildFriendsPropRandom = returnRandomName(mildFriendsProp);

// MILD / CLUB

const mildClubTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const mildClubBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const mildClubShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const mildClubCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const mildClubProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const mildClubTopRandom = returnRandomName(mildClubTop);
const mildClubBottomRandom = returnRandomName(mildClubBottom);
const mildClubShoesRandom = returnRandomName(mildClubShoes);
const mildClubCoatRandom = returnRandomName(mildClubCoat);
const mildClubPropRandom = returnRandomName(mildClubProp);

// MILD / FAMILY

const mildFamilyTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const mildFamilyBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const mildFamilyShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const mildFamilyCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const mildFamilyProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const mildFamilyTopRandom = returnRandomName(mildFamilyTop);
const mildFamilyBottomRandom = returnRandomName(mildFamilyBottom);
const mildFamilyShoesRandom = returnRandomName(mildFamilyShoes);
const mildFamilyCoatRandom = returnRandomName(mildFamilyCoat);
const mildFamilyPropRandom = returnRandomName(mildFamilyProp);

// MILD / BUSINESS

const mildBusinessTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const mildBusinessBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const mildBusinessShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const mildBusinessCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const mildBusinessProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const mildBusinessTopRandom = returnRandomName(mildBusinessTop);
const mildBusinessBottomRandom = returnRandomName(mildBusinessBottom);
const mildBusinessShoesRandom = returnRandomName(mildBusinessShoes);
const mildBusinessCoatRandom = returnRandomName(mildBusinessCoat);
const mildBusinessPropRandom = returnRandomName(mildBusinessProp);

// MILD / BAR

const mildBarTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const mildBarBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const mildBarShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const mildBarCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const mildBarProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.MILD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const mildBarTopRandom = returnRandomName(mildBarTop);
const mildBarBottomRandom = returnRandomName(mildBarBottom);
const mildBarShoesRandom = returnRandomName(mildBarShoes);
const mildBarCoatRandom = returnRandomName(mildBarCoat);
const mildBarPropRandom = returnRandomName(mildBarProp);

// COLD / ROMANTIC

const coldRomanticTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const coldRomanticBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const coldRomanticShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const coldRomanticCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const coldRomanticProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.ROMANTIC) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const coldRomanticTopRandom = returnRandomName(coldRomanticTop);
const coldRomanticBottomRandom = returnRandomName(coldRomanticBottom);
const coldRomanticShoesRandom = returnRandomName(coldRomanticShoes);
const coldRomanticCoatRandom = returnRandomName(coldRomanticCoat);
const coldRomanticPropRandom = returnRandomName(coldRomanticProp);

// COLD / FRIENDS

const coldFriendsTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const coldFriendsBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const coldFriendsShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const coldFriendsCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const coldFriendsProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FRIENDS) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const coldFriendsTopRandom = returnRandomName(coldFriendsTop);
const coldFriendsBottomRandom = returnRandomName(coldFriendsBottom);
const coldFriendsShoesRandom = returnRandomName(coldFriendsShoes);
const coldFriendsCoatRandom = returnRandomName(coldFriendsCoat);
const coldFriendsPropRandom = returnRandomName(coldFriendsProp);

// COLD / CLUB

const coldClubTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const coldClubBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const coldClubShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const coldClubCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const coldClubProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.CLUB) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const coldClubTopRandom = returnRandomName(coldClubTop);
const coldClubBottomRandom = returnRandomName(coldClubBottom);
const coldClubShoesRandom = returnRandomName(coldClubShoes);
const coldClubCoatRandom = returnRandomName(coldClubCoat);
const coldClubPropRandom = returnRandomName(coldClubProp);

// COLD / FAMILY

const coldFamilyTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const coldFamilyBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const coldFamilyShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const coldFamilyCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const coldFamilyProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.FAMILY) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const coldFamilyTopRandom = returnRandomName(coldFamilyTop);
const coldFamilyBottomRandom = returnRandomName(coldFamilyBottom);
const coldFamilyShoesRandom = returnRandomName(coldFamilyShoes);
const coldFamilyCoatRandom = returnRandomName(coldFamilyCoat);
const coldFamilyPropRandom = returnRandomName(coldFamilyProp);

// COLD / BUSINESS

const coldBusinessTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const coldBusinessBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const coldBusinessShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const coldBusinessCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const coldBusinessProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BUSINESS) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
);

const coldBusinessTopRandom = returnRandomName(coldBusinessTop);
const coldBusinessBottomRandom = returnRandomName(coldBusinessBottom);
const coldBusinessShoesRandom = returnRandomName(coldBusinessShoes);
const coldBusinessCoatRandom = returnRandomName(coldBusinessCoat);
const coldBusinessPropRandom = returnRandomName(coldBusinessProp);

// COLD / BAR

const coldBarTop = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.TOP
);
const coldBarBottom = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.BOTTOM
);
const coldBarShoes = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.SHOES
);
const coldBarCoat = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.COAT
);
const coldBarProp = allClothings.filter(
  (clothing) =>
    clothing.weather.includes(TYPES_OF_TEMPERATURES.COLD) &&
    clothing.ocassion.includes(TYPES_OF_OCASSIONS.BAR) &&
    clothing.type === TYPES_OF_CLOTHING.PROP
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

  if (weatherSelected === "warm" && situationSelected === "romantic") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${warmRomanticTopRandom} with ${warmRomanticBottomRandom} and ${warmRomanticShoesRandom}. Accompanying with ${warmRomanticPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${warmRomanticTopRandom}.jpg"/>
        <img class="clothes" src="/img/${warmRomanticBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${warmRomanticShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${warmRomanticPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      warmRomanticTopRandom,
      warmRomanticBottomRandom,
      warmRomanticShoesRandom,
      warmRomanticPropRandom,
    };
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
  } else if (weatherSelected === "warm" && situationSelected === "friends") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${warmFriendsTopRandom} with ${warmFriendsBottomRandom} and ${warmFriendsShoesRandom}. Accompanying with ${warmFriendsPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${warmFriendsTopRandom}.jpg"/>
        <img class="clothes" src="/img/${warmFriendsBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${warmFriendsShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${warmFriendsPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      warmFriendsTopRandom,
      warmFriendsBottomRandom,
      warmFriendsShoesRandom,
      warmFriendsPropRandom,
    };
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
  } else if (weatherSelected === "warm" && situationSelected === "club") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${warmClubTopRandom} with ${warmClubBottomRandom} and ${warmClubShoesRandom}. Accompanying with ${warmClubPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${warmClubTopRandom}.jpg"/>
        <img class="clothes" src="/img/${warmClubBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${warmClubShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${warmClubPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      warmClubTopRandom,
      warmClubBottomRandom,
      warmClubShoesRandom,
      warmClubPropRandom,
    };
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
  } else if (weatherSelected === "warm" && situationSelected === "family") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${warmFamilyTopRandom} with ${warmFamilyBottomRandom} and ${warmFamilyShoesRandom}. Accompanying with ${warmFamilyPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${warmFamilyTopRandom}.jpg"/>
        <img class="clothes" src="/img/${warmFamilyBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${warmFamilyShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${warmFamilyPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      warmFamilyTopRandom,
      warmFamilyBottomRandom,
      warmFamilyShoesRandom,
      warmFamilyPropRandom,
    };
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
  } else if (weatherSelected === "warm" && situationSelected === "business") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${warmBusinessTopRandom} with ${warmBusinessBottomRandom} and ${warmBusinessShoesRandom}. Accompanying with ${warmBusinessPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${warmBusinessTopRandom}.jpg"/>
        <img class="clothes" src="/img/${warmBusinessBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${warmBusinessShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${warmBusinessPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      warmBusinessTopRandom,
      warmBusinessBottomRandom,
      warmBusinessShoesRandom,
      warmBusinessPropRandom,
    };
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
  } else if (weatherSelected === "warm" && situationSelected === "bar") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${warmBarTopRandom} with ${warmBarBottomRandom} and ${warmBarShoesRandom}. Accompanying with ${warmBarPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${warmBarTopRandom}.jpg"/>
        <img class="clothes" src="/img/${warmBarBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${warmBarShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${warmBarPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      warmBarTopRandom,
      warmBarBottomRandom,
      warmBarShoesRandom,
      warmBarPropRandom,
    };
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
  } else if (weatherSelected === "mild" && situationSelected === "romantic") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${mildRomanticTopRandom} with ${mildRomanticBottomRandom} and ${mildRomanticShoesRandom}. Accompanying with ${mildRomanticPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${mildRomanticTopRandom}.jpg"/>
        <img class="clothes" src="/img/${mildRomanticBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${mildRomanticShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${mildRomanticPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      mildRomanticTopRandom,
      mildRomanticBottomRandom,
      mildRomanticShoesRandom,
      mildRomanticPropRandom,
    };
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
  } else if (weatherSelected === "mild" && situationSelected === "friends") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${mildFriendsTopRandom} with ${mildFriendsBottomRandom} and ${mildFriendsShoesRandom}. Accompanying with ${mildFriendsPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${mildFriendsTopRandom}.jpg"/>
        <img class="clothes" src="/img/${mildFriendsBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${mildFriendsShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${mildFriendsPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      mildFriendsTopRandom,
      mildFriendsBottomRandom,
      mildFriendsShoesRandom,
      mildFriendsPropRandom,
    };
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
  } else if (weatherSelected === "mild" && situationSelected === "club") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${mildClubTopRandom} with ${mildClubBottomRandom} and ${mildClubShoesRandom}. Accompanying with ${mildClubPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${mildClubTopRandom}.jpg"/>
        <img class="clothes" src="/img/${mildClubBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${mildClubShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${mildClubPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      mildClubTopRandom,
      mildClubBottomRandom,
      mildClubShoesRandom,
      mildClubPropRandom,
    };
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
  } else if (weatherSelected === "mild" && situationSelected === "family") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${mildFamilyTopRandom} with ${mildFamilyBottomRandom} and ${mildFamilyShoesRandom}. Accompanying with ${mildFamilyPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${mildFamilyTopRandom}.jpg"/>
        <img class="clothes" src="/img/${mildFamilyBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${mildFamilyShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${mildFamilyPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      mildFamilyTopRandom,
      mildFamilyBottomRandom,
      mildFamilyShoesRandom,
      mildFamilyPropRandom,
    };
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
  } else if (weatherSelected === "mild" && situationSelected === "business") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${mildBusinessTopRandom} with ${mildBusinessBottomRandom} and ${mildBusinessShoesRandom}. Accompanying with ${mildBusinessPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${mildBusinessTopRandom}.jpg"/>
        <img class="clothes" src="/img/${mildBusinessBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${mildBusinessShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${mildBusinessPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      mildBusinessTopRandom,
      mildBusinessBottomRandom,
      mildBusinessShoesRandom,
      mildBusinessPropRandom,
    };
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
  } else if (weatherSelected === "mild" && situationSelected === "bar") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${mildBarTopRandom} with ${mildBarBottomRandom} and ${mildBarShoesRandom}. Accompanying with ${mildBarPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${mildBarTopRandom}.jpg"/>
        <img class="clothes" src="/img/${mildBarBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${mildBarShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${mildBarPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      mildBarTopRandom,
      mildBarBottomRandom,
      mildBarShoesRandom,
      mildBarPropRandom,
    };
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
  } else if (weatherSelected === "cold" && situationSelected === "romantic") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${coldRomanticTopRandom} with ${coldRomanticBottomRandom} and ${coldRomanticShoesRandom}. Accompanying with ${coldRomanticCoatRandom} and ${coldRomanticPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${coldRomanticTopRandom}.jpg"/>
        <img class="clothes" src="/img/${coldRomanticBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${coldRomanticShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${coldRomanticCoatRandom}.jpg"/>
        <img class="clothes" src="/img/${coldRomanticPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      coldRomanticTopRandom,
      coldRomanticBottomRandom,
      coldRomanticShoesRandom,
      coldRomanticPropRandom,
    };
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
  } else if (weatherSelected === "cold" && situationSelected === "friends") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${coldFriendsTopRandom} with ${coldFriendsBottomRandom} and ${coldFriendsShoesRandom}. Accompanying with ${coldFriendsCoatRandom} and ${coldFriendsPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${coldFriendsTopRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFriendsBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFriendsShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFriendsCoatRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFriendsPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      coldFriendsTopRandom,
      coldFriendsBottomRandom,
      coldFriendsShoesRandom,
      coldFriendsPropRandom,
    };
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
  } else if (weatherSelected === "cold" && situationSelected === "club") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${coldClubTopRandom} with ${coldClubBottomRandom} and ${coldClubShoesRandom}. Accompanying with ${coldClubCoatRandom} and ${coldClubPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${coldClubTopRandom}.jpg"/>
        <img class="clothes" src="/img/${coldClubBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${coldClubShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${coldClubCoatRandom}.jpg"/>
        <img class="clothes" src="/img/${coldClubPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      coldClubTopRandom,
      coldClubBottomRandom,
      coldClubShoesRandom,
      coldClubPropRandom,
    };
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
  } else if (weatherSelected === "cold" && situationSelected === "family") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${coldFamilyTopRandom} with ${coldFamilyBottomRandom} and ${coldFamilyShoesRandom}. Accompanying with ${coldFamilyCoatRandom} and ${coldFamilyPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${coldFamilyTopRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFamilyBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFamilyShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFamilyCoatRandom}.jpg"/>
        <img class="clothes" src="/img/${coldFamilyPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      coldFamilyTopRandom,
      coldFamilyBottomRandom,
      coldFamilyShoesRandom,
      coldFamilyPropRandom,
    };
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
  } else if (weatherSelected === "cold" && situationSelected === "business") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${coldBusinessTopRandom} with ${coldBusinessBottomRandom} and ${coldBusinessShoesRandom}. Accompanying with ${coldBusinessCoatRandom} and ${coldBusinessPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${coldBusinessTopRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBusinessBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBusinessShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBusinessCoatRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBusinessPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      coldBusinessTopRandom,
      coldBusinessBottomRandom,
      coldBusinessShoesRandom,
      coldBusinessPropRandom,
    };
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
  } else if (weatherSelected === "cold" && situationSelected === "bar") {
    $("#outfit-block").append(`
    <div class="finalResult">
    <h2>Your outfit is going to be ${coldBarTopRandom} with ${coldBarBottomRandom} and ${coldBarShoesRandom}. Accompanying with ${coldBarCoatRandom} and ${coldBarPropRandom}</h2>
      <div class="outfitImages">
        <img class="clothes" src="/img/${coldBarTopRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBarBottomRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBarShoesRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBarCoatRandom}.jpg"/>
        <img class="clothes" src="/img/${coldBarPropRandom}.jpg"/>
      </div>
    </div>
    `);

    let actualOutfit = {
      coldBarTopRandom,
      coldBarBottomRandom,
      coldBarShoesRandom,
      coldBarPropRandom,
    };
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
    Outfit: ${outfit.randomTopCR} +  ${outfit.randomBottomCR} + ${outfit.randomShoesCR} + ${outfit.randomPropCR}
  </li>
`);
}

function generateOutfit(event) {
  const previousOutfits = JSON.parse(localStorage.getItem("previousOutfits"));
  previousOutfits.forEach((outfit) => {
    $("#previous-outfits-list").append(`
    <li>
      Outfit: ${outfit.randomTopCR} +  ${outfit.randomBottomCR} + ${outfit.randomShoesCR} + ${outfit.randomPropCR}
    </li>
  `);
  });
}

$("#previous-outfits-button").click(function () {
  $("#previous-outfits").slideDown("fast");
});

$("#previous-outfits-hide").click(function () {
  $("#previous-outfits").slideUp("fast");
});
