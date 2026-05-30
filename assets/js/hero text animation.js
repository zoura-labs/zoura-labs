// ====================================
// WORDS
// ====================================

const words = [
    "Websites",
    "Products",
    "Solutions",
    "Experiences",
    "Platforms",
    "Systems",
];

let current = 0;
const wordEl = document.getElementById("word");

// ====================================
// CREATE LETTER SPANS
// ====================================

function createWord(word) {
    wordEl.innerHTML = "";
    word.split("").forEach(letter => {
        const span = document.createElement("span");
        span.classList.add("char");
        span.innerHTML = letter === " " ? "&nbsp;" : letter;
        wordEl.appendChild(span);
    });
}

// ====================================
// ANIMATE WORD IN
// ====================================

function animateIn() {
    const chars = document.querySelectorAll(".char");

    gsap.fromTo(
        chars,
        {
            x: () => gsap.utils.random(-250, 250),
            y: () => gsap.utils.random(-250, 250),
            rotationX: () => gsap.utils.random(-180, 180),
            rotationY: () => gsap.utils.random(-180, 180),
            rotationZ: () => gsap.utils.random(-180, 180),
            scale: () => gsap.utils.random(0.2, 1.5),
            opacity: 0,
            filter: "blur(20px)"
        },
        {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: {
                each: 0.03,
                from: "random"
            },
            ease: "expo.out"
        }
    );
}

// ====================================
// ANIMATE WORD OUT
// ====================================

function animateOut(callback) {
    const chars = gsap.utils.shuffle(
        Array.from(document.querySelectorAll(".char"))
    );

    gsap.to(chars, {
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        rotationX: () => gsap.utils.random(-360, 360),
        rotationY: () => gsap.utils.random(-360, 360),
        rotationZ: () => gsap.utils.random(-180, 180),
        scale: () => gsap.utils.random(0.1, 0.8),

        opacity: 0,
        filter: "blur(20px)",

        duration: () => gsap.utils.random(0.5, 1),

        stagger: {
            each: 0.03,
            from: "random"
        },
        ease: "expo.in",
        onComplete: callback
    });
}

// ====================================
// CHANGE WORD LOOP
// ====================================

function nextWord() {
    animateOut(() => {
        current++;
        if (current >= words.length) {
            current = 0;
        }
        createWord(words[current]);
        animateIn();
    });
}

// ====================================
// INITIAL
// ====================================

createWord(words[0]);
animateIn();

// ====================================
// LOOP
// ====================================

setInterval(nextWord, 2800);