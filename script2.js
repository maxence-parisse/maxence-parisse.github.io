document.addEventListener("DOMContentLoaded", function () {
    console.log("script2.js chargé, début de l'observation.");

    const elements = document.querySelectorAll(".case-presentation-total a");

    if (elements.length === 0) {
        console.error("Aucune case trouvée !");
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    console.log(`Animation déclenchée pour ${entry.target}`);
                    observer.unobserve(entry.target); // On stoppe l'observation après l'animation
                }
            });
        },
        { threshold: 0.2 } // Déclenche lorsque 20% de la case est visible
    );

    elements.forEach((el) => observer.observe(el));
});

