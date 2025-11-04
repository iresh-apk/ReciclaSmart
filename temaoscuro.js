document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".icon-btn .material-symbols-outlined");
  const rootHtml = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    rootHtml.classList.add("dark");
    toggleBtn.textContent = "light_mode";
  }

  toggleBtn.parentElement.addEventListener("click", () => {
    const isDark = rootHtml.classList.toggle("dark");
    toggleBtn.textContent = isDark ? "light_mode" : "dark_mode";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});