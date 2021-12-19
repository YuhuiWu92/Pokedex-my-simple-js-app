//IIFE wrap
let pokemonRepository = (function() {
    let pokemonList = [
        { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
        { name: 'Golbat', height: 1.6, types: ['flying', 'poison'] },
        { name: 'Butterfree', height: 1.1, types: ['flying', 'bug'] },
        { name: 'Nidoran', height: 0.4, types: ['poison'] },
        { name: 'Charizard', height: 1.7, types: ['flying', 'fire'] }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        // add event, console the name of pokemon
        button.addEventListener('click', function(event) {
            showDetails(pokemon.name);
        });

    }
    // showDetails: showDetails
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

// add pokemon
pokemonRepository.add({ name: 'Pikachu', height: 0.4, type: ['electric'] });
console.log(pokemonRepository.getAll());

//Call forEach function to show Pokemon list
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});