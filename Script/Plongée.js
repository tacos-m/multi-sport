//  POPUP
function openPopup(type) {
    let text = "";
    let showListe = false;

    if (type === "materiel") {
        text = "Le matériel de plongée comprend le masque, les palmes, la combinaison, la bouteille et le détendeur.";
    }

    if (type === "lieux") {
        text = "On peut plonger en mer, dans les océans, les récifs coralliens ou même dans certains lacs.";
        showListe = true;
    }

    if (type === "bienfaits") {
        text = "La plongée réduit le stress, améliore la respiration et permet de se reconnecter à la nature.";
    }

    if (type === "niveaux") {
        text = "Il existe plusieurs niveaux : débutant (N1), intermédiaire (N2) et avancé (N3).";
    }

    document.getElementById("popupText").innerText = text;

    //  affiche ou cache la liste seulement pour lieux
    document.getElementById("listeEspeces").style.display =
        showListe ? "block" : "none";

    document.getElementById("popup").style.display = "block";
}

// fermer popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


//  QUIZ
function checkAnswer(button, isCorrect) {
    let result = document.getElementById("result");

    // reset couleur des boutons du même groupe
    let parent = button.parentElement;
    let buttons = parent.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
    });

    if (isCorrect) {
        button.style.backgroundColor = "green";
        button.style.color = "white";
        result.innerText = "✅ Bonne réponse !";
    } else {
        button.style.backgroundColor = "red";
        button.style.color = "white";
        result.innerText = "❌ Mauvaise réponse";
    }
}

