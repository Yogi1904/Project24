const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(350, 700, 1000, 20);

	bin1 = new Bin(600, 690, 30, 100);
	bin2 = new Bin(650, 690, 100, 30);
	bin3 = new Bin(700, 690, 30, 100);
	
	paper = new Paper(30, 500, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();

  ground.display();
  
  bin1.display();
  bin2.display();
  bin3.display(); 

  paper.display();

  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:1, y:-23})
  }

}



