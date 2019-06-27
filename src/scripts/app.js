// const rickMortyApp = {};

init();

function init() {
  renderCharachters();
}

async function renderCharachters() {
  const charachters = document.querySelector('.charachters');
  const twentyFirstCharacters = await getCharacter();
  console.log('twentyFirstCharacters:::', twentyFirstCharacters);

  for (const character of twentyFirstCharacters.results) {
    const card = document.createElement('figure');
    const cardImage = document.createElement('img');
    const cardCaption = document.createElement('figcaption');
    card.classList.add('character-card');
    cardImage.setAttribute('src', character.image);
    cardCaption.innerHTML = `<h4>${character.name}</h4>`;
    card.appendChild(cardImage);
    card.appendChild(cardCaption);
    charachters.appendChild(card);
  }
}
