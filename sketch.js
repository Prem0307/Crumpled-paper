
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup(){
	var canvas = createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;


    ground = new Ground();
	crumpledPaper = new Paper();

bin = new Dustbin(1040,480,300,200)

	
}
function draw(){
	 background(220);
	 Engine.update(engine);

	 ground.display();
	 crumpledPaper.display();
	 bin.display();


	 


}
function keyPressed(){
if(keyCode === UP_ARROW ){
Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:78,y:-78})
}

}
