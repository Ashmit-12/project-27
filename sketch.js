
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(250,700,30);
bob2=new Bob(300,700,30);
bob3=new Bob(350,700,30);
bob4=new Bob(400,700,30);
bob5=new Bob(450,700,30);

roof=new Roof(360,250,450,20);

rope1=new Rope(bob1.body,{x:200,y:250});
rope2=new Rope(bob2.body,{x:280,y:250});
rope3=new Rope(bob3.body,{x:360,y:250});
rope4=new Rope(bob4.body,{x:440,y:250});
rope5=new Rope(bob5.body,{x:520,y:250});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 

  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===38){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-160,y:-160});
}
}
