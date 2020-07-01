var database;
var player,form,game;
var playerCount;
var gameState = 0;


function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.startFunction();
 
}

function draw(){
  background("white");
  
    
}

