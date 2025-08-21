let face,mouton,epinal;
let x=0,x1=0,x2=0;

let img=[];

let pixelise=[]

let column =50, row=1;
let table = []
let faceCopie;

function preload() {
  face = loadImage('img/mouton.JPEG');
  mouton = loadImage('img/mouton.JPEG');
  epinal = loadImage('img/epinal.JPEG');
faceCopie =loadImage('img/torent.JPEG');
}


function setup() {
      colorMode(HSB)
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


//retirerLeBlanc(epinal)
//retirerLeBlanc(face)
  

}

function draw(){
    background(150,50,10)
  //tint(noise(frameCount)*360,50,100)
    let treshold = map(noise(frameCount*0.1),0,1,50,150)
    let imgDecoupe =retirerLeBlanc(face,treshold)
  image(imgDecoupe,0,0)

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



function retirerLeBlanc(img1,treshold){
    img = img1.get()
     img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i] 
    let v =img.pixels[i+1]
    let b =img.pixels[i+2]
    let a =img.pixels[i+3]

    if((r+v+b)/3>treshold){
        img.pixels[i+3]=0
        //face.pixels[i]=0
    }
  }
  img.updatePixels(); // applique les modifs
  return img
}