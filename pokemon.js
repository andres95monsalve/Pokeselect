    
    function showDescription() {
      const selectElement = document.getElementById("pokemon-select");
      const selectedValue = selectElement.value;
      const pokemonInfoDiv = document.getElementById("pokemon-info");
      const pokemonImage = document.getElementById("pokemon-image");
      const pokemonDescription = document.getElementById("pokemon-description");

      // Objeto con información de los Pokémon
      const pokemonData = {
        pikachu: {
          name: "Pikachu",
          description: "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.",
          image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
        },
        charizard: {
          name: "Charizard",
          description: "Se dice que el fuego de Charizard arde con más fuerza cuantas más duras batallas haya vivido.",
          image: "https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"
        },
        tsareena: {
          name: "Tsareena",
          description: "Es un Pokémon muy orgulloso y agresivo. Sin embargo, se dice que, si se le toca la corona del cáliz, se tranquiliza de inmediato.",
          image: "https://www.pkmnstats.com/static/artworks/763-tsareena.png"
        }
        // Agrega más información de otros Pokémon si lo deseas
      };

      // Verificar si se seleccionó un Pokémon válido
      if (pokemonData[selectedValue]) {
        const selectedPokemon = pokemonData[selectedValue];
        pokemonImage.src = selectedPokemon.image;
        pokemonImage.alt = "Imagen de " + selectedPokemon.name;
        pokemonDescription.textContent = selectedPokemon.description;
        pokemonInfoDiv.style.display = "block";
      } else {
        // Si no se seleccionó un Pokémon válido, ocultar la información
        pokemonImage.src = "";
        pokemonImage.alt = "Imagen del Pokémon";
        pokemonDescription.textContent = "";
        pokemonInfoDiv.style.display = "none";
      }
    }