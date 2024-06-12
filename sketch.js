//Variaveis referente a Bolinha
let xBolinha = 300;
let yBolinha = 200;
let Diametro = 25;
let raio = Diametro / 2 ;

//Variaveis referente a velocidade da Bolinha
let VelocidadexBolinha = 5;
let velocidadeyBolinha = 5

//Variaveis da Raquete
let xRaquete = 10;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variavel do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Variavel placar do jogo
let meusPonto = 0;
let pontosDoOponente = 0;

//Calculando erros do oponente
let calculeErrosDoOponente = 0;

//Variavel referente a Biblioteca do gitHub
let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrandoBolinha();
  movimentandoBolinha();
  colisaoBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  movimentarRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
  verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPontos();
}

function mostrandoBolinha(){
  circle(xBolinha, yBolinha, Diametro);
}

function movimentandoBolinha(){
  xBolinha += VelocidadexBolinha; 
  yBolinha += velocidadeyBolinha;
}

function colisaoBolinha(){
    if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    VelocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostrarRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentarRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    VelocidadexBolinha *= -1;
  }
}

function verificaColisaoRaqueteBiblioteca(x, y){
  colidiu = 
collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    VelocidadexBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  stroke(255)
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPonto, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPontos() {
  if (xBolinha + raio > 595){
    meusPontos += 1;
  }
  if (xBolinha - raio < 2) {
    pontosDoOponente += 1;
  }
}
