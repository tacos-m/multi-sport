const joueurs = {
  djokovic: {
    nom: "Novak Djokovic",
    nationalite: "🇷🇸 Serbie",
    naissance: "Né le 22 mai 1987 à Belgrade",
    classement: "Ancien N°1 mondial (24 titres du Grand Chelem)",
    palmares: "🏆 Australian Open (10×), Roland-Garros (3×), Wimbledon (7×), US Open (4×)",
    photo: "../images/djoko.jfif"
  },
  nadal: {
    nom: "Rafael Nadal",
    nationalite: "🇪🇸 Espagne",
    naissance: "Né le 3 juin 1986 à Manacor",
    classement: "Ancien N°1 mondial (22 titres du Grand Chelem)",
    palmares: "🏆 Roland-Garros (14×), Australian Open (2×), Wimbledon (2×), US Open (4×)",
    photo: "../images/nadal.jfif"
  },
  federer: {
    nom: "Roger Federer",
    nationalite: "🇨🇭 Suisse",
    naissance: "Né le 8 août 1981 à Bâle",
    classement: "Ancien N°1 mondial (20 titres du Grand Chelem)",
    palmares: "🏆 Wimbledon (8×), Australian Open (6×), US Open (5×), Roland-Garros (1×)",
    photo: "../images/federer.jfif"
  },
  sinner: {
    nom: "Jannik Sinner",
    nationalite: "🇮🇹 Italie",
    naissance: "Né le 16 août 2001 à San Candido",
    classement: "N°1 mondial (2 titres du Grand Chelem)",
    palmares: "🏆 Australian Open 2024, US Open 2024",
    photo: "../images/sinner.jfif"
  },
  alcaraz: {
    nom: "Carlos Alcaraz",
    nationalite: "🇪🇸 Espagne",
    naissance: "Né le 5 mai 2003 à El Palmar",
    classement: "N°2 mondial (4 titres du Grand Chelem)",
    palmares: "🏆 US Open 2022, Roland-Garros 2024, Wimbledon 2023 & 2024",
    photo: "../images/alcaraz.jfif"
  }
};

const joueuses = {
  swiatek: {
    nom: "Iga Świątek",
    nationalite: "🇵🇱 Pologne",
    naissance: "Née le 31 mai 2001 à Varsovie",
    classement: "N°1 mondiale (5 titres du Grand Chelem)",
    palmares: "🏆 Roland-Garros (4×), US Open 2022",
    photo: "../images/swiatek.jfif"
  },
  sabalenka: {
    nom: "Aryna Sabalenka",
    nationalite: "🇧🇾 Biélorussie",
    naissance: "Née le 5 mai 1998 à Minsk",
    classement: "N°2 mondiale (3 titres du Grand Chelem)",
    palmares: "🏆 Australian Open 2023 & 2024, US Open 2023",
    photo: "../images/sabalenka.jpg"
  },
  gauff: {
    nom: "Coco Gauff",
    nationalite: "🇺🇸 États-Unis",
    naissance: "Née le 13 mars 2004 à Atlanta",
    classement: "Top 5 mondiale (1 titre du Grand Chelem)",
    palmares: "🏆 US Open 2023",
    photo: "../images/gauff.jfif"
  },
  williams: {
    nom: "Serena Williams",
    nationalite: "🇺🇸 États-Unis",
    naissance: "Née le 26 septembre 1981 à Saginaw",
    classement: "Ancienne N°1 mondiale (23 titres du Grand Chelem)",
    palmares: "🏆 Australian Open (7×), Roland-Garros (3×), Wimbledon (7×), US Open (6×)",
    photo: "../images/williams.jpg"
  },
  halep: {
    nom: "Simona Halep",
    nationalite: "🇷🇴 Roumanie",
    naissance: "Née le 27 septembre 1991 à Constanța",
    classement: "Ancienne N°1 mondiale (2 titres du Grand Chelem)",
    palmares: "🏆 Roland-Garros 2018, Wimbledon 2019",
    photo: "../images/halep.jfif"
  }
};

// ===== ÉLÉMENTS DU DOM =====
const overlay   = document.getElementById("overlay");
const closeBtn  = document.getElementById("closeBtn");
const photo     = document.getElementById("popup-photo");
const nom       = document.getElementById("popup-nom");
const nationalite = document.getElementById("popup-nationalite");
const naissance = document.getElementById("popup-naissance");
const classement = document.getElementById("popup-classement");
const palmares  = document.getElementById("popup-palmares");

// ===== FONCTION AFFICHER POPUP =====
function afficherPopup(data) {
  if (!data) return;

  photo.src = data.photo;
  photo.alt = "Photo de " + data.nom;
  nom.textContent = data.nom;
  nationalite.innerHTML = "<strong>Pays d'origine :</strong> " + data.nationalite;
  naissance.innerHTML   = "<strong>Date de naissance :</strong> " + data.naissance;
  classement.innerHTML  = "<strong>Classement :</strong> " + data.classement;
  palmares.innerHTML    = "<strong>Palmarès :</strong> " + data.palmares;

  overlay.classList.remove("hidden");
}

// ===== FERMER POPUP =====
function fermerPopup() {
  overlay.classList.add("hidden");
  // Remettre les selects sur l'option par défaut
  document.getElementById("joueur").value = "";
  document.getElementById("joueuse").value = "";
}

closeBtn.addEventListener("click", fermerPopup);

// ===== ÉCOUTEURS DES SELECTS =====
document.getElementById("joueur").addEventListener("change", function() {
  const val = this.value;
  if (val && joueurs[val]) {
    afficherPopup(joueurs[val]);
  }
});

document.getElementById("joueuse").addEventListener("change", function() {
  const val = this.value;
  if (val && joueuses[val]) {
    afficherPopup(joueuses[val]);
  }
});

/* JEU POPUP */
let gameSketch = null;
 
function openGamePopup() {
    document.getElementById('game-overlay').classList.remove('hidden');
 
    if (!gameSketch) {
        gameSketch = new p5(function(p) {
            let x, y, vx, vy, r;
            let paddleX, paddleY, paddleW, paddleH;
            let gameOver = false;
            let paddleSpeed = 5;
 
            p.setup = function() {
                let canvas = p.createCanvas(500, 300);
                canvas.parent('game-canvas-container');
                r = 10;
                x = 250; y = 150;
                vx = -6; vy = 5;
                paddleW = 6; paddleH = 60;
                paddleX = 2;
                paddleY = 150 - paddleH / 2;
            };
 
            p.draw = function() {
                drawBackground();
                if (gameOver) {
                    drawPaddle();
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(28);
                    p.fill(255);
                    p.text("GAME OVER", p.width / 2, p.height / 2);
                    p.textSize(16);
                    p.text("Appuie sur ESPACE pour rejouer", p.width / 2, p.height / 2 + 40);
                    return;
                }
                if (p.keyIsDown(p.UP_ARROW))   paddleY -= paddleSpeed;
                if (p.keyIsDown(p.DOWN_ARROW)) paddleY += paddleSpeed;
                paddleY = p.constrain(paddleY, 31, 270 - paddleH);
                x += vx; y += vy;
                if (y - r <= 31)  { vy *= -1; y = r + 31; }
                if (y + r >= 270) { vy *= -1; y = 270 - r; }
                if (x + r >= 498) { vx *= -1; x = 498 - r; }
                if (vx < 0 && x - r <= paddleX + paddleW && x - r >= paddleX && y >= paddleY && y <= paddleY + paddleH) {
                    vx *= -1;
                    x = paddleX + paddleW + r;
                    let hitPos = (y - paddleY) / paddleH;
                    vy = (hitPos - 0.5) * 10;
                }
                if (x + r < 0) gameOver = true;
                drawPaddle();
                p.fill(255, 220, 50);
                p.stroke(200, 160, 20);
                p.strokeWeight(1.5);
                p.ellipse(x, y, r * 2, r * 2);
            };
 
            p.keyPressed = function() {
                if (p.key === ' ' && gameOver) {
                    gameOver = false;
                    x = 250; y = 150;
                    vx = -6; vy = 5;
                    paddleY = 150 - paddleH / 2;
                }
            };
 
            function drawPaddle() {
                p.fill(255);
                p.noStroke();
                p.rect(paddleX, paddleY, paddleW, paddleH, 3);
            }
 
            function drawBackground() {
                p.background(237, 116, 40);
                p.noStroke();
                p.fill(255);
                p.rect(0, 0, 2, 300);
                p.rect(0, 0, 500, 2);
                p.rect(250, 0, 2, 300);
                p.rect(498, 0, 2, 300);
                p.rect(0, 298, 500, 2);
                p.rect(125, 30, 2, 240);
                p.rect(375, 30, 2, 240);
                p.rect(125, 150, 250, 2);
                p.rect(0, 30, 500, 2);
                p.rect(0, 270, 500, 2);
                p.rect(0, 150, 15, 2);
                p.rect(485, 150, 15, 2);
            }
        });
    }
}
 
function closeGamePopup() {
    document.getElementById('game-overlay').classList.add('hidden');
    if (gameSketch) {
        gameSketch.remove();
        gameSketch = null;
    }
}
 
