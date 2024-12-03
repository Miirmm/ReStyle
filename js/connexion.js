// Vérifiez que GSAP et ScrollTrigger sont bien chargés
gsap.registerPlugin(ScrollTrigger);

// Animation de rotation au défilement
gsap.to(".image-container img", {
    scrollTrigger: {
        trigger: ".image-container", // L'élément déclencheur
        start: "top 80%",            // Début de l'animation
        end: "bottom 20%",           // Fin de l'animation
        scrub: 1,                    // Synchronise avec le défilement
    },
    rotation: 40,
});