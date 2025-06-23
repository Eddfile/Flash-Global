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

updateButton();

const cardsData = [
  {
    title: "Pandemia COVID-19 încă afectează lumea",
    description: "Varianta Delta provoacă creșteri de cazuri în mai multe țări.",
    imageUrl: "https://cdn.britannica.com/94/1894-050-2C9E3B1B/Coronavirus-microscope-virus-COVID-19.jpg",
    sourceLink: "https://www.who.int"
  },
  {
    title: "Conflicte internaționale escaladează",
    description: "Tensiunile dintre SUA și alte puteri mondiale cresc în contextul războiului.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/US-Flag_and_Map_of_Russia.svg/1200px-US-Flag_and_Map_of_Russia.svg.png",
    sourceLink: "https://www.bbc.com/news/world"
  },
  {
    title: "Papa Francisc a făcut declarații importante",
    description: "Apel către pace și solidaritate globală în fața crizelor mondiale.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pope_Francis_in_March_2013.jpg/800px-Pope_Francis_in_March_2013.jpg",
    sourceLink: "https://www.vaticannews.va"
  }
  // poți adăuga mai multe aici
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
      <img src="${card.imageUrl}" alt="Imagine pentru ${card.title}" class="card-image">
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
