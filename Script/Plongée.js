//  POPUP
function openPopup(type) {
    let text = "";

    if (type === "materiel") {
        text = "Le matériel de plongée comprend le masque, les palmes, la combinaison, la bouteille et le détendeur.";
    }

    if (type === "lieux") {
        text = "On peut plonger en mer, dans les océans, les récifs coralliens ou même dans certains lacs.";
    }

    if (type === "bienfaits") {
        text = "La plongée réduit le stress, améliore la respiration et permet de se reconnecter à la nature.";
    }

    if (type === "niveaux") {
        text = "Il existe plusieurs niveaux : débutant (N1), intermédiaire (N2) et avancé (N3).";
    }

    document.getElementById("popupText").innerText = text;
    document.getElementById("popup").style.display = "block";
}

//  FERMER POPUP
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


//  QUIZ
function checkAnswer(answer) {
    let result = document.getElementById("result");

    if (answer === "b") {
        result.innerText = "✅ Bonne réponse !";
    } else {
        result.innerText = "❌ Mauvaise réponse";
    }

     if (answer === "a") {
        result.innerText = "✅ Bonne réponse !";
    } else {
        result.innerText = "❌ Mauvaise réponse";
    }
}