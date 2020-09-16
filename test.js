// var continueDiv = document.getElementById("continueDiv")
// var questionOne = document.getElementById("questionOne")
// var continueButton1 = document.getElementById("continueButton1")
// var continueButton2 = document.getElementById("continueButton2")
// var continueButton3 = document.getElementById("continueButton3")
// var story1 = document.getElementById("story1")
// var story2 = document.getElementById("story2")
// var story3 = document.getElementById("story3")
// var story4 = document.getElementById("story4")
// var textBubble1 = document.getElementById("textBubble1")
// var textBubble2 = document.getElementById("textBubble2")
var songCounter=false;
var choiceCounter=false;
var knifeBool=false;
var gunBool=false;
var badgeBool=false;
document.body.style.backgroundImage = "url('./images/startcity.jpg')"


var gameMusic = new Audio("./audio/beginning.wav");
var countdown = new Audio("./audio/heartbeat2.wav");
var badgeMusic = new Audio("./audio/badge.wav");
var knifeMusic = new Audio("./audio/knife.wav");
var gunMusic = new Audio("./audio/gun.wav");
var shortMusic = new Audio("./audio/short.wav");

function startMusic() {
    if (songCounter=true){
      gameMusic.play()}
    }
function stopMusic(){
    if(choiceCounter=true){
    gameMusic.pause()}
}
function startCountdown(){
    if(choiceCounter=true){
    countdown.play()}
}
function stopCountdown(){
    if(choiceCounter=true){
    countdown.pause()}
}
function knifeMusicStart(){
    if(knifeBool=true){
        knifeMusic.play();
        knifeMusic.loop=true}}

function gunMusicStart(){
if(gunBool=true){
gunMusic.play();
gunMusic.loop=true}  }

function badgeMusicStart(){
    if(badgeBool=true){
    badgeMusic.play();
    badgeMusic.loop=true}  }
    


//This is hiding everything until its revealed in game
document.getElementById("questionOne").style.display = "none";
document.getElementById("continueButton2").style.display = "none";
document.getElementById("continueButton3").style.display = "none";
document.getElementById("story2").style.display = "none";
document.getElementById("story3").style.display = "none";
document.getElementById("story4").style.display = "none";
document.getElementById("story4two").style.display = "none";
document.getElementById("knife1").style.display = "none";
document.getElementById("gun1").style.display = "none";
document.getElementById("badge1").style.display = "none";
document.getElementById("knife1two").style.display = "none";
document.getElementById("gun1two").style.display = "none";
document.getElementById("badge1two").style.display = "none";



//these are the click event handlers
document.getElementById("continueButton1").addEventListener("click", continue1Funct);
document.getElementById("continueButton2").addEventListener("click", continue2Funct);
document.getElementById("continueButton3").addEventListener("click", continue3Funct);
document.getElementById("qOneOne").addEventListener("click", qOneOnefunct);
document.getElementById("qOneTwo").addEventListener("click", qOneTwofunct);
document.getElementById("qOneThree").addEventListener("click", qOneThreefunct);

//these are the click functions

//this is the first screen of the game
function continue1Funct() {
    console.log("clicked continue")
    document.getElementById("continueButton1").style.display = "none";
    document.getElementById("continueButton2").style.display = "inherit";
    document.getElementById("story1").style.display = "none";
    document.getElementById("story1two").style.display = "none";
    document.getElementById("story2").style.display = "inherit";
    document.getElementById("textBubble2").style.display = "none";
    songCounter=true;
    startMusic()
    // document.body.style.backgroundImage = "url('./images/hotelstart.jpg')"
}

//second screen
function continue2Funct() {
    console.log("clicked continue2")
    document.getElementById("continueButton2").style.display = "none";
    document.getElementById("continueButton3").style.display = "inherit";
    document.getElementById("story2").style.display = "none";
    document.getElementById("story3").style.display = "inherit";
  
}
//third screen, first choice
function continue3Funct() {
    console.log("clicked continue2")
    document.getElementById("continueButton3").style.display = "none";
    document.getElementById("continueDiv").style.display = "none";
    document.getElementById("questionOne").style.display = "inherit";
    document.getElementById("story3").style.display = "none";
    document.getElementById("story4").style.display = "inherit";
    document.getElementById("story4two").style.display = "inherit";
    document.getElementById("textBubble2").style.display = "inline-block";
choiceCounter=true
    document.body.style.backgroundImage = "url('./images/hotelstart.jpg')"
  stopMusic();
  startCountdown();
}
//player selects gun
function qOneOnefunct() {
    document.getElementById("questionOne").style.display = "none";
    stopCountdown();
    document.body.style.backgroundImage = "url('./images/hallway.jpg')"
    document.getElementById("story4").style.display = "none";
    document.getElementById("story4two").style.display = "none";
    document.getElementById("gun1").style.display = "inherit";
    document.getElementById("gun1two").style.display = "inherit";
    gunBool=true;
    gunMusicStart();
}
//player selects knife
function qOneTwofunct() {
    document.getElementById("questionOne").style.display = "none";
    stopCountdown();
    document.body.style.backgroundImage = "url('./images/alley.jpg')"
    document.getElementById("story4").style.display = "none";
    document.getElementById("story4two").style.display = "none";
    document.getElementById("knife1").style.display = "inherit";
    document.getElementById("knife1two").style.display = "inherit";
    knifeBool=true;
    knifeMusicStart();
}
//player selects badge
function qOneThreefunct() {
    document.getElementById("questionOne").style.display = "none";
    stopCountdown(); 
    document.body.style.backgroundImage = "url('./images/stairwell.jpg')"
    document.getElementById("story4").style.display = "none";
    document.getElementById("story4two").style.display = "none";
    document.getElementById("badge1").style.display = "inherit";
    document.getElementById("badge1two").style.display = "inherit";
    badgeBool=true;
    badgeMusicStart();
}