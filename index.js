document.addEventListener("DOMContentLoaded", function () {
  const characters = document.getElementById("characters");

  function fetchCharacter(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((character) => {
          const characterName = document.createElement("div");
          characterName.classList.add("character-name");
          characterName.textContent = character.name;
          characters.appendChild(characterName); // <-- Aquí corregido
        });
        if (data.info.next) {
          fetchCharacter(data.info.next); // <-- Aquí corregido
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  fetchCharacter("https://rickandmortyapi.com/api/character");
});
