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
    title: "Accident rutier pe DN1",
    description: "Coliziune între două autoturisme, se circulă cu dificultate.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    sourceLink: "https://site-exemplu.ro/stire1",
    tag: "Național",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    likes: 10,
    dislikes: 2
  },
  {
    title: "Blocaj pe autostradă",
    description: "Un tir a derapat, traficul este deviat.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    sourceLink: "https://site-exemplu.ro/stire2",
    tag: "Internațional",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    likes: 59,
    dislikes: 2
  }
];

// Păstrează votul utilizatorului pentru fiecare știre
const userVotes = {}; // {index: 'like' | 'dislike' | null}

function renderCards(cards) {
  const container = document.getElementById('cardsList');
  container.innerHTML = '';

  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.style.position = 'relative';

    cardEl.innerHTML = `
      <div class="label-tag">
        <img src="${card.flagUrl}" alt="${card.tag} steag" class="flag-icon" />
        <span>${card.tag}</span>
      </div>
      <img src="${card.imageUrl}" alt="Imagine știre" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-description">${card.description}</p>
      </div>
      <div class="card-interaction">
        <div class="interaction-row">
          <div class="buttons">
            <div class="button-with-count">
              <button class="like-btn" data-index="${index}" title="Like">
                <i class="fa-regular fa-thumbs-up"></i>
              </button>
              <span class="like-count">${card.likes || 0}</span>
            </div>
            <div class="button-with-count">
              <button class="dislike-btn" data-index="${index}" title="Dislike">
                <i class="fa-regular fa-thumbs-down"></i>
              </button>
              <span class="dislike-count">${card.dislikes || 0}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(cardEl);
  });

  document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', () => {
      const idx = button.dataset.index;
      toggleVote(idx, 'like');
    });
  });

  document.querySelectorAll('.dislike-btn').forEach(button => {
    button.addEventListener('click', () => {
      const idx = button.dataset.index;
      toggleVote(idx, 'dislike');
    });
  });
}

function toggleVote(index, type) {
  const card = cardsData[index];
  const currentVote = userVotes[index]; 

  if (currentVote === type) {
    // Anulează votul dacă dai click pe același buton
    userVotes[index] = null;
    if(type === 'like') card.likes = (card.likes || 1) - 1;
    else card.dislikes = (card.dislikes || 1) - 1;
  } else {
    // Schimbă votul
    if(currentVote === 'like') {
      card.likes = (card.likes || 1) - 1;
      card.dislikes = (card.dislikes || 0) + 1;
    } else if(currentVote === 'dislike') {
      card.dislikes = (card.dislikes || 1) - 1;
      card.likes = (card.likes || 0) + 1;
    } else {
      // Vot nou
      if(type === 'like') card.likes = (card.likes || 0) + 1;
      else card.dislikes = (card.dislikes || 0) + 1;
    }
    userVotes[index] = type;
  }

  updateCardVotes(index);
}

function updateCardVotes(index) {
  const cardEls = document.querySelectorAll('.card');
  const cardEl = cardEls[index];
  const card = cardsData[index];

  const likeBtn = cardEl.querySelector('.like-btn');
  const dislikeBtn = cardEl.querySelector('.dislike-btn');
  const likeCount = cardEl.querySelector('.like-count');
  const dislikeCount = cardEl.querySelector('.dislike-count');

  likeCount.textContent = card.likes || 0;
  dislikeCount.textContent = card.dislikes || 0;

  likeBtn.classList.remove('active-like');
  dislikeBtn.classList.remove('active-dislike');

  if (userVotes[index] === 'like') {
    likeBtn.classList.add('active-like');
  } else if (userVotes[index] === 'dislike') {
    dislikeBtn.classList.add('active-dislike');
  }
}

renderCards(cardsData);
