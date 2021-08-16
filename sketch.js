const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;

var engine, world ;
var base ;
var a , b,c,d,e,f,g ;
var A ;
var slingshot ;
function setup(){
    createCanvas(1000,800) ;
    engine = Engine.create();
    world = engine.world ;
   // ground = createSprite(600,600,1200,30);
   base = new Ground(500,550,800,30);
   a = new Box(250,500,70,60);
   b = new Box(250,440,70,60);
   c = new Box(250,380,70,60);
   d= new Box(250,320,70,60);
   e = new Box(250,260,70,60);
   f= new Box(250,220,70,60);
   g = new Box(250,160,70,60);
   A = new Ball(500,320,100,100);
   slingshot = new Sling(A.body,{x:450 , y:10});

}

function draw(){
    background("black");
    Engine.update(engine);
    base.display();
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    A.display();
   // drawSprites();
   slingshot.display();
  // mouseDragged();
  // released();
}

function mouseDragged(){
   Matter.Body.setPosition(A.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}