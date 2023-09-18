
var randomNumber1 = Math.floor( Math.random () * 6 ) + 1;

var randomDiceImage ="dice" + randomNumber1 + ".png";

var randomImagesource= "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);


var randomNumber2 = Math.floor( Math.random () * 6 ) + 1;

var randomDiceImage ="dice" + randomNumber2 + ".png";

var randomImagesource= "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🔥🚀"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins ⚡🌟"
}
else {
    document.querySelector("h1").innerHTML="Draw 🚩"
}
