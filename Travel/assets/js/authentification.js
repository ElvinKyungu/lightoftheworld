const form = document.querySelector("form");
pseudoField = form.querySelector(".pseudo"),
pseudoInput = pseudoField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault(); //empêcher l'envoi du formulaire
    //si l'e-mail et le mot de passe sont vides, ajoutez la classe shake, sinon appelez la fonction spécifiée
    (pseudoInput.value == "") ? eField.classList.add("shake", "error") : checkPseudo();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(()=>{ //supprimer la classe de secousse après 500 ms
      eField.classList.remove("shake");
      pField.classList.remove("shake");
    }, 500);

    pseudoInput.onkeyup = ()=>{checkPseudo();} //appel de la fonction checkPseudo sur la touche d'entrée de passe
    eInput.onkeyup = ()=>{checkEmail();} //appel de la fonction checkEmail sur la touche d'entrée d'e-mail
    pInput.onkeyup = ()=>{checkPass();} //appel de la fonction checkPassword sur la touche d'entrée de passe

    function checkPseudo(){ //fonction checkPass
        if(pInput.value != ""){ //si pass est vide, ajoutez une erreur et supprimez la classe valide
            if(pInput.value.length > 3){
                pseudoField.classList.remove("error");
                pseudoField.classList.add("valid");
                
            }else{ 
                let pseudoError = pseudoField.querySelector(".error-txt");
                pseudoError.innerText = "3 caractères minimum";
            }
        }else{ //si pass est vide, supprimez l'erreur et ajoutez une classe valide
            pseudoField.classList.add("error");
            pseudoField.classList.remove("valid");
        }
    }
    function checkEmail(){ //fonction checkEmail
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
      if(!eInput.value.match(pattern)){ //si le modèle ne correspond pas, ajoutez une erreur et supprimez la classe valide
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");
            //si la valeur de l'e-mail n'est pas vide, veuillez entrer un e-mail valide, sinon, l'e-mail ne peut pas être vide
            (eInput.value != "") ? errorTxt.innerText = "entrez une adresse e-mail valide" : errorTxt.innerText = "L'e-mail ne peut pas être vide";
        } else{ //si le modèle correspond, supprimez l'erreur et ajoutez une classe valide
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass(){ //fonction checkPass
        if(pInput.value == ""){ //si pass est vide, ajoutez une erreur et supprimez la classe valide
            pField.classList.add("error");
            pField.classList.remove("valid");
        }else{ //si pass est vide, supprimez l'erreur et ajoutez une classe valide
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    //si eField et pField ne contiennent pas de classe d'erreur, cela signifie que l'utilisateur a correctement rempli les détails
    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = form.getAttribute("action"); //rediriger l'utilisateur vers l'URL spécifiée qui se trouve dans l'attribut d'action de la balise de formulaire
    }
}
