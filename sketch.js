var ball;
var groundObj;
var left;
var right;
var arribita;
var left_2;
var right_2;
var boxBase;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,690,width,20);
	arribita = new Ground(600,10,1200,20);
	arribita.restitution = 0;
	left_2 = new Ground(10,350,20,700);
	left_2.restitution = 0;
	right_2 = new Ground(1190,350,20,700);
	right_2.restitution = 0;
	left = new Ground(850,630,10,100);
	left.red = 100;
	left.green = 100;
	left.blue = 100;
	right = new Ground(1000,630,10,100);
	right.red = 100;
	right.green = 100;
	right.blue = 100;
	boxBase = new Ground(925,680,160,10);
	boxBase.red = 100;
	boxBase.green = 100;
	boxBase.blue = 100;
	boxBase.restitution = 0;

	//crear los cuerpos aquí.
	var ball_options = {
		isStatic: false,
		//restitution: -0.0,
		friction: 0,
		density: 5
	}

	ball = Bodies.circle(200,200,22,ball_options);
	World.add(world, ball);
	Engine.run(engine);
	console.log('Velocity: '+ ball.rectangularVelocity);
	console.log("posision: " + boxBase.x);
	console.log("posision: " + boxBase.y);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,100);
  groundObj.show();
  left.show();
  right.show();
  left_2.show();
  right_2.show();
  arribita.show();
  boxBase.show();

  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 40, 40);


  keyPressed();
  
  //drawSprites();
 
}





function keyPressed(){
	  if(keyCode == UP_ARROW){
		  Matter.Body.applyForce(ball,{x:0, y:0}, {x: 2.8, y: -2.5});
		  //Matter.Body.applyForce(ball,{x:0, y:0}, {x: 0, y: -0.9});
		  
	  }
}








