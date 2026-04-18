/* ============================================================
   chess.js — Jeu d'échecs (p5.js)
   Lié à : Chess.html  |  Styles dans : chess.css
   ============================================================ */

let a = 1;
let temps = 3;
let carre = 50 * a;
let selec = 0;
let button, button2;
let posiX, posiY, posiQ, posiZ;
let tourB = 2;
let vieB = true;
let vieN = true;
let rtb = false;
let rtn = false;
let minB = temps - 1;
let minN = temps - 1;
let timeB = 59;
let timeN = 59;
let start = false;
let lien;
let colorR = "white";
let couleurT = ["red", "blue", "white", "green", "black", "pink", "violet"];

/* ---------- Matrice initiale ---------- */
var matrix = [
  ["♜","♞","♝","♛","♚","♝","♞","♜"],
  ["♟","♟","♟","♟","♟","♟","♟","♟"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["♙","♙","♙","♙","♙","♙","♙","♙"],
  ["♖","♘","♗","♕","♔","♗","♘","♖"],
];

/* ============================================================
   SETUP
   ============================================================ */
function setup() {
  let monCanvas = createCanvas(600 * a, 400 * a);
  monCanvas.parent('chess-container');

  button = createButton("Recommencer");
  button.parent('chess-container');

  button2 = createButton("Roquer");
  button2.parent('chess-container');

  lien = createA("https://www.chess.com/fr/apprendre-les-echecs/les-regles-des-echecs", "Règles du jeu d'échecs", "_blank");
  lien.parent('chess-container');
}

/* ============================================================
   Dessiner l'échiquier
   ============================================================ */
function dessinEchiquier() {
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
        fill("SaddleBrown");
      } else {
        fill("Goldenrod");
      }
      rect(i * 50 * a, j * 50 * a, 50 * a);
    }
  }
}

/* ============================================================
   DRAW
   ============================================================ */
function draw() {
  background("Goldenrod");

  /* Démarrer le jeu avec la touche S */
  if (keyCode === 83) {
    start = true;
  }

  if (start === true) {

    /* --- Pendule blanche --- */
    if (minB > -1 && tourB % 2 === 0 && vieB === true && vieN === true) {
      if (frameCount % 60 === 0) {
        timeB--;
        if (timeB === -1) { timeB = 59; minB--; }
      }
      textSize(50 * a);
      fill("white");
      text(minB + " : " + timeB, 450 * a, 350 * a);
    } else if (minB > -1 && tourB % 2 !== 0) {
      textSize(50 * a);
      fill("black");
      text(minB + " : " + timeB, 450 * a, 350 * a);
    } else if (minB > -1 && tourB % 2 === 0 && vieB === false) {
      textSize(50 * a);
      fill("black");
      text(minB + " : " + timeB, 450 * a, 350 * a);
    }

    if (minB <= 0 && timeB <= 0) {
      vieB = false;
      textSize(50 * a);
      fill("black");
      text("0 : 0", 450 * a, 350 * a);
    }

    /* --- Pendule noire --- */
    if (minN > -1 && tourB % 2 !== 0 && vieN === true && vieB === true) {
      if (frameCount % 60 === 0) {
        timeN--;
        if (timeN === -1) { timeN = 59; minN--; }
      }
      textSize(50 * a);
      fill("white");
      text(minN + " : " + timeN, 450 * a, 75 * a);
    } else if (minN > -1 && tourB % 2 === 0) {
      textSize(50 * a);
      fill("black");
      text(minN + " : " + timeN, 450 * a, 75 * a);
    } else if (minN > -1 && tourB % 2 !== 0 && vieN === false) {
      textSize(50 * a);
      fill("black");
      text(minN + " : " + timeN, 450 * a, 100 * a);
    }

    if (minN <= -1) {
      vieN = false;
      fill("black");
      text("0 : 0", 450 * a, 100 * a);
    }

    /* --- Échiquier --- */
    dessinEchiquier();

    /* --- Boutons --- */
    button.position(465 * a, 230 * a);
    button.mousePressed(restart);

    button2.position(480 * a, 180 * a);
    button2.mousePressed(rock);

    /* --- Lien hors écran --- */
    lien.position(1000000, 1000000);

    /* --- Vérification vie du roi blanc --- */
    rtb = false;
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] === "♔") { rtb = true; }
      }
    }
    if (rtb !== true) { vieB = false; }

    /* --- Vérification vie du roi noir --- */
    rtn = false;
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] === "♚") { rtn = true; }
      }
    }
    if (rtn !== true) { vieN = false; }

    /* --- Affichage des pièces --- */
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        textSize(50 * a);
        fill("black");
        text(matrix[y][x], (1/8 + x) * (50 * a), (0.8 + y) * (50 * a));
      }
    }

    /* --- Écrans de victoire --- */
    if (vieB !== true && vieN === true) {
      fill("white");
      textSize(15 * a);
      text("Les noirs ont gagné !!", 440 * a, 170 * a);
    }

    if (vieB === true && vieN !== true) {
      fill("white");
      textSize(15 * a);
      text("Les blancs ont gagné !!", 440 * a, 170 * a);
    }

  } else {
    /* --- Écran de démarrage --- */
    button.position(1000000, 1000000);
    button2.position(1000000, 1000000);

    if (frameCount % 30 === 0) {
      colorR = random(couleurT);
    }

    fill("white");
    textSize(25 * a);
    text("Bienvenue !", width / 3 + 30 * a, height / 8);

    textSize(10 * a);
    text(
      "Jeu d'échecs à 2 joueurs. Retrouvez les règles complètes dans le lien ci-dessous.",
      20 * a, height / 8 + 40 * a
    );

    lien.position(20 * a, height / 8 + 65 * a);

    text(
      "Temps limité : " + temps + " minutes par joueur. Attention à la pendule !",
      20 * a, height / 8 + 120 * a
    );
    text(
      "Un bouton Recommencer est disponible en cas de besoin.",
      20 * a, height / 8 + 160 * a
    );
    text(
      "Pièce touchée = pièce jouée. Impossible de revenir en arrière après sélection !",
      20 * a, height / 8 + 200 * a
    );
    text(
      "Bonne partie !",
      20 * a, height / 8 + 240 * a
    );

    textSize(20 * a);
    fill(colorR);
    text("Appuyez sur S pour commencer", width / 4, height / 8 + 300 * a);
  }
}

/* ============================================================
   Gestion des clics souris
   ============================================================ */
function mousePressed() {
  if (mouseX < 400 * a && start === true) {
    if (selec === 0 && vieB === true && vieN === true) {
      posiX = Math.floor(mouseX / carre);
      posiY = Math.floor(mouseY / carre);
    }

    if (selec === 1 && vieB === true && vieN === true) {
      posiZ = Math.floor(mouseX / carre);
      posiQ = Math.floor(mouseY / carre);
      matrix[posiQ][posiZ] = matrix[posiY][posiX];
      matrix[posiY][posiX] = "";
      selec -= 2;
      tourB++;
    }

    selec += 1;
  }
}

/* ============================================================
   Bouton Recommencer
   ============================================================ */
function restart() {
  matrix = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"],
  ];
  selec = 0;
  vieB  = true;
  vieN  = true;
  minB  = temps - 1;
  minN  = temps - 1;
  tourB = 2;
  timeB = 59;
  timeN = 59;
}

/* ============================================================
   Bouton Roquer (passer son tour)
   ============================================================ */
function rock() {
  tourB++;
}