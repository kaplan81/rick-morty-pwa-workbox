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
    const card = document.createElement('div');
    card.classList.add('character-card');
    card.append(character.name);
    charachters.appendChild(card);
  }
}
