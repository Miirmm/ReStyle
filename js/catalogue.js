// Vérifiez que GSAP et ScrollTrigger sont bien chargés
gsap.registerPlugin(ScrollTrigger);

// Animation de rotation au défilement
gsap.to(".img-shoes img", {
    scrollTrigger: {
        trigger: "#navbar", // L'élément déclencheur
        start: "top 100%",            // Début de l'animation
        end: "bottom 0%",           // Fin de l'animation
        scrub: 1,                    // Synchronise avec le défilement
    },
    rotation: 80,                 // Rotation en degrés
    duration: 1,                   // Durée de l'animation (peut être ignorée avec `scrub`)
});

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
                // Retour à la couleur d'origine
                duration: 0.5,
                ease: "power2.out",
            }
        );
    });
});


// Sélectionner le bouton
const button = document.querySelector(".button-cta-fill");

// Ajouter une animation au survol
button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        "--fill-width": "100%", // Remplit le fond
        duration: 0.5,
        ease: "power2.out",
    });
});

// Réinitialiser l'animation quand la souris sort
button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        "--fill-width": "0%", // Vide le fond
        duration: 0.5,
        ease: "power2.in",
    });
});
