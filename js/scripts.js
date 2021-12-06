let pokemonList = [
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poison'] },
    { name: 'Golbat', height: 1.6, types: ['flying', 'poison'] },
    { name: 'Butterfree', height: 1.1, types: ['flying', 'bug'] },
    { name: 'Nidoran', height: 0.4, types: ['poison'] },
    { name: 'Charizard', height: 1.7, types: ['flying', 'fire'] }
];
for (let i = 0; i < pokemonList.length; i++) {
    document.write('<br>' + pokemonList[i].name + (' , height: ') + pokemonList[i].height);
    if (pokemonList[i].height >= 2) {
        document.write(' - Wow, that\'s big!');
    }
}