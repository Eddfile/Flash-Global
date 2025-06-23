const toggleBtn = document.getElementById('toggle-dark');

function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButton();
});

updateButton();

const cardsData = [
  {
    title: "Bolojan Premier",
    description: "Guvernul Bolojan a fost votat în Parlament. Noul executiv a trecut cu 301 voturi în favoarea sa și 9 voturi „împotrivă”. Liderii partidelor care îl susțin au semnat de dimineață protocolul coaliției de guvernare.",
    imageUrl: "https://image.stirileprotv.ro/media/images/800x450/Jun2025/41145478.jpg",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    sourceLinks: [
      "https://stirileprotv.ro/stiri/actualitate/guvernul-bolojan-votat-parlament.html",
      "https://news.example.com/source2",
      "https://anothernews.example.com/source3"
    ]
  },
  {
    title: "Blocaj pe autostradă",
    description: "Un tir a derapat, traficul este deviat.",
    imageUrl: "https://example.com/image2.jpg",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    sourceLinks: [
      "https://site-exemplu.ro/stire2",
      "https://example.org/alt-source",
      "https://anotherexample.net/source"
    ]
  }
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';

    // Creează butoanele verzi pentru fiecare sursă
    const buttonsHtml = card.sourceLinks.map(link => 
      `<a href="${link}" target="_blank" rel="noopener noreferrer">Vezi sursa</a>`
    ).join('');

    cardEl.innerHTML = `
      <div class="label-tag">
        <img src="${card.flagUrl}" alt="${card.tag} steag" />
        <span>${card.tag}</span>
      </div>
      <img src="${card.imageUrl}" alt="Imagine știre" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-description">${card.description}</p>
        <div class="card-source-buttons">
          ${buttonsHtml}
        </div>
      </div>
      <div class="card-footer">
        <a href="${card.sourceLinks[0]}" target="_blank" rel="noopener noreferrer">Vezi sursa</a>
      </div>
    `;

    container.appendChild(cardEl);
  });
}

renderCards(cardsData);
