const characterDisplay = document.querySelector('.character');
const characterSelectForm = document.querySelector('.character-select-form');
const characterInput = document.querySelector('#character-input');

// fetch character data from api
const fetchCharacter = async (char) => {
    const url = `?search=${char}`
    console.log(url)

    const res = await fetch(url)
    const data = await res.json()

    const displayData = {
        characterName: data.name,
        characterHeight: data.height,
      }
    addCharacterToDOM(displayData)
}


// Add display data to DOM
const addCharacterToDOM = (data) => {
    characterDisplay.innerHTML = `
      <h1>${data.name}</h1>
      <h2>${data.height} &deg;F</h2>
    `
    characterInput.value = ''
  }

  // Event listener for form submission
characterSelectForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    if (characterInput.value === '') {
      alert('Please enter a famous Star Wars character')
    } else {
      fetchCharacter(characterInput.value)
    }
  })

  fetchCharacter('luke')