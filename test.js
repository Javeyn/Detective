var continueButton1 = document.getElementById("continueButton1")
var continueButton2 = document.getElementById("continueButton2")
var continueButton3 = document.getElementById("continueButton3")
var story1 = document.getElementById("story1")
var story2 = document.getElementById("story2")
var story3 = document.getElementById("story3")
var textBubble1 = document.getElementById("textBubble1")
var textBubble2 = document.getElementById("textBubble2")
var songCounter=false;

var gameMusic = new Audio("./audio/gamesong.wav");
function startMusic() {
    if (songCounter=true){
      gameMusic.play()}
    }

//This is hiding everything until its revealed in game
document.getElementById("continueButton2").style.display = "none";
document.getElementById("continueButton3").style.display = "none";
document.getElementById("story2").style.display = "none";
document.getElementById("story3").style.display = "none";

//these are the click event handlers
document.getElementById("continueButton1").addEventListener("click", continue1Funct);
document.getElementById("continueButton2").addEventListener("click", continue2Funct);

//these are the click functions
function continue1Funct() {
    console.log("clicked continue")
    document.getElementById("continueButton1").style.display = "none";
    document.getElementById("continueButton2").style.display = "inherit";
    document.getElementById("story1").style.display = "none";
    document.getElementById("story2").style.display = "inherit";
    document.getElementById("textBubble2").style.display = "none";
    songCounter=true;
    startMusic()
}
function continue2Funct() {
    console.log("clicked continue2")
    document.getElementById("continueButton2").style.display = "none";
    document.getElementById("continueButton3").style.display = "inherit";
    document.getElementById("story2").style.display = "none";
    document.getElementById("story3").style.display = "inherit";
  
}
