const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const columns = document.getElementById("columns");

// Check For Theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme, false);

// Switch Theme Dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgba(0,0,0,.5)";
  columns.style.backgroundColor = "rgba(255,255,255,.5)";
  toggleIcon.innerHTML = `<span class="toggle-text">Dark Mode</span><i class="fas fa-moon"></i>`;
  image1.innerHTML = `<h2>Web Innovation</h2><img src="img/undraw_proud_coder_dark.svg" loading="lazy" />`;
  image2.innerHTML = `<h2>Problem Solving</h2><img src="img/undraw_feeling_proud_dark.svg" loading="lazy" />`;
  image3.innerHTML = `<h2>High Concept</h2><img src="img/undraw_conceptual_idea_dark.svg" loading="lazy" />`;
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgba(255,255,255,.5)";
  columns.style.backgroundColor = "rgba(0,0,0,.5)";
  toggleIcon.innerHTML = `<span class="toggle-text">Light Mode</span><i class="fas fa-sun"></i>`;
  image1.innerHTML = `<h2>Web Innovation</h2><img src="img/undraw_proud_coder_light.svg" loading="lazy" />`;
  image2.innerHTML = `<h2>Problem Solving</h2><img src="img/undraw_feeling_proud_light.svg" loading="lazy" />`;
  image3.innerHTML = `<h2>High Concept</h2><img src="img/undraw_conceptual_idea_light.svg" loading="lazy" />`;
}
