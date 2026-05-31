// Culorile și tema de pornire (Dark Mode implicit)
const toggleBtn = document.getElementById('toggle-dark');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  if (toggleBtn) toggleBtn.textContent = '🌙';
} else {
  document.body.classList.remove('light-mode');
  if (toggleBtn) toggleBtn.textContent = '☀️';
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    let theme = 'dark';
    if (document.body.classList.contains('light-mode')) {
      theme = 'light';
      toggleBtn.textContent = '🌙';
    } else {
      toggleBtn.textContent = '☀️';
    }
    
    localStorage.setItem('theme', theme);
  });
}

// Datele știrilor tale
const cardsData = [
  {
    title: "Bolojan Premier",
    description: "Cabinetul Bolojan este susținut de o coaliție formată din PSD, PNL, USR, UDMR și Grupul Parlamentar al Minorităților Naționale. Acesta include 16 miniștri, dintre care 5 sunt vicepremieri. Printre principalele obiective ale guvernului se numără implementarea unor reforme structurale, consolidarea democrației și dezvoltarea economică a României",
    imageUrl: "https://iw.ro",
    tag: "Național",
    flagUrl: "https://wikimedia.org",
    sourceLinks: [
      "https://zf.ro",
      "https://digi24.ro",
      "https://stirileprotv.ro"
    ]
  },
  {
    title: "Conflictul Israel-Iran explodează: Viitorul Orientului Mijlociu în pericol!",
    description: "În ultimele zile, Statele Unite au lansat atacuri militare asupra a trei situri nucleare iraniene, vizând oprirea programului nuclear al Iranului. Israel a susținut aceste operațiuni prin atacuri aeriene țintite, crescând tensiunile regionale. Rusia a avertizat asupra riscului unui conflict extins, iar Iranul a promis represalii dure.",
    imageUrl: "https://ytimg.com",
    tag: "Internațional",
    flagUrl: "https://wikimedia.org",
    sourceLinks: [
      "https://thetimes.com",
      "https://reuters.com",
      "https://digi24.ro"
    ]
  }
];

// Funcția de afișare
function renderCards(cards) {
  const container = document.getElementById('cardsList');
  if (!container) return; // Oprește funcția dacă elementul nu există pe pagina curentă
  
  container.innerHTML = '';

  cards.forEach((card) => {
    const buttonsHtml = card.sourceLinks.map(link => 
      `<a href="${link}" target="_blank" rel="noopener noreferrer" class="source-button">Vezi sursa</a>`
    ).join(' ');

    const cardEl = document.createElement('div');
    cardEl.className = 'card';

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
      <div class="card-footer"></div>
    `;

    container.appendChild(cardEl);
  });
}

// Rulăm generarea
renderCards(cardsData);
