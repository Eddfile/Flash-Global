// Culorile și tema de pornire (Dark Mode implicit)
const toggleBtn = document.getElementById('toggle-dark');

// Verificăm dacă utilizatorul are deja o preferință salvată în browser, altfel pornește pe dark
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
      toggleBtn.textContent = '🌙'; // Arată luna când treci pe modul luminos
    } else {
      toggleBtn.textContent = '☀️'; // Arată soarele când treci pe modul întunecat
    }
    
    localStorage.setItem('theme', theme);
  });
}

// Datele știrilor tale (Păstrate intacte)
const cardsData = [
  {
    title: "Bolojan Premier",
    description: "Cabinetul Bolojan este susținut de o coaliție formată din PSD, PNL, USR, UDMR și Grupul Parlamentar al Minorităților Naționale. Acesta include 16 miniștri, dintre care 5 sunt vicepremieri. Printre principalele obiective ale guvernului se numără implementarea unor reforme structurale, consolidarea democrației și dezvoltarea economică a României",
    imageUrl: "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA4dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjUl/MkYwMiUyRjExJTJGMjE4NzQ4MV8yMTg3/NDgxX0lsaWUtQm9sb2phbi1JTl9JRDI5/MDcwN19JTlFVQU1fUGhvdG9zX09jdGF2/X0dhbmVhLmpwZyZ3PTc4MCZoPTQ0MCZo/YXNoPWI4ZWVjZWJhYmY5ODFmMWEwNzU2MGY0NWY2Mjc1ZGIw.thumb.jpg",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    sourceLinks: [
      "https://www.zf.ro/eveniment/este-oficial-ilie-bolojan-este-noul-premier-al-romaniei-cabinetul-22838870",
      "https://www.digi24.ro/stiri/actualitate/politica/cine-este-ilie-bolojan-premierul-desemnat-de-nicusor-dan-pentru-a-forma-noul-guvern-3292845",
      "https://stirileprotv.ro/stiri/politic/cine-este-ilie-bolojan-desemnat-de-nicusor-dan-pentru-functia-de-premier-al-romaniei.html"
    ]
  },
  {
    title: "Conflictul Israel-Iran explodează: Viitorul Orientului Mijlociu în pericol!",
    description: "În ultimele zile, Statele Unite au lansat atacuri militare asupra a trei situri nucleare iraniene, vizând oprirea programului nuclear al Iranului. Israel a susținut aceste operațiuni prin atacuri aeriene țintite, crescând tensiunile regionale. Rusia a avertizat asupra riscului unui conflict extins, iar Iranul a promis represalii dure.",
    imageUrl: "https://i.ytimg.com/vi/Hwy9PXsJnjE/hqdefault.jpg",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/330px-Flag_of_Europe.svg.png",
    sourceLinks: [
      "https://www.thetimes.com/world/middle-east/israel-iran/article/evin-prison-iran-israel-war-us-latest-news-mhnbjpr70?region=global",
      "https://www.reuters.com/world/middle-east/israel-signals-iran-campaign-can-end-soon-much-hinges-tehran-2025-06-23/",
      "https://www.digi24.ro/stiri/externe/mapamond/tara-in-care-se-afla-cea-mai-mare-baza-americana-din-orientul-mijlociu-isi-inchide-spatiul-aerian-sua-noi-recomandari-pentru-cetateni-3296773"
    ]
  }
];

// Funcția de randare a cardurilor (Corectată pentru noile stiluri)
function renderCards(cards) {
  const container = document.getElementById('cardsList');
  if (!container) return; // Protecție în caz că rulăm pe pagini fără listă (ex: terms.html)
  
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

// Rulăm generarea cardurilor pe ecran
renderCards(cardsData);
