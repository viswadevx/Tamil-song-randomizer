// TAMIL SONG RANDOMIZER

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const songs = [
  "Hey Nijame",
  "Visiri",
  "Innum Konjam Neram",
  "Nilave Vaa",
  "Pularaadha",
  "Thaakuthe Kan Thaakuthe",
  "Unnal Unnal",
  "Aaruyire",
  "Kannukul Kannai",
  "Uyirey  Amaran",
  "Un Per Solla Aasaidhan",
  "Alai Payum Nenjile",
  "Needhane  U1",
  "Kelamal Kaiyile",
  "Vizhi Veekura",
  "Hosanna",
  "Moongil Thottam",
  "Pookkal Pookkum",
  "Koondu Kulla",
  "Edho Solla"
];

myButton.onclick = function () {
  const randomIndex = Math.floor(Math.random() * songs.length);
  myLabel.textContent = songs[randomIndex];
};