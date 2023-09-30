var randomNumber = Math.floor(Math.random() * 6) + 1;  
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImagesource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImagesource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "DEV-ANKIT WIN";
}
else if (randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "YOU WIN";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}