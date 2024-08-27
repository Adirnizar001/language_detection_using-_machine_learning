// script.js

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        updateButtonText("dark");
    }

    themeToggle.addEventListener("click", toggleTheme);
});

function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        updateButtonText("light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark");
        updateButtonText("dark");
        localStorage.setItem("theme", "dark");
    }
}

function updateButtonText(theme) {
    const themeToggle = document.getElementById("theme-toggle");
    if (theme === "dark") {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
}
