document.addEventListener("DOMContentLoaded", function () {
    console.log("script3.js chargé, début de l'observation.");

    const elements = document.querySelectorAll(".entier2-comp .mere");

    if (elements.length === 0) {
        console.error("Aucune case compétence trouvée !");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Si l'élément entre dans la vue, on lui ajoute la classe visible
                    entry.target.classList.add("visible");
                } else {
                    // 🔥 Retirer la classe SEULEMENT si l'élément est complètement sorti
                    setTimeout(() => {
                        if (!entry.isIntersecting) {
                            entry.target.classList.remove("visible");
                        }
                    }, 500); // Délai avant suppression (optionnel)
                }
            });
        },
        { threshold: 0.2 } // Déclenche lorsque 20% de l'élément est visible
    );

    elements.forEach((el) => observer.observe(el));
});
