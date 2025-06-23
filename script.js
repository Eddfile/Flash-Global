const toggleBtn = document.getElementById('toggle-dark');

// La încărcare, setăm tema după clasa body (default dark)
function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙';  // lumina = lună icon
  } else {
    toggleBtn.textContent = '☀️';  // întuneric = soare icon
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButton();
});

// Setăm butonul la încărcare
updateButton();
