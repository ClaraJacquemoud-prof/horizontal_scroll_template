let curseurListe = {};

function sliderAutomatique(min,max,valeurDefault,texte, step){
    let header = select('header');
  
    let div = createDiv();
    div.parent(header);
  
    let nom = createP(texte);
    nom.parent(div);
  
    let curseur = createSlider(min, max, valeurDefault,step);/// createSlider(min, max, défault)
    curseur.parent(div);
  
    curseurListe[texte] = curseur;
  
  }

  function deleteSlider(texte){
  
    curseurListe[texte].parent().remove();
    
       delete curseurListe[texte]; 
  
  }