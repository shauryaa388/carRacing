var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car01, car02, car03, car04;
var track1, track2;
var ground1

var form, player, game;

var cars, car1, car2, car3, car4;


function preload(){
car01 = loadImage("images/car1.png");
car02 = loadImage("images/car2.png");
car03 = loadImage("images/car3.png");
car04 = loadImage("images/car4.png");
track1 = loadImage("images/track.jpg");
track2 = loadImage("images/track.png");
ground1 = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  }


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(player.rank === 4){
    gameState = 2;
  }
}
