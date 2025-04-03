// Sélection des éléments
const burgerIcon = document.querySelector('.burger-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-content a'); // Tous les liens du menu

// Gestion du clic pour ouvrir/fermer le menu
burgerIcon.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
});

// Fermeture du menu en cliquant à l'extérieur
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
    }
});

// 🔥 Ajout de la fermeture du menu lorsqu'on clique sur un lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active'); // Ferme le menu après le clic
    });
});
