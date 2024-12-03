import { gsap } from "https://cdn.skypack.dev/gsap@3.11.4";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";

const ourText = new splitType('p.our-text', { types: 'chars' })
const chars = ourText.chars

gsap.fromTo(
    chars,
    {
        y: 100,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
    }
)