const toggleBtn = document.getElementById('toggle-dark');

// Setează iconița butonului în funcție de tema curentă
function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙';  // în light mode, arată luna
  } else {
    toggleBtn.textContent = '☀️';  // în dark mode, arată soarele
  }
}

// Comută clasa light-mode pe body și actualizează butonul
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButton();
});

// Setează starea inițială a butonului
updateButton();

// Datele cu accidente, poți adăuga câte vrei
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
  // adaugă aici alte accidente dacă vrei
];

// Funcția care creează cardurile și le adaugă în containerul din HTML
function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = ''; // golim containerul înainte să punem noile carduri

  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card-container';  // clasa din CSS-ul tău

    cardEl.innerHTML = `
      <a href="${card.sourceLink}" target="_blank" rel="noopener noreferrer">
        <img src="${card.imageUrl}" alt="Imagine accident" class="card-image">
      </a>
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

// Când pagina s-a încărcat, afișăm cardurile
document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsData);
});
