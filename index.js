var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftImage = document.querySelector(".img1");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightImage = document.querySelector(".img2");

if (randomNumber1 === 1) {
    leftImage.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber1 === 2) {
    leftImage.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber1 === 3) {
    leftImage.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber1 === 4) {
    leftImage.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber1 === 5) {
    leftImage.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber1 === 6) {
    leftImage.setAttribute("src", "./images/dice6.png");
}

if (randomNumber2 === 1) {
    rightImage.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber2 === 2) {
    rightImage.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber2 === 3) {
    rightImage.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber2 === 4) {
    rightImage.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber2 === 5) {
    rightImage.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber2 === 6) {
    rightImage.setAttribute("src", "./images/dice6.png");
}

var text = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    text.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    text.innerHTML = "Player 2 wins";
} else {
    text.innerHTML = "Draw";
}