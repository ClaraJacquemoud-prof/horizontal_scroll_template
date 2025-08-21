let table = [];
let face;

column = 10;
row =10;

function preload() {
  face = loadImage('img/torent.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  face.resize(0, height);

  // initialisation table aléatoire
  for (let i = 0; i < column; i++) {
    table[i] = [];
    for (let j = 0; j < row; j++) {
      table[i][j] = int(random(3)); // 0 ou 1
    }
  }
  //face.filter(GRAY)
  noStroke()

  dessinerImage()
  
}

function draw() {


}

// Exemple : régénérer la table au clic
function mousePressed() {
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      table[i][j] = int(random(3));
    }
  }
  background(255)
   dessinerImage()
}



function trameUnMorceau(image,depX,depY,largeur,hauteur,gap){
 for (let x = depX; x <depX+largeur; x+=gap) {
          for (let y = depY; y <depY+hauteur; y+=gap) {
           let s =image.get(x,y)[1];
            rectMode(CENTER)
            s=map(s,255,0,0.01,gap)
          //  stroke(0)
          s*=2
            rect(x,y,s,s)

          }
          
        }
}

function trameUnMorceauTexte(image,depX,depY,largeur,hauteur,gap,caractere){
 for (let x = depX; x <depX+largeur; x+=gap) {
          for (let y = depY; y <depY+hauteur; y+=gap) {
             textAlign(CENTER,CENTER)
           let s =image.get(x,y)[1];
            s=map(s,255,0,0.01,gap)
            textSize(s*5)
            text(caractere,x,y)

          }
          
        }
}


function dessinerImage(){
    let w = face.width / column;
  let h = face.height / row;

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if (table[i][j] == 1) {
        let frag = face.get(i * w, j * h, w, h);
        
        image(frag, i * w, j * h);
      }else if(table[i][j]==2){
        fill(100)
       trameUnMorceau(face,i*w,j*h,w,h,5)
      }else if(table[i][j]==0){
        fill(0)
        noStroke()
         trameUnMorceauTexte(face,i*w,j*h,w,h,10,'*')
      }
    }
  }
}