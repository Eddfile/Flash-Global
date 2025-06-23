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
  title: "Bolojan Premier",
  description: "Guvernul Bolojan a fost votat în Parlament. Noul executiv a trecut cu 301 voturi în favoarea sa și 9 voturi „împotrivă”. Liderii partidelor care îl susțin au semnat de dimineață protocolul coaliției de guvernare. ",
  imageUrl: "https://image.stirileprotv.ro/media/images/800x450/Jun2025/62554578.jpg",
  sourceLink: "https://stirileprotv.ro/stiri/politic/guvernul-bolojan-la-vot-in-parlament-ministrii-propusi-avizati-pe-banda-rulanta-in-comisii.html",
  tag: "Național", // sau "Internațional"
  flagUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAB6CAMAAAA7zWlKAAAAMFBMVEUAK3/OESb80Ra9pEX/1gz+1hXtoBzNACYAIoESM4POGCf4zxwAK4W9o0n+0xT51BstSlKgAAAAiElEQVR4nO3OyRGAIAAEMPAAb/vv1h7Yn5NUkFIC27xMw9bWayB5i4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi/8wvgeu+zmHva0egQ80xWn5v54i2wAAAABJRU5ErkJggg==" // exemplu: România, UE sau orice alt steag
 },
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
