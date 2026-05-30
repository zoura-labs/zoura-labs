gsap.registerPlugin(ScrollTrigger);

const preloader = document.querySelector(".preloader");
const percentText = document.getElementById("percent");

let percent = 0;

// same behavior feel as your old code
let load = setInterval(() => {

    percent++; // keep original speed logic

    if (percent > 100) percent = 100;

    percentText.textContent = percent;

    if (percent === 100) {
        clearInterval(load);

        gsap.to(preloader, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
                preloader.style.display = "none";

                if (typeof reveal === "function") {
                    reveal();
                }
            }
        });
    }

}, 8); // SAME as your original speed











function loadWhatsAppBtn() {
    var url = 'https://cdn.waplus.io/waplus-crm/settings/ossembed.js';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
        "enabled": true,
        "chatButtonSetting": {
            "backgroundColor": "#16BE45",
            "ctaText": "",
            "borderRadius": "8",
            "marginLeft": "20",
            "marginBottom": "20",
            "marginRight": "20",
            "position": "right",
            "textColor": "#ffffff",
            "phoneNumber": "94767855906",
            "messageText": "Welcome to Zoura Labs",
            "trackClick": true
        },
        "brandSetting": {
            "brandName": "Zoura Labs",
            "brandSubTitle": "Typically replies within an hour",
            "headerTextColor": "#fff",
            "brandImg": "https://scrm-data-us-oss.oss-us-west-1.aliyuncs.com/sender/whatsapp_replace_crisp/logo.svg",
            "welcomeText": "Hi,there!\nHow can I help you?",
            "messageText": "Hello, I have a question about {{page_link}}",
            "backgroundColor": "#0a5f54",
            "ctaText": "Start Chat",
            "borderRadius": "20",
            "autoShow": false,
            "btnColor": "#16BE45",
            "phoneNumber": "94767855906",
            "trackClick": true
        }
    }
    s.onload = function () {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
}











const light = document.getElementById("light");

document.addEventListener("mousemove", (e) => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
});





// ====================================
// MAGNETIC BUTTON
// ====================================

const buttons = document.querySelectorAll(".cta");

buttons.forEach((button) => {
    let bounds;

    const xTo = gsap.quickTo(button, "x", {
        duration: 0.6,
        ease: "power3.out"
    });

    const yTo = gsap.quickTo(button, "y", {
        duration: 0.6,
        ease: "power3.out"
    });

    function move(x, y) {
        xTo(x);
        yTo(y);
    }

    function onMouseMove(e) {
        button.style.willChange = "transform";

        bounds = button.getBoundingClientRect();

        const relX = e.clientX - bounds.left - bounds.width / 2;
        const relY = e.clientY - bounds.top - bounds.height / 2;

        const strength = 0.35;

        move(relX * strength, relY * strength);

        button.style.boxShadow = `
            0 10px 30px rgba(157,124,255,0.25),
            ${relX * 0.05}px ${relY * 0.05}px 40px rgba(157,124,255,0.15)
        `;
    }

    function onMouseLeave() {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
        });

        button.style.boxShadow = "";
        button.style.willChange = "auto";
    }

    button.addEventListener("mousemove", onMouseMove);
    button.addEventListener("mouseleave", onMouseLeave);
});


const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// ====================================
// ORB FOLLOW
// ====================================

const orb = document.querySelector(".orb-1");

window.addEventListener("mousemove", (e) => {
    gsap.to(orb, {
        x: e.clientX * 0.15,
        y: e.clientY * 0.15,
        duration: 2,
        ease: "power4.out"
    });
});