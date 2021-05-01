
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, tree;
var boyimg, treeimg;
var ground;
function preload() {
	boyimg = loadImage('images/boy.png')
	treeimg = loadImage('images/tree.png')

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = createSprite(400, 650, 1000, 10)

	boy = createSprite(600, 600, 10, 10)
	boy.addImage(boyimg)
	boy.scale = 0.1;

	tree = createSprite(300, 350, 10, 10)
	tree.addImage(treeimg)
	tree.scale = 0.5;
	//Create the Bodies Here.
	stone1 = new Stone(550, 550, 50, 50)

	chain1 = new Chain(stone1.body, {x:550,y:550})

	mango1 = new Mango(500, 350, 40, 40)
	mango2 = new Mango(400, 310, 40, 40)
	mango3 = new Mango(500, 100, 40, 40)
	mango4 = new Mango(600, 100, 40, 40)
	mango5 = new Mango(200, 100, 40, 40)
	mango6 = new Mango(350, 100, 40, 40)
	mango7 = new Mango(450, 100, 40, 40)
	mango8 = new Mango(550, 100, 40, 40)



	tree = createSprite(300, 350, 10, 10)
	tree.addImage(treeimg)
	tree.scale = 0.5;
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(200);

	stone1.display();
	chain1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();


	drawSprites();

}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
	chain1.attach(stone1.body);
}

function mouseReleased(){
	  chain1.fly();
  }

