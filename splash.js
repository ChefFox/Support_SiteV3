
function checkPassword() {
    const overlay = document.getElementById("overlay");
    const fade = document.getElementById("fade");
    const input = document.getElementById("password").value.trim().toLowerCase();

    if (input === "mellon") {
        overlay.classList.remove("visible");
        overlay.classList.add("hidden");
        setTimeout(() => {
            fade.classList.remove("hidden");
            fade.classList.add("visible");
            setTimeout(() => {
                window.location.href = "real.html";
            }, 1500);
        }, 1200);
    } else {
        overlay.classList.remove("visible");
        overlay.classList.add("hidden");
        setTimeout(() => {
            overlay.classList.remove("hidden");
            overlay.classList.add("visible");
        }, 3000);
    }
}
