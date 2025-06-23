const toggleBtn = document.getElementById('toggle-dark');

function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙';  // în modul light, arată icon lună
  } else {
    toggleBtn.textContent = '☀️';  // în dark, icon soare
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButton();
});

updateButton();

const cardsData = [
  {
    title: "Accident rutier pe DN1",
    description: "Coliziune între două autoturisme, se circulă cu dificultate.",
    imageUrl: "https://example.com/image1.jpg",
    sourceLink: "https://site-exemplu.ro/stire1",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    likes: 10,
    dislikes: 2,
  },
  {
    title: "Blocaj pe autostradă",
    description: "Un tir a derapat, traficul este deviat.",
    imageUrl: "https://example.com/image2.jpg",
    sourceLink: "https://site-exemplu.ro/stire2",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    likes: 8,
    dislikes: 0,
  }
  // poți adăuga mai multe știri aici
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';

    cardEl.innerHTML = `
      <div class="label-tag">
        <img src="${card.flagUrl}" alt="${card.tag} steag" class="flag-icon" />
        <span>${card.tag}</span>
      </div>
      <img src="${card.imageUrl}" alt="Imagine știre" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-description">${card.description}</p>
      </div>
      <div class="card-interaction">
        <div class="button-with-count like">
          <button title="Like" data-index="${index}" data-type="like"><i class="far fa-thumbs-up"></i></button>
          <span>${card.likes}</span>
        </div>
        <div class="button-with-count dislike">
          <button title="Dislike" data-index="${index}" data-type="dislike"><i class="far fa-thumbs-down"></i></button>
          <span>${card.dislikes}</span>
        </div>
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
