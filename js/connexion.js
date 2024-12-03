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







const rotatingDiv = document.querySelector(".rotating-div");

// Animation au survol
rotatingDiv.addEventListener("mouseenter", () => {
    gsap.to(rotatingDiv, {
        rotation: -10, // Rotation légère à gauche
        duration: 0.4,
        ease: "power2.out",
    });
});

// Retour à l'état initial lorsque la souris quitte
rotatingDiv.addEventListener("mouseleave", () => {
    gsap.to(rotatingDiv, {
        rotation: 0, // Retour à l'angle de départ
        duration: 0.4,
        ease: "power2.in",
    });
});