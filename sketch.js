var hypnoticBall, database;
var position;
var gameState = 0;
var playercount;
var form,player,game;
var allPlayers;



function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400)
 // console.log(database);
 
  game = new Game()
  game.getState()
  game.start()

  
}

function draw(){
 if(playercount==4){
   game.update()
 }
 if(gameState==1){
  clear()
  game.play()
 }
  
   
}



