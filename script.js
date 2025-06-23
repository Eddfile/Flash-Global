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
const cardsData = [
  {
    title: "Accident rutier pe DN1",
    description: "Coliziune între două autoturisme, se circulă cu dificultate.",
    imageUrl: "https://example.com/image1.jpg",
    sourceLink: "https://site-exemplu.ro/stire1"
  },
  {
    title: "Blocaj pe autostradă",
    description: "Un tir a derapat, traficul este deviat.",
    imageUrl: "https://example.com/image2.jpg",
    sourceLink: "https://site-exemplu.ro/stire2"
  }
  // poți adăuga câte accidente vrei aici
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <img src="${card.imageUrl}" alt="Imagine accident" class="card-image">
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-description">${card.description}</p>
      </div>
      <div class="card-footer">
        <a href="${card.sourceLink}" target="_blank" rel="noopener noreferrer">Vezi sursa</a>
      </div>
    `;
    container.appendChild(cardEl);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsData);
});
