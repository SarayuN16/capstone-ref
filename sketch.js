const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var backgroundImg;
var plantImg,food;
var fishImg;
var scissorsImg;

var gameState="end";

let engine;
let world;



function preload()
{
  backgroundImg = loadImage("backgroundImg.png");
  fishImg= loadImage("fishImg.png");
  plantImg= loadImage("plantImg.png");
  scissorsImg = loadImage("scissorImg.png");
  checkmarkImg= loadImage("checkmark.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  

  fishImg = createSprite(420,620,100,100);
  fishImg.scale = 0.2;



  rectMode(CENTER);
  ellipseMode(RADIUS);


  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);

  
     
  button = createImg('scissorImg.png');
  button.position(300,50)
  button.size(50,50);
  //button.mouseClicked(drop());

  button2 = createImg('scissorImg.png');
  button2.position(1000,200);
  button2.size(50,50);
  //button2.mouseClicked(drop());

  button3 = createImg('scissorImg.png');
  button3.position(1500,200);
  button3.size(50,50);
  //button3.mouseClicked(drop());

  food = createImg('plantImg.png');
  food.size(50,50);
  food.position(300,100);

  food2 = createImg('plantImg.png');
  food2.size(50,50);
  food2.position(1000,250);

  food3 = createImg('plantImg.png');
  food3.size(50,50);
  food3.position(1500,250);


  fish1 = createImg('fishImg.png');
  fish1.size(65,65);
  fish1.position(1500,600);

  fish2 = createImg('fishImg.png');
  fish2.size(65,65);
  fish2.position(1000,550);

  fish3 = createImg('fishImg.png');
  fish3.size(65,65);
  fish3.position(300,450);




}


function drop(){
  food.velocityY=-2;
}

  

if(food.isTouching(fish1)){
  check = createImg('checkmark.png');
  check.size(65,65);
  check.position(1700,600);
  food.visibility = false;
  gameState="end";
}

if(food2.isTouching(fish2)){
  check = createImg('checkmark.png');
  check.size(65,65);
  check.position(1200,550);
  food2.visibility = false;
  gameState="end";
}

if(food3.isTouching(fish3)){
  check = createImg('checkmark.png');
  check.size(65,65);
  check.position(500,450);
  food2.visibility = false;
  gameState="end";
  
  swal({
  title: "Good Job!",
  text: "You fed the fishes!",
  icon: "success",
  button: "YAY!"
})
}
