// =============================
// LOADER
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});

// =============================
// TYPING EFFECT
// =============================

const roles = [
    "AI Research Scientist",
    "Machine Learning Engineer",
    "Deep Learning Enthusiast",
    "Future AI Innovator",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

// =============================
// PARTICLES.JS CONFIG
// =============================

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },

            color: {
                value: "#00a8ff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.4,
                random: true
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#00a8ff",
                opacity: 0.2,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true
            },

            modes: {

                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.6
                    }
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    });
}

// =============================
// NAVBAR SHADOW ON SCROLL
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(2,6,23,0.95)";

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.4)";

    } else {

        header.style.background =
            "rgba(2,6,23,0.75)";

        header.style.boxShadow = "none";
    }

});

// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .glass-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < window.innerHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0px)";

        }
    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// =============================
// COUNTER ANIMATION
// =============================

const stats = document.querySelectorAll(".stat h3");

function animateCounter() {

    stats.forEach(stat => {

        const targetText = stat.innerText;

        if (
            targetText.includes("+") ||
            !isNaN(targetText)
        ) {

            const target =
                parseInt(targetText);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 40;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    stat.innerText =
                        Math.ceil(count) + "+";

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    stat.innerText =
                        target + "+";
                }
            };

            updateCounter();
        }
    });
}

let countersStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".hero-stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop <
            window.innerHeight - 100 &&
        !countersStarted
    ) {

        countersStarted = true;
        animateCounter();
    }

});

// =============================
// ACTIVE NAVIGATION LINK
// =============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });

});

// =============================
// CONTACT FORM
// =============================

const form =
    document.querySelector(
        ".contact-form"
    );

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you for reaching out! This demo form is currently not connected to a backend."
            );

            form.reset();
        }
    );
}

// =============================
// PROFILE IMAGE PARALLAX
// =============================

const profileImage =
    document.querySelector(
        ".profile-image"
    );

window.addEventListener(
    "mousemove",
    (e) => {

        if (!profileImage) return;

        const x =
            (window.innerWidth / 2 - e.clientX) / 40;

        const y =
            (window.innerHeight / 2 - e.clientY) / 40;

        profileImage.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);

// =============================
// CONSOLE EASTER EGG
// =============================

console.log(
    "%cWelcome to Samuel Muchasi's AI Portfolio",
    "color:#00a8ff;font-size:20px;font-weight:bold;"
);

console.log(
    "%cFuture AI Research Scientist 🚀",
    "color:white;font-size:14px;"
);