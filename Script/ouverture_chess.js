/* ============================================================
   accordion.js — Gestion des accordéons de la page Échecs
   Lié à : Chess.html  |  Styles dans : chess.css
   ============================================================ */

function toggleAccordion(id) {
  var allAccordions = document.querySelectorAll('.accordion');
  var allBtns       = document.querySelectorAll('.voir-btn');
  var target        = document.getElementById('accordion-' + id);

  var isAlreadyOpen = target.classList.contains('open');

  /* --- Fermer tous les accordéons --- */
  allAccordions.forEach(function(acc) {
    acc.classList.remove('open');
    acc.style.maxHeight = null;
  });

  /* --- Remettre tous les boutons à "Voir" --- */
  allBtns.forEach(function(btn) {
    btn.textContent = 'Voir';
    btn.classList.remove('active-btn');
  });

  /* --- Ouvrir l'accordéon ciblé si il était fermé --- */
  if (!isAlreadyOpen) {
    target.classList.add('open');
    target.style.maxHeight = target.scrollHeight + 'px';

    /* Mettre à jour le bouton du bloc parent */
    var parentBlock = target.closest('.block');
    if (parentBlock) {
      var btn = parentBlock.querySelector('.voir-btn');
      if (btn) {
        btn.textContent = 'Fermer';
        btn.classList.add('active-btn');
      }
    }

    /* Scroll doux vers l'accordéon ouvert */
    setTimeout(function() {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}