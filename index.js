const text = "Prince Dubey";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}

typing();

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.innerHTML =
        document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
});