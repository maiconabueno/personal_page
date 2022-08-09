// Generate a random number 1-6
var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;
var textH1;

// Targeting the img with random number
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Changing text of the h1 element
if (randomNumber1 == randomNumber2) {
  textH1 = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  textH1 = "Player 1 Wins!";
} else {
  textH1 = "Player 2 Wins!";
}
document.querySelector("h1").innerHTML=textH1;
