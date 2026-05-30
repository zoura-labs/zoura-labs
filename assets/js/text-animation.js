const words = [
    "Websites",
    "Products",
    "Apps",
    "Solutions",
    "Softwares",
    "Platforms",
    "Systems",
];

let current = 0;
const wordEl = document.getElementById("word");

// CREATE CHARACTERS
function createWord(word) {
    wordEl.innerHTML = "";

    word.split("").forEach(letter => {
        const span = document.createElement("span");
        span.classList.add("char");
        span.textContent = letter;
        wordEl.appendChild(span);
    });
}

// ANIMATE IN (SMOOTH + CONTROLLED)
function animateIn() {
    const chars = document.querySelectorAll(".char");

    gsap.fromTo(chars,
        {
            y: 20,
            opacity: 0,
            scale: 0.98
        },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04
        }
    );
}

// ANIMATE OUT (CLEAN EXIT)
function animateOut(callback) {
    const chars = document.querySelectorAll(".char");

    gsap.to(chars, {
        y: -15,
        opacity: 0,
        scale: 1.02,
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.03,
        onComplete: callback
    });
}

// LOOP
function nextWord() {
    animateOut(() => {
        current = (current + 1) % words.length;
        createWord(words[current]);
        animateIn();
    });
}

// INIT
createWord(words[0]);
animateIn();

setInterval(nextWord, 2800);