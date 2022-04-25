const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var cima, baixo, direita, esquerda;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  cima = new Parede(200, 10, 400, 20);
  baixo = new Parede(200, 390, 400, 20);
  direita = new Parede(390, 200, 20, 400);
  esquerda = new Parede(10, 200, 20, 400);
  
}

function draw() 
{
  background("lightgrey");
  Engine.update(engine);

  cima.mostrar();
  baixo.mostrar();
  direita.mostrar();
  esquerda.mostrar();
}

