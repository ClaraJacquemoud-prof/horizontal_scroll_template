let face,mouton,epinal;
let x=0,x1=0,x2=0;

let img=[];

let pixelise=[]

let column =50, row=1;
let table = []
let faceCopie;

function preload() {
  face = loadImage('img/torent.JPEG');
  mouton = loadImage('img/mouton.JPEG');
  epinal = loadImage('img/epinal.JPEG');
faceCopie =loadImage('img/torent.JPEG');
}


function setup() {
      
noSmooth()
    img=[face,mouton,epinal]
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  face.resize(0, height);
  mouton.resize(0, height/2);
  epinal.resize(0, height);
frameRate(12)
let nbr = 100;
for (let i = 0; i <nbr; i++) {
    pixelise[i] = face.get();
    pixelise[i].resize(face.width-i*face.width/nbr,0)
   //pixelise[i].resize(face.width,0)
    
}
//print(pixel)

  for (let i = 0; i < column; i++) {
    table[i] = [];
    for (let j = 0; j < row; j++) {
      table[i][j] = int(random(2)); // 0 ou 1
    }
  }


retirerLeBlanc(epinal)
retirerLeBlanc(face)
  

}

function draw(){
    noTint()
    //background(255)
   // image(faceCopie,0,0)
    let largeurBande = face.width/column;
    image(face,0,0)
    let number = int(frameCount%pixelise.length);
    //print(number)
   // fragment =pixel[number].get(0,0,100,100);
   
    // image(pixelise[number],0,0,face.width,face.height)
      //tint(0,255,0)
//  image(epinal,mouseX,0)
    tint(255,0,0,125)
  image(face,0,0)

   tint(200,80,200,125)
  image(face,frameCount%280,0)
  tint(100,80,200,125)
  image(face,frameCount%180*0.5,0)

}



function glissadeBasique(){
     image(mouton,x,230+noise(frameCount*0.1)*height/4)
     image(face,x,noise(frameCount*0.1+200)*height/4);
      image(epinal,x,noise(frameCount*0.1+200)*height/4-230);
    x+=noise(frameCount*0.1)*10
}


function glissadeMieux(){
     x=frameCount%face.width
    w = noise(frameCount*0.1)*100
    y =noise(frameCount*0.1)*100

   let frag=face.get(x,0,w,face.height);
   x+=w
   image(frag,x,y)
}



function retirerLeBlanc(img){
     img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i] 
    let v =img.pixels[i+1]
    let b =img.pixels[i+2]
    let a =img.pixels[i+3]

    if((r+v+b)/3<170){
        img.pixels[i+3]=0
        //face.pixels[i]=0
    }
  }
  img.updatePixels(); // applique les modifs
}