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
    title: "Conflictul Israel-Iran explodează: Viitorul Orientului Mijlociu în pericol!",
    description: "În ultimele zile, Statele Unite au lansat atacuri militare asupra a trei situri nucleare iraniene, vizând oprirea programului nuclear al Iranului. Israel a susținut aceste operațiuni prin atacuri aeriene țintite, crescând tensiunile regionale. Rusia a avertizat asupra riscului unui conflict extins, iar Iranul a promis represalii dure.
",
    imageUrl: "https://i.ytimg.com/vi/Hwy9PXsJnjE/hqdefault.jpg",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Israel.svg",
    sourceLinks: [
      "https://www.thetimes.com/world/middle-east/israel-iran/article/evin-prison-iran-israel-war-us-latest-news-mhnbjpr70?region=global",
      "https://www.reuters.com/world/middle-east/israel-signals-iran-campaign-can-end-soon-much-hinges-tehran-2025-06-23/",
      "https://stirileprotv.ro/stiri/international/iranul-si-israelul-lanseaza-noi-atacuri-dupa-ce-teheranul-a-exclus-negocierile-pe-subiectul-nuclear.html"
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
