// --- 1. Animation du cercle (respiration) ---
const circle = document.getElementById("breath-circle");
const breathBtn = document.getElementById("breathBtn");
const message = document.getElementById("message");

let breathing = false;

breathBtn.addEventListener("click", () => {
    breathing = !breathing;

    if (breathing) {
        messageFade("Inspire... expire...");
        startBreathing();
        breathBtn.textContent = "Arrêter";
    } else {
        stopBreathing();
        messageFade("");
        breathBtn.textContent = "Respirer ensemble";
    }
});

function startBreathing() {
    circle.style.transform = "scale(1.25)";

    setTimeout(() => {
        if (breathing) {
            circle.style.transform = "scale(1)";
            setTimeout(() => {
                if (breathing) startBreathing();
            }, 4000);
        }
    }, 4000);
}

function stopBreathing() {
    circle.style.transform = "scale(1)";
}


// --- 2. Fade in / fade out message ---
function messageFade(text) {
    message.classList.remove("fade-in");
    message.classList.add("fade-out");

    setTimeout(() => {
        message.textContent = text;
        void message.offsetWidth;
        message.classList.remove("fade-out");
        message.classList.add("fade-in");
    }, 500);
}


// ---- 3.message automatique ---
const messages = [
    "Ça va aller.",
    "Prends ton temps.",
    "Tu mérites de respirer.",
    "T'es pas obligé d'être fort tout le temps.",
    "Tu peux revenir quand tu veux.",
    "Tu n'es pas seul."
];

setInterval(() => {
    if (!breathing) return;
    const random = Math.floor(Math.random() * messages.length);
    breathing === true
    messageFade(messages[random]);
}, 9000);

const ambiance = document.getElementById('ambiance');
ambiance.volume = 0.1