const joueurs = {
  djokovic: {
    nom: "Novak Djokovic",
    nationalite: "🇷🇸 Serbie",
    naissance: "Né le 22 mai 1987 à Belgrade",
    classement: "Ancien N°1 mondial (24 titres du Grand Chelem)",
    palmares: "🏆 Australian Open (10×), Roland-Garros (3×), Wimbledon (7×), US Open (4×)",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Novak_Djokovic_2019_US_Open_R1_%2848534133016%29_%28cropped%29.jpg/440px-Novak_Djokovic_2019_US_Open_R1_%2848534133016%29_%28cropped%29.jpg"
  },
  nadal: {
    nom: "Rafael Nadal",
    nationalite: "🇪🇸 Espagne",
    naissance: "Né le 3 juin 1986 à Manacor",
    classement: "Ancien N°1 mondial (22 titres du Grand Chelem)",
    palmares: "🏆 Roland-Garros (14×), Australian Open (2×), Wimbledon (2×), US Open (4×)",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rafa_Nadal_2020.jpg/440px-Rafa_Nadal_2020.jpg"
  },
  federer: {
    nom: "Roger Federer",
    nationalite: "🇨🇭 Suisse",
    naissance: "Né le 8 août 1981 à Bâle",
    classement: "Ancien N°1 mondial (20 titres du Grand Chelem)",
    palmares: "🏆 Wimbledon (8×), Australian Open (6×), US Open (5×), Roland-Garros (1×)",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/R_federer.jpg/440px-R_federer.jpg"
  },
  sinner: {
    nom: "Jannik Sinner",
    nationalite: "🇮🇹 Italie",
    naissance: "Né le 16 août 2001 à San Candido",
    classement: "N°1 mondial (2 titres du Grand Chelem)",
    palmares: "🏆 Australian Open 2024, US Open 2024",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/sixty/Sinner_2023_Wimbledon_%28cropped%29.jpg/440px-Sinner_2023_Wimbledon_%28cropped%29.jpg"
  },
  alcaraz: {
    nom: "Carlos Alcaraz",
    nationalite: "🇪🇸 Espagne",
    naissance: "Né le 5 mai 2003 à El Palmar",
    classement: "N°2 mondial (4 titres du Grand Chelem)",
    palmares: "🏆 US Open 2022, Roland-Garros 2024, Wimbledon 2023 & 2024",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Carlos_Alcaraz_%282023_Australian_Open%29_02_cropped.jpg/440px-Carlos_Alcaraz_%282023_Australian_Open%29_02_cropped.jpg"
  }
};

const joueuses = {
  swiatek: {
    nom: "Iga Świątek",
    nationalite: "🇵🇱 Pologne",
    naissance: "Née le 31 mai 2001 à Varsovie",
    classement: "N°1 mondiale (5 titres du Grand Chelem)",
    palmares: "🏆 Roland-Garros (4×), US Open 2022",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Swiatek_2023_RG_%28cropped%29.jpg/440px-Swiatek_2023_RG_%28cropped%29.jpg"
  },
  sabalenka: {
    nom: "Aryna Sabalenka",
    nationalite: "🇧🇾 Biélorussie",
    naissance: "Née le 5 mai 1998 à Minsk",
    classement: "N°2 mondiale (3 titres du Grand Chelem)",
    palmares: "🏆 Australian Open 2023 & 2024, US Open 2023",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Aryna_Sabalenka_%282021_US_Open%29_03_%28cropped%29.jpg/440px-Aryna_Sabalenka_%282021_US_Open%29_03_%28cropped%29.jpg"
  },
  gauff: {
    nom: "Coco Gauff",
    nationalite: "🇺🇸 États-Unis",
    naissance: "Née le 13 mars 2004 à Atlanta",
    classement: "Top 5 mondiale (1 titre du Grand Chelem)",
    palmares: "🏆 US Open 2023",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Coco_Gauff_%282023_US_Open%29_02_%28cropped%29.jpg/440px-Coco_Gauff_%282023_US_Open%29_02_%28cropped%29.jpg"
  },
  williams: {
    nom: "Serena Williams",
    nationalite: "🇺🇸 États-Unis",
    naissance: "Née le 26 septembre 1981 à Saginaw",
    classement: "Ancienne N°1 mondiale (23 titres du Grand Chelem)",
    palmares: "🏆 Australian Open (7×), Roland-Garros (3×), Wimbledon (7×), US Open (6×)",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Serena_Williams_at_the_2013_US_Open.jpg/440px-Serena_Williams_at_the_2013_US_Open.jpg"
  },
  halep: {
    nom: "Simona Halep",
    nationalite: "🇷🇴 Roumanie",
    naissance: "Née le 27 septembre 1991 à Constanța",
    classement: "Ancienne N°1 mondiale (2 titres du Grand Chelem)",
    palmares: "🏆 Roland-Garros 2018, Wimbledon 2019",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Halep_2019_Wimbledon_%28cropped%29.jpg/440px-Halep_2019_Wimbledon_%28cropped%29.jpg"
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
  nationalite.innerHTML = "<strong>Nationalité :</strong> " + data.nationalite;
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

// Fermer en cliquant en dehors du popup
overlay.addEventListener("click", function(e) {
  if (e.target === overlay) fermerPopup();
});

// Fermer avec la touche Échap
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") fermerPopup();
});

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
