const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("yumh-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");

  themeToggle.textContent = isDark
    ? "☀️ الوضع النهاري"
    : "🌙 الوضع الليلي";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  localStorage.setItem("yumh-theme", theme);
  updateThemeButton();
});

updateThemeButton();

document.getElementById("year").textContent =
  new Date().getFullYear();