$(document).ready(function(){
    
    fetch("pokemon.json")
        .then((rawData) => rawData.json())
        .then(pokedex => {

            pokedex.forEach(pokemon => {

                let id = pokemon["id"];
                let name = pokemon["name"];
                let image = pokemon["image"]["hires"];
                let types = pokemon["types"];
                let typesHtml = " ";

                types.forEach(types => {
                    typesHtml += `<span class="${type}">${type}</span>`
                })

                $( 'pokemon-container') .append(
                    `<div class="card">
                <img src="${image}" alt="${image}" >
                <ul type="none">
                    <li class="pokemon-id">#0359</li>
                    <li class="pokemon-name">Absol</li>
                    <li class="pokemon-type"></li>
                    <span class="dark">Dark</span>
                </ul>
            </div>`
                )

                
            });


        })


})