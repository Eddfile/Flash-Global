const toggleBtn = document.getElementById('toggle-dark');

function updateButton() {
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙';
  } else {
    toggleBtn.textContent = '☀️';
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
    likes: 8,
    dislikes: 0
  }
];

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach((card, idx) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';

const userVotes = JSON.parse(localStorage.getItem('flashglobal_votes') || '{}');
const vote = userVotes[idx]; // poate fi 'like', 'dislike' sau undefined

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
  <div class="card-interaction">
    <div class="button-with-count">
      <button class="like-btn" data-index="${idx}" aria-label="Like">
        <i class="fas fa-thumbs-up ${vote === 'like' ? 'voted like-voted' : ''}"></i>
      </button>
      <span class="like-count">${card.likes}</span>
    </div>
    <div class="button-with-count">
      <button class="dislike-btn" data-index="${idx}" aria-label="Dislike">
        <i class="fas fa-thumbs-down ${vote === 'dislike' ? 'voted dislike-voted' : ''}"></i>
      </button>
      <span class="dislike-count">${card.dislikes}</span>
    </div>
  </div>
  <div class="card-footer">
    <a href="${card.sourceLink}" target="_blank" rel="noopener">Vezi sursa</a>
  </div>
`;

    container.appendChild(cardEl);
  });

  addInteractionListeners();
}

function addInteractionListeners() {
  const likes = document.querySelectorAll('.like-btn');
  const dislikes = document.querySelectorAll('.dislike-btn');

  likes.forEach(btn => {
    btn.addEventListener('click', () => {
      handleVote(btn, 'like');
    });
  });

  dislikes.forEach(btn => {
    btn.addEventListener('click', () => {
      handleVote(btn, 'dislike');
    });
  });
}

// Pentru a memora votul în localStorage să nu se piardă la refresh
function handleVote(button, type) {
  const idx = parseInt(button.dataset.index);
  const otherType = type === 'like' ? 'dislike' : 'like';
  const likeBtn = document.querySelector(`.like-btn[data-index="${idx}"]`);
  const dislikeBtn = document.querySelector(`.dislike-btn[data-index="${idx}"]`);

  // Folosim localStorage sub cheia "flashglobal_votes"
  let votes = JSON.parse(localStorage.getItem('flashglobal_votes') || '{}');

  // Dacă există vot curent
  if (votes[idx] === type) {
    // Scoatem votul (dezactivăm)
    votes[idx] = null;
    if (type === 'like') cardsData[idx].likes--;
    else cardsData[idx].dislikes--;
  } else {
    // Dacă era votat cu celălalt, scădem acolo
    if (votes[idx] === otherType) {
      if (otherType === 'like') cardsData[idx].likes--;
      else cardsData[idx].dislikes--;
    }
    // Punem noul vot
    votes[idx] = type;
    if (type === 'like') cardsData[idx].likes++;
    else cardsData[idx].dislikes++;
  }

  localStorage.setItem('flashglobal_votes', JSON.stringify(votes));
  renderCards(cardsData);
}

// La încărcare, restaurăm voturile
function restoreVotes() {
  let votes = JSON.parse(localStorage.getItem('flashglobal_votes') || '{}');
  for (const idx in votes) {
    if (votes[idx] === 'like') {
      cardsData[idx].likes++;
    } else if (votes[idx] === 'dislike') {
      cardsData[idx].dislikes++;
    }
  }
}

// Prima încărcare
function initialize() {
  // Resetează voturile ca să nu dubleze la fiecare refresh
  let votes = JSON.parse(localStorage.getItem('flashglobal_votes') || '{}');
  // Reset counts based on votes from localStorage
  cardsData.forEach((card, i) => {
    // Reset counts (hardcoded init)
    if (i === 0) {
      card.likes = 10;
      card.dislikes = 2;
    } else if (i === 1) {
      card.likes = 8;
      card.dislikes = 0;
    }
  });

  for (const idx in votes) {
    if (votes[idx] === 'like') {
      cardsData[idx].likes++;
    } else if (votes[idx] === 'dislike') {
      cardsData[idx].dislikes++;
    }
  }

  renderCards(cardsData);
}

initialize();
