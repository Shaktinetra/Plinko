//Defining The Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//Defining/Creating The Variables
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var engine, world, ground;

function setup() {
  //Creating The Canvas
  createCanvas(480, 800);

  //Creating The Engine And World
  engine = Engine.create();
  world = engine.world;

  //Creating The Plinkos
  for (var p = 100; p <= 300; p = p + 200) {

    for (var r = 40; r <= width; r = r + 50) {
      plinkos.push (new Plinko (r, p, 10));
    }

    for (var n = 15; n <= width; n = n + 50) {
      plinkos.push (new Plinko (n, p + 100, 10));
    }
  
  }

  //Creating The Divisions
  for (var w = 0; w <= width; w = w + 80) {
    divisions.push (new Division (w, height - divisionHeight/2, 10, divisionHeight));
  }
  
  //Creating The Ground
  ground = new Ground (240, height, width, 10);

  //Creating The Particles
  particles.push (new Particle (random (width/2 - 20, width/2 + 20), 10, 10));

  //Starting The Engine
  Engine.run(engine);
}

function draw() {
  //Clearing The Screen
  background(0);

  //Displaying The Ground
  ground.display();  

  //Displaying The Plinkos
  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }

  //Displaying The Divisions
  for (var i = 0; i < divisions.length; i ++) {
    divisions[i].display();
  }

  //Displaying The Particles
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
  }

  if (frameCount%60 === 0) {
    particles.push (new Particle (random (width/2 - 20, width/2 + 20), 10, 10));
  }

}