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

    return {
        add: add,
        getAll: getAll
    };
})();

// Part 1: Use a forEach() function instead of the for loop 

function myPokemonPrintout(pokemon) {
    document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + ')');
    //Add a conditional to show big Pokemon
    if (pokemon.height >= 7) {
        document.write(' - Wow! That\'s big!');
    }
    document.write('</li>');
}

document.write('<ul>');

// add pokemon
pokemonRepository.add({ name: 'Pikachu', height: 0.4, type: ['electric'] });

//Call forEach function to show Pokemon list
pokemonRepository.getAll().forEach(myPokemonPrintout);

document.write('</ul>');