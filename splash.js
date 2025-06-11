
function checkPassword() {
    const overlay = document.getElementById("overlay");
    const input = document.getElementById("password").value.trim().toLowerCase();

    if (input === "mellon") {
        overlay.classList.remove("visible");
        overlay.classList.add("hidden");
        setTimeout(() => {
            window.location.href = "real.html";
        }, 1500);
    } else {
        overlay.classList.remove("visible");
        overlay.classList.add("hidden");
        setTimeout(() => {
            overlay.classList.remove("hidden");
            overlay.classList.add("visible");
        }, 3000);
    }
}
