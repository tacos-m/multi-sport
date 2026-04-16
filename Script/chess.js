// variable d'agrandissement
let a = 1;
let temps = 3;
let carre = 50 * a;
let selec = 0;
let button;
let posiX;
let posiY;
let posiQ;
let posiZ;
let tourB = 2;
let vieB = true;
let vieN = true;
let rtb = false;
let rtn = false;
let minB = temps-1 ;
let minN = temps -1;
let timeB = 59;
let timeN = 59;
let start = false;
let lien;
let colorR = "white";
let couleurT = ["red", "blue", "white", "green", "black", "pink", "violet"];
let mySound;

///////////////////////////////////////////////////////////////////// Matrix

var matrix = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SETUP

function preload() {
 
  mySound = loadSound('musique.mp3');
}







function setup() {
  createCanvas(600 * a, 400 * a);
//////////////////////////////////////////////////////////////////////////////////////////.    ma musioqeu addell Skyffal 
  
  mySound.play();
  
  
  
  ////////////////////////////////////////////////////////////////////////////////////////// affichage du bouton recommencer
  button = createButton("Recommencer");

  ////////////////////////////////////////////////////////////////////////////////////////// affichage du bonton rock
  button2 = createButton("rock");
  ////////////////////////////////////////////////////////////////////////////////////////// Lien des règles du jeux
  lien = createA(
    "https://www.bonzai.pro/lux/posts/J2kM_14396/comprendre-les-bases-essentielles-des-echecs",
    "Règles du jeu d'échec  ©️Lux",
    "_blank"
  );
}
//////////////////////////////////// dessiner l'échiquier
function dessinEchiquier() {
  for (let j = 0; j < 8; j++) {
    for (var i = 0; i < 8; i++) {
      if (i % 2 == 0 && j % 2 == 0) {
        fill("SaddleBrown");
      } else if (i % 2 != 0 && j % 2 != 0) {
        fill("SaddleBrown");
      } else {
        fill("Goldenrod");
      }
      rect(i * 50 * a, j * 50 * a, 50 * a);
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Draw

function draw() {
  background("Goldenrod");

  if(mySound.isPlaying()==false){
    mySound.play()
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// code popur demarer le jeu
  if (keyCode === 83) {
    start = true;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// si le jeu est lancer
  if (start == true) {
    ////////////////////////////////////////////////////////////////////////////////////////// pendule blanche

    if (minB > -1 && tourB % 2 == 0 && vieB == true && vieN == true) {
      
      if (frameCount % 60 == 0) {
        timeB--;
        if (timeB == -1) {
          timeB = 59;
          minB--;
        }
      }

      textSize(50 * a);
      fill("white");
      text(minB + " : " + timeB, 450 * a, 350 * a);
    } else if (minB > -1 && tourB % 2 != 0) {
      textSize(50 * a);
      fill("black");
      text(minB + " : " + timeB, 450 * a, 350 * a);
    } else if (minB > -1 && tourB % 2 == 0 && vieB == false) {
      textSize(50 * a);
      fill("black");
      text(minB + " : " + timeB, 450 * a, 350 * a);
    }

    if (minB <= 0 && timeB <= 0) {
      vieB = false;
      textSize(50 * a);
      fill("black");
      text( "0 : 0" , 450 * a, 350 * a);
    }
 
    ////////////////////////////////////////////////////////////////////////////////////////// pendule Noire
    if (minN > -1 && tourB % 2 != 0 && vieN == true && vieB == true) {
    

      if (frameCount % 60 == 0) {
        timeN--;
        if (timeN == -1) {
          timeN = 59;
          minN--;
        }
      }

      textSize(50 * a);
      fill("white");
      text(minN + " : " + timeN, 450 * a, 75 * a);
    } else if (minN > -1 && tourB % 2 == 0) {
      textSize(50 * a);
      fill("black");
      text(minN + " : " + timeN, 450 * a, 75 * a);
    } else if (minN > -1 && tourB%2 !=0 && vieN == false) {
      textSize(50 * a);
      fill("black");
      text(minN + " : " + timeN, 450 * a, 100 * a);
    }

    if (minN <= -1 ) {
      vieN = false;
      fill("black");
      text("0 : 0" , 450 * a, 100 * a);
    }

    ////////////////////////////////////////////////////////////////////////////////////////// Dessiner l'échiquier

    dessinEchiquier();

    ////////////////////////////////////////////////////////////////////////////////////////// afficher les bouton si commencer
    if (start == true) {
      ///////////////////////////////////////////////////////////////////////////////////////// bouton recommencer
      button.position(465 * a, 230 * a);
      button.mousePressed(restart);

      ////////////////////////////////////////////////////////////////////////////////////////// bouton rook
      button2.position(480 * a, 180 * a);
      button2.mousePressed(rock);
    }

    ////////////////////////////////////////////////////////////////////////////////////////// bouger le lien or de l'écran
    lien.position(1000000 * a, 10000000 * a);

    ////////////////////////////////////////////////////////////////////////////////////////// vie du roi blanc
    rtb = false;
    rtn = false;

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == "♔") {
          rtb = true;
        }
      }
    }

    if (rtb != true) {
      vieB = false;
    }

    ////////////////////////////////////////////////////////////////////////////////////////// vie du roi noire
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == "♚") {
          rtn = true;
        }
      }
    }

    if (rtn != true) {
      vieN = false;
    }

    ////////////////////////////////////////////////////////////////////////////////////////// Afficher les pièces sur la grille
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        textSize(50 * a);
        fill("black");
        text(matrix[y][x], (1 / 8 + x) * (50 * a), (0.8 + y) * (50 * a));
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////////// ecran de victoire si noire gagne
    if (vieB != true && vieN == true) {
      fill("white");
      textSize(15*a);
      text("Les noirs on gagné !!", 440 * a, 170 * a);
    }

    ////////////////////////////////////////////////////////////////////////////////////////// ecran de victoire si les blanc gagne
    if (vieB == true && vieN != true) {
      //fill("black");
      //rect(0, 0, 400 * a, 400 * a);
      fill("white");
      textSize(15*a);
      text("Les blancs on gagné !!", 440 * a, 170 * a);
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////// ecran de début
  else  {
    ////////////////////////////////////////////////////////////////////////////////////////// mettre les bouton ors de l'ecran avant le début de la partie
    button.position(1000000 * a, 1000000 * a);
    button2.position(1000000 * a, 1000000 * a);

    if (frameCount % 30 == 0) {
      colorR = random(couleurT);
    }

    fill("white");
    textSize(25 * a);
    text("Welcom !!!", width / 3 + 30 * a, height / 8);
    textSize(10 * a);
    text(
      "Voici un jeu d'echec a 2 joueurs, vous pourez retrouver l'ensemble des règles dans le lien ci dessous : ",
      20 * a,
      height / 8 + 40 * a
    );

    lien.position(20 * a, height / 8 + 65 * a);
    text(
      "Vous avez aussi un temps limité pour jouer votre partie : 3 minutes par joueurs, attention a ne pas dépasser !",
      20 * a,
      height / 8 + 120 * a
    );
    text(
      "un bouton recommencer est a votre disposition si besoin (ou en cas de beug). ",
      20 * a,
      height / 8 + 160 * a
    );
    text(
      "Pièce touché = pièces a joueur, impossible de revenir sur sa case si une pièce est sellectionner !",
      20 * a,
      height / 8 + 200 * a
    );
    text(
      "Si vous avez tout compris, bonne partie.",
      20 * a,
      height / 8 + 240 * a
    );
    textSize(20 * a);
    fill(colorR);
    text("Appuyer sur S pour commencer ", width / 4, height / 8 + 300 * a);
  }
}

////////////////////////////////////////////////////////////////////////////////////////// pouvoir suivre la soouris du joueur
function mousePressed() {
  if (mouseX < 400 * a && start == true) {
    if (selec == 0 && vieB == true && vieN == true) {
      posiX = Math.floor(mouseX / carre);
      posiY = Math.floor(mouseY / carre);

      //console.log(matrix[posiY][posiX]);
    }

    if (selec == 1 && vieB == true && vieN == true) {
      posiZ = Math.floor(mouseX / carre);
      posiQ = Math.floor(mouseY / carre);
      matrix[posiQ][posiZ] = matrix[posiY][posiX];
      matrix[posiY][posiX] = "";

      //console.log(matrix[posiQ][posiZ]);
      selec -= 2;
      tourB++;
    }

    selec += 1;
  }
}

////////////////////////////////////////////////////////////////////////////////////////// fonctionnement du bouton recommencer

function restart() {
  matrix = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];
  selec = 0;
  vieB = true;
  vieN = true;
  minB = temps - 1;
  tourB = 2;
  minN = temps - 1;
  timeB = 59;
  timeN = 59;
}

//////////////////////////////////////////////////////////////////////////////////////// fonctionnement du bouton rock
function rock() {
  tourB++;
}




/////////////////////////////////////////// teste de selection des couleur 


/////////////////////////////////////////// blanc 

/* 
if (tourB%2==0 ){
if (matrix[posiY][posiX]=="♖"||"♘"||"♗"||"♕"||"♔"||"♙"){
.............. code du bouger ....................

}
}


if (tourB%2!=0 ){
if (matrix[posiY][posiX]=="♜"||"♞"||"♝"||"♛"||"♚"||"♟"){
.............. code du bouger ....................

}
}




*/












