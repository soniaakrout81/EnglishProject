const checkbox = document.getElementById('modeToggle');
const body = document.body;

const savedmode = localStorage.getItem('mode') || 'night';

if (savedmode === "night") {
  body.classList.remove("morning-mode");
  checkbox.checked = true; 
} else {
  body.classList.add("morning-mode");
  checkbox.checked = false; 
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked == false) {
    body.classList.add('morning-mode');
    localStorage.setItem('mode','morning');
  } else {
    body.classList.remove('morning-mode');
    localStorage.setItem('mode','night');
  }
});

const langSwitcher = document.getElementById('langSwitcher');
const elements = document.querySelectorAll('[data-i18n]');



