const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player1,player2,B1;
var backgroundImg;
var Rope;
var Score = 0;



 function preload(){
  backgroundImg = loadImage("dream2.png");
  
}

function setup() {
  

 var canvas= createCanvas(displayWidth,displayHeight-140);
 engine = Engine.create();
 world = engine.world;  

 console.log("Hi!! Enjoy my game");

  player1 = new player(500,150,40,40);
  player2 = new player(500,100,40,40);

 


  branchGroup = createGroup();

    Rope = new rope(player1.body,player2.body);
  
}

function draw() {
  background(backgroundImg);  

  fill("magenta");
  textSize(24);
  text("score:"+Score,1400,100);
   player1.display();
  player2.display();

 Rope.display();

  randomBranches();

  drawSprites();
  
}

function mouseDragged (){

  Matter.Body.setPosition(player2.body,{x:mouseX, y:mouseY});

  
}


function randomBranches(){
  if(frameCount % 100=== 0 ){
    translate(0,0);
   var branch = createSprite(20,300,200,20);
   branch.shapeColor="green";

   branch.velocityY = 10;


    branch.x = Math.round(random(70,1500));
    branch.y = Math.round(random(100,300));
    branch.lifetime = 55;
    branchGroup.add(branch);

    console.log(branch.y)
  
  }




}

