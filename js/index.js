var randomNumber1= Math.floor(Math.random()*6)+1;
// randomNumber1= Math.floor(randomNumber1)+1;
// document.querySelector("img1").setAttribute()


var randomNumberDice= "dice"+randomNumber1+".png";
var randomImageSource= "./img/"+ randomNumberDice;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomNumberDice2= "dice"+randomNumber2+".png";
var randomImageSource2="./img/"+randomNumberDice2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1> randomNumber2) {
    document.querySelector("h1").innerHTML="🥳Dice1 Won!🥳";
}
else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML="🥳Dice2 Won!🥳";
}
else{
    document.querySelector("h1").innerHTML="🤩It's a Tie!🤩";
}
