const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(500,600,800,10);
  gr1 = new Ground(1100,610,220,10);
  gr2 = new Ground(1205,330,10,550);
  gr3 = new Ground(655,50,1110,10);
  gr4 = new Ground(95,400,10,410);
  gr5 = new Ground(95,90,10,90);
  gr6 = new Ground(150,1200,100,10);
  gr7 = new Ground(150,120,100,10);
  box = new Gun(1600,100,70,70);
  box1 = new Gun(1600,70,70,70);
  box2 = new Gun(1600,100,70,70);
  assain = new Assain(200,200,200,200);

 

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display()
  gr1.display();
  gr2.display();
  gr3.display();
  gr4.display();
  gr5.display();
  gr6.display();
  gr7.display();
  box.display();
  box1.display();
  box2.display();
  assain.display();
  


}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(assain.body,assain.body.position,{
      x:0,y:-10
    })
  }

}


