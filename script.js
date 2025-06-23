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
    title: "Bolojan Premier",
    description: "Guvernul Bolojan a fost votat în Parlament. Noul executiv a trecut cu 301 voturi în favoarea sa și 9 voturi „împotrivă”. Liderii partidelor care îl susțin au semnat de dimineață protocolul coaliției de guvernare.",
    imageUrl: "https://image.stirileprotv.ro/media/images/800x450/Jun2025/41145478.jpg",
    sourceLink: "https://stirileprotv.ro/stiri/actualitate/guvernul-bolojan-votat-parlament.html",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    likes: 10,
    dislikes: 0
  },
  {
    title: "Blocaj pe autostradă",
    description: "Un tir a derapat, traficul este deviat.",
    imageUrl: "https://example.com/image2.jpg",
    sourceLink: "https://site-exemplu.ro/stire2",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    likes: 5,
    dislikes: 3
  }
  // Mai poți adăuga știri noi aici, cu likes și dislikes initiale
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.style.position = 'relative';

    cardEl.innerHTML = `
      <div class="label-tag">
        <img src="${card.flagUrl}" alt="${card.tag} steag" />
        <span>${card.tag}</span>
      </div>
      <img src="${card.imageUrl}" alt="Imagine știre" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-description">${card.description}</p>
      </div>
      <div class="card-footer">
        <a href="${card.sourceLink}" target="_blank" rel="noopener noreferrer">Vezi sursa</a>
      </div>

      <div class="card-interaction">
        <div class="button-with-count like">
          <button title="Like" data-index="${index}" data-type="like"><i class="fa-regular fa-thumbs-up"></i></button>
          <span>${card.likes}</span>
        </div>
        <div class="button-with-count dislike">
          <button title="Dislike" data-index="${index}" data-type="dislike"><i class="fa-regular fa-thumbs-down"></i></button>
          <span>${card.dislikes}</span>
        </div>
      </div>
    `;
    container.appendChild(cardEl);
  });

  // Adaugăm event listener la butoanele like/dislike
  document.querySelectorAll('.card-interaction button').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.currentTarget.getAttribute('data-index');
      const type = e.currentTarget.getAttribute('data-type');

      if (type === 'like') {
        cardsData[index].likes++;
      } else if (type === 'dislike') {
        cardsData[index].dislikes++;
      }
      renderCards(cardsData);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsData);
});
