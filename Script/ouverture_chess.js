
function toggleAccordion(id) {
  const allAccordions = document.querySelectorAll('.accordion');
  const allBtns      = document.querySelectorAll('.voir-btn');
  const target       = document.getElementById('accordion-' + id);

  const isAlreadyOpen = target.classList.contains('open');

  // Fermer tous les accordéons ouverts
  allAccordions.forEach(function(acc) {
    acc.classList.remove('open');
    acc.style.maxHeight = null;
  });

  // Remettre tous les boutons à "Voir"
  allBtns.forEach(function(btn) {
    btn.textContent = 'Voir';
    btn.classList.remove('active-btn');
  });

  // Si l'accordéon ciblé était fermé, on l'ouvre
  if (!isAlreadyOpen) {
    target.classList.add('open');
    target.style.maxHeight = target.scrollHeight + 'px';

    // Mettre à jour le bouton correspondant
    const parentBlock = target.closest('.block');
    if (parentBlock) {
      const btn = parentBlock.querySelector('.voir-btn');
      if (btn) {
        btn.textContent = 'Fermer';
        btn.classList.add('active-btn');
      }
    }

    // Scroll doux vers l'accordéon
    setTimeout(function() {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}