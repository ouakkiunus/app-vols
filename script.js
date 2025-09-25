const translations = [
  "Trouver votre vol en 1 clic",
  "أعثر على رحلتك بضغط زر واحدة",
  "Find your flight in 1 click",
  "Encuentra tu vuelo en 1 clic",
  "Trova il tuo volo in 1 clic",
  "Finde deinen Flug mit 1 Klick"
];

let index = 0;
const textElement = document.getElementById("animated-text");

setInterval(() => {
  index = (index + 1) % translations.length;
  textElement.textContent = translations[index];
}, 5000);