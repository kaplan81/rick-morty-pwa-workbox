const rickMortyApp = {
  urlParams: {}
};

const characters = document.querySelector('.characters');
const character = document.querySelector('.character');

init();

function init() {
  rickMortyApp.urlParams = new URLSearchParams(window.location.search);

  if (characters) {
    renderCharacters();
  } else if (character) {
    renderCharacter();
  }
}

async function renderCharacter() {
  if (rickMortyApp.urlParams.has('id')) {
    const characterId = rickMortyApp.urlParams.get('id');
    const selectedCharacter = await getCharacter(+characterId);
    console.log('selectedCharacter:::', selectedCharacter);
  }
}

async function renderCharacters() {
  const twentyFirstCharacters = await getCharacter();
  // console.log('twentyFirstCharacters:::', twentyFirstCharacters);

  for (const singleCharacter of twentyFirstCharacters.results) {
    const card = document.createElement('figure');
    const cardImage = document.createElement('img');
    const cardCaption = document.createElement('figcaption');
    card.classList.add('character-card');
    cardImage.setAttribute('src', singleCharacter.image);
    cardCaption.innerHTML = `<h4>${singleCharacter.name}</h4>`;
    card.appendChild(cardImage);
    card.appendChild(cardCaption);
    characters.appendChild(card);
    card.addEventListener('click', () => {
      window.location = `/character?id=${singleCharacter.id}`;
    });
  }
}
