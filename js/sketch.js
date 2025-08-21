let table = [];
let face;


function preload() {
  face = loadImage('img/epinal.JPEG');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  face.resize(0, height);
  for (let i = 0; i < 30; i++) {
    let x,y;
     if(i%2==0){
   x= random(face.width/2);
   y=random(face.height);
    }else{
        x= random(face.width);
    y=random(face.height/2);
    }
      let s =random(1,100);
    // let frag =face.get(x,y,s,s)
    table[i]=[x,y,int(random(300)),s]
  }
  print(table)
  image(face,0,0)
}

function draw() {
  for (let i = 0; i <table.length; i++) {
    aleatoire =int(random(2));
    if(aleatoire==1){
      
    }
    let newFrag= face.get(random(width), random(height),table[i][3],table[i][3])
   
    if(frameCount%table[i][2]==0){
       image(newFrag,table[i][0],table[i][1])
    }
  }

  

}

// Exemple : régénérer la table au clic
function mousePressed() {
  
}



