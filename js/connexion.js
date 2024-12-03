// Sélectionner tous les liens du header
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    // Animation au survol (hover)
    link.addEventListener("mouseenter", () => {
        gsap.to(link, {
            scale: 1.1,          // Agrandissement léger
            duration: 0.2,
            ease: "power1.out",
        });
    });

    link.addEventListener("mouseleave", () => {
        gsap.to(link, {
            scale: 1,            // Retour à la taille normale
            duration: 0.2,
            ease: "power1.in",
        });
    });

    // Animation au clic
    link.addEventListener("click", (e) => {
        gsap.fromTo(link,
            { color: "#8a41fe" }, // Couleur initiale au clic
            {
                color: "black",     // Retour à la couleur d'origine
                duration: 0.5,
                ease: "power2.out",
            }
        );
    });
});