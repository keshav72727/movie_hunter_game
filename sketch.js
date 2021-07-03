var bg_image;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;
var game;
var allPlayers;
var movie1;
var answers;
var allMovieNames;
var hint1;

const Movie1 = "MOTHER INDIA"
const Movie2 = "SINGH IS KING"

function preload(){
movie1 = loadImage("movies/1.png");
  bg_image = loadImage("movies/MOVIE HUNTER.png");
  hint1 = loadImage("movies/2.png");
}

function setup(){
  createCanvas(1200,700);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  
}

function draw(){
  
  
  if (playerCount === 2){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play()
  }

  if (gameState === 2){
    game.end();
  }
  console.log(gameState);
}

