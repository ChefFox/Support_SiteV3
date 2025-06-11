
function checkPassword() {
    const input = document.getElementById("password").value;
    if (input.toLowerCase() === "mellon") {
        window.location.href = "real.html";
    } else {
        alert("Incorrect password! You shall not pass!");
    }
}
