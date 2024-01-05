

//Récupérer tous les boutons du calculatrice
let touche = [...document.querySelectorAll(".btn")];

// Créer un nouveau tableau qui contient les keyCode de chaque touche.
let listeKey = touche.map(Element => Element.dataset.key); 
let ecran = document.querySelector(".ecran");

 document.addEventListener("keydown", (e) => {
      const valeur = e.keyCode.toString();
     calculer(valeur);
 })

 document.addEventListener("click" , (e) => {
          
     const valeur = e.target.dataset.key;
     calculer(valeur);
 })




const calculer = (valeur) => {
     if (listeKey.includes(valeur)) { // On vérifie si la valeur est inclue dans la listeKey
          switch (valeur) {
               case "8":
                    ecran.textContent = "";
                    break;
               case "13":
                    let resultat ;
                   try {
                         resultat = eval(ecran.textContent);  
                    } catch (error) {
                         alert(`il y a une erreur sur vôtre calcul : ${error.name} ${error.message}`);
               
                   }
                    ecran.textContent = resultat;
                    break;
               default:
                    let indexOfcode = listeKey.indexOf(valeur); // récupérer l'index du keyCode dans le tableau listeKey
                     let touches = touche[indexOfcode]; 
                    ecran.textContent += touches.innerHTML;

                    break;
          }
     }
}

