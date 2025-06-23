const toggleBtn = document.getElementById('toggle-dark');

function updateButton() {
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButton();
});

updateButton();

const cardsData = [
  {
    title: "Bolojan Premier",
    description: "Guvernul Bolojan a fost votat în Parlament. Noul executiv a trecut cu 301 voturi în favoarea sa.",
    imageUrl: "https://image.stirileprotv.ro/media/images/800x450/Jun2025/62554578.jpg",
    sourceLink: "https://stirileprotv.ro/stiri/politic/guvernul-bolojan-la-vot-in-parlament-ministrii-propusi-avizati-pe-banda-rulanta-in-comisii.html",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg"
  },
  {
    title: "COVID-19 încă afectează lumea",
    description: "Varianta Delta provoacă creșteri de cazuri în mai multe țări.",
    imageUrl: "https://cdn.britannica.com/94/1894-050-2C9E3B1B/Coronavirus-microscope-virus-COVID-19.jpg",
    sourceLink: "https://www.who.int",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },
  {
    title: "Papa face apel la pace",
    description: "Papa Francisc cere solidaritate globală în fața crizelor mondiale.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Pope_Francis_in_March_2013.jpg",
    sourceLink: "https://www.vaticannews.va",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  }
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <div class="label-tag">
        <img src="${card.flagUrl}" alt="${card.tag}" class="flag-icon" />
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
    `;
    container.appendChild(cardEl);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsData);
});
