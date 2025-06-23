const toggleBtn = document.getElementById('toggle-dark');

function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙'; // icon luna pentru mod light
  } else {
    toggleBtn.textContent = '☀️'; // icon soare pentru mod dark
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButton();
});

updateButton();

const cardsData = [
  {
    title: "COVID-19: Situația la nivel global",
    description: "Ultimele cifre arată o scădere a cazurilor, dar noi variante sunt monitorizate.",
    imageUrl: "https://cdn.pixabay.com/photo/2020/03/20/15/50/virus-4941983_1280.jpg",
    sourceLink: "https://www.who.int/"
  },
  {
    title: "Conflictul din Ucraina escaladează",
    description: "Surse oficiale confirmă noi atacuri în zona de conflict și mobilizări militare.",
    imageUrl: "https://cdn.pixabay.com/photo/2022/02/28/13/14/ukraine-7031880_1280.jpg",
    sourceLink: "https://www.bbc.com/news/world-europe-60506682"
  },
  {
    title: "Putin atacă SUA: Analiză geopolitică",
    description: "Comentarii și reacții internaționale față de ultimele declarații ale președintelui rus.",
    imageUrl: "https://cdn.pixabay.com/photo/2018/01/23/19/42/vladimir-putin-3109296_1280.jpg",
    sourceLink: "https://www.cnn.com/"
  },
  {
    title: "Avion prăbușit cu peste 100 de victime",
    description: "Un tragic accident aviatic a șocat lumea, anchetele sunt în desfășurare.",
    imageUrl: "https://cdn.pixabay.com/photo/2016/03/27/22/22/plane-1284381_1280.jpg",
    sourceLink: "https://www.reuters.com/"
  },
  {
    title: "Ultima zi în istoria papală",
    description: "Decese importante și schimbări majore la Vatican.",
    imageUrl: "https://cdn.pixabay.com/photo/2015/03/26/09/41/pope-690048_1280.jpg",
    sourceLink: "https://www.vaticannews.va/"
  }
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.innerHTML = `
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
