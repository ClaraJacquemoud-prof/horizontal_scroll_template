let img=[];

let position, vitesse,acceleration;

let pinceaux = [];
let motif;

let colorListe =[
   [0,0,50,12],
    [255,255,255,12],
    [81, 180, 232,12],
    [56, 40, 212,12],
    [102, 125, 186,5]
]
// Load the text and create an array.
function preload() {
    for (let i = 1; i < 8; i++) {
       img[i-1] = loadImage('img/pinceau'+i+'.png')
        
    }
    // img = loadImage('img/IMG_20231111_105959.png')
}

function setup() {
    imageMode(CENTER);
    print(img)
    // img.resize(10,10)
    createCanvas(windowWidth, windowHeight);
    background(255)
    vitesse = createVector(0.02,0.02)
    acceleration = createVector(1,1);
    position = createVector(width/2,height/2)
    tint(255,25)
    // for (let i = 0; i <30; i++) {
    //     pinceaux[i] = new Pinceau(randomGaussian(0.7,0.7),random(255),random(255),random(255),random(width),random(height),random(10,50))
        
    // }

    // pinceaux[0] = new Pinceau(0.5,255,125,0,400,700,100)
    //pinceaux[1] = new PinceauMotif(0.1,255,125,0,400,300,50,45)
   // pinceaux[2] = new PinceauQuiTourne(0.01,255,125,0,800,500,200,1)

   for (let i = 0; i <6; i++) {
    pinceaux[i]= new Pinceau(img[i],random(2),random(colorListe),random(width),random(height),randomGaussian(600,200),random(10,30))
    
   }


motif = new PinceauMotif(0.1,255,125,0,400,300,300,45)
  
}

function draw() {

    // background(255,10)
    // acceleration=p5.Vector.random2D();
    for (let i = 0; i < pinceaux.length; i++) {
        pinceaux[i].update()
        let x =i+1;
        pinceaux[i].show()
        
    }

     if(frameCount%45 ==0){
    shuffle(pinceaux, true)
    print(frameCount)
   }
   motif.update()
   motif.show()
}

function mouseDragged(){
   
}


class Pinceau {
  constructor(img,quantiteRotate, colorDefine, x, y,size,speed) {
    this.quantiteRotate = quantiteRotate;
    this.color =colorDefine;
    this.size =size;
    this.speed =speed;
    this.img =img;

    //this.img = random(img)
    this.position = createVector(x, y);
    this.vitesse = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  update() {
    // randomGaussian pour un mouvement organique
    this.acceleration = createVector(
      randomGaussian(0, this.quantiteRotate),
      randomGaussian(0, this.quantiteRotate)
    );

    this.vitesse.add(this.acceleration);
    this.vitesse.limit(this.speed);

    // rebonds
    if (this.position.x + this.vitesse.x > width || this.position.x + this.vitesse.x < 0) {
      this.vitesse.x *= -1;
    }
    if (this.position.y + this.vitesse.y > height || this.position.y + this.vitesse.y < 0) {
      this.vitesse.y *= -1;
    }

    this.position.add(this.vitesse);
  }

  show( ) {
    tint(this.color);
    image(this.img, this.position.x, this.position.y, this.size,this.size);
  }
}

class PinceauMotif {
  constructor(quantiteRotate, r, g, b, x, y,size,compteur) {
    this.quantiteRotate = quantiteRotate;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size =size;
    this.compteur = compteur;
    this.img = random(img);

    this.position = createVector(x, y);
    this.vitesse = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  update() {
    // randomGaussian pour un mouvement organique
    this.acceleration = createVector(
      randomGaussian(0, this.quantiteRotate),
      randomGaussian(0, this.quantiteRotate)
    );

    this.vitesse.add(this.acceleration);
    this.vitesse.limit(10);

    // rebonds
    if (this.position.x + this.vitesse.x > width || this.position.x + this.vitesse.x < 0) {
      this.vitesse.x *= -1;
    }
    if (this.position.y + this.vitesse.y > height || this.position.y + this.vitesse.y < 0) {
      this.vitesse.y *= -1;
    }

    this.position.add(this.vitesse);
  }

  show() {
    if(frameCount%this.compteur == 0){
         tint(0,0,0);
    image(this.img, this.position.x, this.position.y, this.size,this.size);
    }
   
  }
}








class PinceauQuiTourne {
  constructor(quantiteRotate, r, g, b, x, y,size,compteur) {
    this.quantiteRotate = quantiteRotate;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size =size;
    this.compteur = compteur;

    this.position = createVector(x, y);
    this.vitesse = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  update() {
    // randomGaussian pour un mouvement organique
    this.acceleration = createVector(
      randomGaussian(0, this.quantiteRotate),
      randomGaussian(0, this.quantiteRotate)
    );

    this.vitesse.add(this.acceleration);
    this.vitesse.limit(10);

    // rebonds
    if (this.position.x + this.vitesse.x > width || this.position.x + this.vitesse.x < 0) {
      this.vitesse.x *= -1;
    }
    if (this.position.y + this.vitesse.y > height || this.position.y + this.vitesse.y < 0) {
      this.vitesse.y *= -1;
    }

    this.position.add(this.vitesse);
  }

  show(r,v,b) {

    let angle = this.vitesse.heading()
    if(frameCount%this.compteur == 0){
         tint(r, v, b);
         push()
         translate(this.position.x, this.position.y)
         rotate(angle)
    image(img[1], 0,0, this.size,this.size*3);
    pop()
    }
   
  }
}

