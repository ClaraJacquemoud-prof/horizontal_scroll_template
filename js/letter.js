let myData;
let phrase;
let font;

let listeProba;
let textSizeMax = 40;
let probaLettreRepetee =80;

let ligneWidth;
lastRotate =0;
let lineCount =0;

// Load the text and create an array.
function preload() {
  myData = loadStrings('text.txt');
    font= loadFont('IBMPlexSerif-MediumItalic.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight*5);
ligneWidth =width;
//   background(200);

  // Select a random line from the text.
  
 phrase = myData.join('\n')
// phrase = phrase.split(' ');
  // Style the text.
  textFont(font);


angleMode(DEGREES)
  sliderAutomatique(0,100,40,'Taille max texte')
  sliderAutomatique(0,200,40,'Proba lettre répétée')
  
frameRate(1)

    listeProba= [50];
    for (let i = 1; i <probaLettreRepetee; i++) {
        listeProba[i]=1    
    }

}

function draw() {

    longeurligne = randomGaussian(width/3,200);
    print(longeurligne)
     listeProba= [50];
    for (let i = 1; i <probaLettreRepetee; i++) {
        listeProba[i]=1    
    }
    background(255)
    // Display the text.
  let x = 10;
  let y =10;
  let maxSize =textSizeMax;
  for (let i = 0; i < phrase.length; i++) {
     textSize(noise(i*0.1)*maxSize)
    let nbrEspace =abs(randomGaussian(1,10))
    

    let word = phrase[i];
    word = word.repeat(random(listeProba)) + ' ';
    let wordWidth=textWidth(word);
    


    if(x+wordWidth>longeurligne-wordWidth){
        y+=maxSize*0.6;
         x=10
        lineCount++


         if(lineCount % 6==0){
            rotate(lastRotate*-1)
        lastRotate = random(-10,10);
        rotate(lastRotate)
       
        longeurligne = randomGaussian(width/3,200);
         }
        
    }
    //fill(random(255))
  
    //text(word+' '.repeat(nbrEspace),x,y+noise(i*0.1)*30);
     text(word,x,y);
     x+=wordWidth;
  }
}

function mouseDragged(){
    textSizeMax = curseurListe['Taille max texte'].value();
    probaLettreRepetee = curseurListe['Proba lettre répétée'].value();
}