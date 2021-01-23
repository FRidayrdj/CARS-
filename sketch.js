var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var trophy;

var database;

var form, player, game;
var allPlayers;
var car1,car2,car3,car4,cars;
var carsimg1,carsimg2,carsimg3,carsimg4;
var track,ground,startbg;

function preload()
{
  carsimg1 = loadImage('images/car1.png');
  carsimg2 = loadImage('images/car2.png');
  carsimg3 = loadImage('images/car3.png');
  carsimg4 = loadImage('images/car4.png');
  trophy = loadImage('images/Trophy.png');
  track = loadImage('images/track.jpg');
  ground = loadImage('images/ground.png');
  startbg = loadImage('images/background.jpg');

}

function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4)
  {
    game.update(1);
    
  }
  if(gameState===1)
  {
    clear();
    game.play();
  }
  if (gameState===2)
  {
    game.end();
  }
}
