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
  } else if (character && rickMortyApp.urlParams.has('id')) {
    renderCharacter();
  }
}

function createCard() {
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');
  figure.classList.add('character-card');

  return { figure, image, caption };
}

async function renderCharacter() {
  const characterId = rickMortyApp.urlParams.get('id');
  const selectedCharacter = await getCharacter(+characterId);
  const status =
    selectedCharacter.status === 'Dead' || selectedCharacter.status === 'unknown'
      ? 'dead'
      : 'alive';

  console.log('selectedCharacter:::', selectedCharacter);

  const characterHeading = document.querySelector('.character-heading');
  characterHeading.append(status);

  const card = createCard();
  card.image.setAttribute('src', selectedCharacter.image);
  card.caption.innerHTML = `
    <h3>${selectedCharacter.name}</h3>
    <p>LOCATION: ${selectedCharacter.location.name}</p>
    <p>SPECIES: ${selectedCharacter.species}</p>
    <a href="/">Back to the list</a>
  `;
  card.figure.appendChild(card.image);
  card.figure.appendChild(card.caption);
  character.appendChild(card.figure);
}

async function renderCharacters() {
  const twentyFirstCharacters = await getCharacter();
  console.log('twentyFirstCharacters:::', twentyFirstCharacters);

  for (const singleCharacter of twentyFirstCharacters.results) {
    const card = createCard();
    card.image.setAttribute('src', singleCharacter.image);
    card.caption.innerHTML = `<h4>${singleCharacter.name}</h4>`;
    card.figure.appendChild(card.image);
    card.figure.appendChild(card.caption);
    characters.appendChild(card.figure);
    card.figure.addEventListener('click', () => {
      window.location = `/character?id=${singleCharacter.id}`;
    });
  }
}
