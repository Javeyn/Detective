var startButton = document.getElementById("startbutton")
var continueButton = document.getElementById("continueButton")
var questionOne = document.getElementById("questionOne")
var qOneOne = document.getElementById("qOneOne")
var qOneTwo= document.getElementById("qOneTwo")
var qOneThree = document.getElementById("qOneThree")

// document.getElementById("startbutton").addEventListener("click", startgame);

function startgame() {

}
document.getElementById("continueButton").addEventListener("click", continueFunct);

function continueFunct() {
    console.log("clicked continue")
}

document.getElementById("qOneOne").addEventListener("click", qOneOnefunct);

function qOneOnefunct() {
console.log("click1")
}

document.getElementById("qOneTwo").addEventListener("click", qOneTwofunct)

function qOneTwofunct() {
    console.log("click2")    
}

document.getElementById("qOneThree").addEventListener("click", qOneThreefunct)

function qOneThreefunct() {
    console.log("click3")   
}