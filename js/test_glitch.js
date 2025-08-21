let glitch,epinal;
let x =0;





function preload(){
     epinal = loadImage('img/imgjpg/torent.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    glitch = new Glitch();
    glitch.loadImage(epinal); // load existing p5.js image
    //glitch.randomBytes(10);


    glitch.buildImage(); // creates image from glitched data
    image(glitch.image, 0, 0); // display glitched image
    // image(epinal, 0, 0, width, height);
}

function draw(){
   
        background(255)
    if (glitch.image) {       // ⚡ attendre que l’image glitchée existe
    glitch.resetBytes();
    let start = glitch.getOffset("ffda"); // début des données
    glitch.replaceBytes(start + 100, random(50,200));
    print(start/glitch.length)
    glitch.buildImage();
    image(glitch.image, 0, 0, width, height);
    //print('dsf')
  }
    x++;
}

function mousePressed(){
   
}