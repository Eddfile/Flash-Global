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
    title: "O dronă rusească plină cu explozibil a lovit un bloc din Galați",
    description: "În miez de noapte, o dronă kamikaze rusească încărcată cu 30 kg de explozibil s-a prăbușit pe un bloc de 10 etaje. Deflagrația puternică a rănit doi oameni și a distrus acoperișul clădirii, forțând evacuarea a 70 de locatari. Ca replică directă, România l-a dat afară din țară pe consulul Rusiei și i-a închis consulatul.",
    imageUrl: "https://cdn.adh.reperio.news/image-7/75cb247f-6bf8-4925-8478-57cbd46884bb/index.jpeg?p=a%3D1%26co%3D1.05%26w%3D1400%26h%3D750%26r%3Dcontain%26f%3Dwebp",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Romania_%28Moldovan_flag_colors%29.png/330px-Flag_of_Romania_%28Moldovan_flag_colors%29.png",
    sourceLinks: [
      "https://agerpres.ro/social/2026/05/31/mapn-drona-de-la-galati---tip-kamikaze-cu-localizare-a-sistemelor-satelitare-cu-30-kg-de-munitie--1561810",
      "https://www.libertatea.ro/stiri/stiri-galati-drona-ruseasca-prabusita-galati-explozie-incendiu-bloc-zece-etaje-persoane-ranite-5757441",
      "https://stirileprotv.ro/stiri/actualitate/o-drona-cu-incarcatura-exploziva-s-a-prabusit-pe-un-bloc-din-galati-70-de-persoane-au-fost-evacuate.html"
    ]
  },
  {
    title: "SUA și Iranul, la un pas de război total pentru petrol în Strâmtoarea Hormuz",
    description: "Tensiunile au explodat după ce trupele americane au scufundat șapte bărci militare iraniene care atacau vapoarele comerciale. Donald Trump a amenințat Teheranul cu distrugerea totală dacă agresiunile continuă. În prezent, atacurile au fost înghețate, iar ambele părți au început negocieri secrete de pace pentru a evita un război mondial.",
    imageUrl: "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA4dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjYl/MkYwMyUyRjAzJTJGMjYxNzEyNF8yNjE3/MTI0X0dldHR5SW1hZ2VzLTExOTg4NDE4/ODguanBnJnc9NzgwJmg9NDQwJmhhc2g9/YzViMjJlZDRhODkyMzlkNjJiNjRmYTBhODBkNjlkOTY=.thumb.jpg",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/330px-Flag_of_Europe.svg.png",
    sourceLinks: [
      "https://en.wikipedia.org/wiki/2026_Iran_war",
      "https://www.aljazeera.com/tag/israel-iran-conflict/",
      "https://www.reuters.com/world/iran/"
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
