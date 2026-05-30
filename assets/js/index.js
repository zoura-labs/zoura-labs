gsap.registerPlugin(ScrollTrigger);

// HERO SECTION ANIMATIONS
gsap.to(".content", {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        gsap.to(".scroll-cue", {
            opacity: 0,
            y: 20,
            duration: .3
        });
    } else {
        gsap.to(".scroll-cue", {
            opacity: 1,
            y: 0,
            duration: .3
        });
    }
});




// STATS SECTION ANIMATIONS
const stats_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".stats-section",
        start: "top 70%",
    }
});

stats_tl.from(".stats-section .section-tag", {
    y: 30,
    opacity: 0,
    duration: .8
})

    .from(".stats-section .heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=.4")

    .from(".stats-section .stat", {
        y: 100,
        opacity: 0,
        stagger: .15,
        duration: 1.4,
        ease: "expo.out"
    }, "-=.8");

// gsap.to(".stat .line", {
//     width: "100%",
//     duration: 1.4,
//     stagger: .15,
//     ease: "power3.out",

//     scrollTrigger: {
//         trigger: ".stats-section",
//         start: "top 70%"
//     }
// });

document.querySelectorAll(".counter").forEach(counter => {
    let value = Number(counter.dataset.value);
    let suffix = counter.dataset.suffix;
    let obj = { val: 0 };

    gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        snap: {
            val: 1
        },
        scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            once: true
        },
        onUpdate() {
            counter.textContent = obj.val + suffix;
        }
    });
});








// SERVICES SECTION ANIMATIONS
const services_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
    }
});

services_tl.from(".services .section-tag", {
    y: 30,
    opacity: 0,
    duration: 1.2
})

    .from(".services .heading", {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out"
    }, "-=.4")
    .from(".services .description", {
        y: 30,
        opacity: 0,
        duration: .8,
        ease: "power4.out"
    }, "-=.8");

document.querySelectorAll(".service-card").forEach(card => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: .8,
        ease: "power4.out",
        // stagger: 0.02,
        clearProps: "opacity,transform",
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});





















// PROJECTS SECTION ANIMATIONS
const projects = document.querySelectorAll(".project");
const navItems = document.querySelectorAll(".nav-item");

const data = [
    {
        role: "UI/UX + Dev",
        tech: "Vite · React · Tailwind CSS",
        year: "2025"
    },
    {
        role: "UI/UX + Dev",
        tech: "Angular",
        year: "2025"
    },
    {
        role: "UI/UX + Full Stack",
        tech: "Node.js · HTML · CSS · JS",
        year: "2026"
    }
];

function setActive(i) {

    navItems.forEach(n => n.classList.remove("active"));
    navItems[i].classList.add("active");

    document.getElementById("role").textContent = data[i].role;
    document.getElementById("tech").textContent = data[i].tech;
    document.getElementById("year").textContent = data[i].year;
}

/* SCROLL TRIGGER */
projects.forEach((p, i) => {

    ScrollTrigger.create({

        trigger: p,
        start: "top center",
        end: "bottom center",

        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i)

    });

});

/* CLICK NAV SCROLL */
navItems.forEach((nav, i) => {
    nav.addEventListener("click", () => {
        projects[i].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

gsap.from(".work .section-tag", {
    y: 80,
    opacity: 0,
    duration: .8,
    scrollTrigger: {
        trigger: ".work .section-tag",
        start: "top 70%",
    }
});
gsap.from(".work .heading", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".work .heading",
        start: "top 70%",
    }
}, "-=.4");
gsap.from(".work .description", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".work .description",
        start: "top 70%",
    }
}, "-=.8");

document.querySelectorAll(".work .project").forEach(project => {
    gsap.from(project, {
        y: 80,
        opacity: 0,
        duration: .8,
        stagger: .3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: project,
            start: "top 85%",
        }
    });
});

document.querySelectorAll(".work .info-box").forEach(item => {
    gsap.from(item, {
        y: 80,
        opacity: 0,
        duration: .8,
        stagger: .3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
        }
    });
});

gsap.to(".work .view-all", {
    y: 0,
    opacity: 1,
    duration: .8,
    stagger: .3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".work .view-all",
        start: "top 85%",
    }
});

document.querySelectorAll(".work .work-nav").forEach(item => {
    gsap.from(item, {
        y: 120,
        opacity: 0,
        duration: .8,
        stagger: .3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
        }
    });
});









// PRICING SECTION ANIMATION
gsap.from(".pricing-section .section-tag", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".pricing-section .section-tag",
        start: "top 80%"
    }
});

gsap.from(".pricing-section .heading", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    scrollTrigger: {
        trigger: ".pricing-section .heading",
        start: "top 80%"
    }
});

gsap.from(".pricing-section .description", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
        trigger: ".pricing-section .description",
        start: "top 80%"
    }
});

gsap.to(".pricing-section .card", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power4.out",
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".pricing-section .card",
        start: "top 80%",
        once: true
    }
});


// Modal logic
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

// Attach event listeners to all "View Packages" buttons
document.querySelectorAll(".pkg-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const targetId = btn.getAttribute("href").substring(1); // e.g. "build"
        const section = document.getElementById(targetId);

        // Clone the related package section into modal
        modalBody.innerHTML = section.innerHTML;

        // Show modal
        // modal.style.display = "flex";
        modal.style.transform = "translateY(0)";

        // Add WhatsApp links inside modal
        modalBody.querySelectorAll(".tier").forEach(tier => {
            const title = tier.querySelector("h4").innerText;
            const lkrPrice = tier.querySelector(".lkr-price")?.innerText || "Custom Quote";
            const usdPrice = tier.querySelector(".usd-price")?.innerText || "";
            const category = section.querySelector("h2").innerText;

            const waLink = document.createElement("a");
            waLink.href = `https://wa.me/94767855906?text=Hello,%20I'm%20interested%20in%20your%20${category}%20-%20${title}%20package.%20The%20listed%20price%20is%20${lkrPrice}${usdPrice ? " (" + usdPrice + ")" : ""}.%20Can%20you%20share%20more%20details%20and%20next%20steps?`;
            waLink.textContent = "Contact via WhatsApp";
            waLink.className = "btn whatsapp-btn";
            tier.appendChild(waLink);
        });
    });
});

// Close modal
closeBtn.onclick = () => modal.style.transform = "translateY(100%)";
window.onclick = e => { if (e.target == modal) modal.style.transform = "translateY(100%)"; };












// TECH STACK SECTION ANIMATIONS
gsap.from(".tech-stack .section-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".tech-stack .section-tag",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".tech-stack .heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".tech-stack .heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".tech-stack .description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".tech-stack .description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

/* =========================
ROW REVEAL
========================= */
gsap.utils.toArray(".tech-row").forEach((row) => {
    gsap.from(row, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: row,
            start: "top 90%",
            once: true
        }
    });

    // const pills = row.querySelectorAll(".tech-stack .tech-list .tech-pill");

    // gsap.from(pills, {
    //     opacity: 0,
    //     y: 20,
    //     scale: 0.95,
    //     duration: 0.6,
    //     stagger: 0.05,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //         trigger: row,
    //         start: "top 88%",
    //         once: true
    //     }
    // });
});








// PROCESS SECTION ANIMATIONS
gsap.from(".process-section .section-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".process-section .section-tag",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".process-section .heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".process-section .heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".process-section .description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".process-section .description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});


const dots = document.querySelectorAll(".nav-dot");
const contents = document.querySelectorAll(".step-content");

dots.forEach(dot => {
    dot.addEventListener("click", () => {

        dots.forEach(d => d.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        dot.classList.add("active");

        document
            .querySelector(`.step-content[data-step="${dot.dataset.step}"]`)
            .classList.add("active");

    });
});













// WHY CHOOSE US SECTION ANIMATIONS
gsap.from(".why-us .section-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".why-us .section-tag",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".why-us .heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".why-us .heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".why-us .description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".why-us .description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".why-us .column-title", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".why-us .column-title",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".why-us .why-us-item", {
    opacity: 0,
    y: 40,
    duration: .8,
    stagger: .06,
    scrollTrigger: {
        trigger: ".why-us .comparison",
        start: "top 70%"
    }
});

gsap.from(".why-us .stat-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: .15,
    scrollTrigger: {
        trigger: ".why-us-stats",
        start: "top 85%"
    }
});






















// TESTIMONIALS SECTION ANIMATIONS
gsap.from(".testimonials .section-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".testimonials .section-tag",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".testimonials .heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".testimonials .heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".testimonials .description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".testimonials .description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.utils.toArray(".item").forEach(item => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            // toggleActions: "play none none reverse"
            // scrub: true // add if you want scroll-linked animation
        }
    });

    tl.from(item, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});

gsap.utils.toArray(".number").forEach(num => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: num,
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    tl.from(num, {
        opacity: 0,
        scale: 0.7,
        duration: 1.5,
        ease: "power3.out"
    });
});







// FAQ SECTION ANIMATIONS
gsap.from(".faq-section .section-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".faq-section .section-tag",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".faq-section .heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".faq-section .heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".faq-section .description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".faq-section .description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.utils.toArray(".faq-section .faq-item").forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
});

document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});















// CTA SECTION ANIMATIONS
gsap.from(".cta-section .section-tag", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".cta-section .section-tag",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".cta-section .heading", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cta-section .heading",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".cta-section .description", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cta-section .description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".cta-section .cta", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".cta-section .cta",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});