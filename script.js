// Toggle dark mode
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
