//  EJERCICIO 1: pedir ID y mostrar nombre 
function pedirID() {
    let id = prompt("Ingresa ID de Pokémon:");
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => console.log("Nombre:", data.name));
}

//  EJERCICIO 4: .then Pikachu 
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(r => r.json())
    .then(d => console.log("Pikachu alt/peso:", d.height, d.weight));

//  EJERCICIO 5: async/await Pikachu 
async function pikachuAsync() {
    const d = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(r => r.json());
    console.log("Pikachu A/A:", d.height, d.weight);
}
pikachuAsync();

//  EJERCICIO 6: Sprite Charizard 
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(r => r.json())
    .then(d => console.log("Sprite Charizard:", d.sprites.front_default));

//  EJERCICIO 7: Listar primeros 20 
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(r => r.json())
    .then(d => console.log("Primeros 20:", d.results));

//  EJERCICIO 8: Pokémon aleatorio 
function randomPoke() {
    let n = Math.floor(Math.random() * 898) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
        .then(r => r.json())
        .then(d => console.log("Random:", d.name));
}
randomPoke();
//  EJERCICIO 9: Buscador visual 
function buscarPokemon() {
    let v = document.getElementById("pokeInput").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${v}`)
        .then(r => r.json())
        .then(d => {
            document.getElementById("pokeResultado").innerHTML = `
                <div class='card'>
                    <h3>${d.name} (#${d.id})</h3>
                    <img src="${d.sprites.front_default}" />
                    <p>Peso: ${d.weight}</p>
                    <p>Altura: ${d.height}</p>
                    <p>Habilidades: ${d.abilities.map(a=>a.ability.name).join(', ')}</p>
                </div>`;
        });
}

//  EJERCICIO 10: Pokémon 1-10 
async function cargar10() {
    let cont = document.getElementById("lista10");
    for (let i = 1; i <= 10; i++) {
        let d = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(r => r.json());
        cont.innerHTML += `
            <div class='card'>
                <h4>${d.name} (#${d.id})</h4>
                <img src="${d.sprites.front_default}" />
            </div>`;
    }
}
cargar10();

//  EJERCICIO 11-13: tipos y stats 
async function buscarStats() {
    let v = document.getElementById("pokeStatsInput").value;
    let d = await fetch(`https://pokeapi.co/api/v2/pokemon/${v}`).then(r => r.json());

    let tipos = d.types.map(t => t.type.name).join(", ");

    let statsHTML = d.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join("");

    document.getElementById("statsResultado").innerHTML = `
        <div class='card'>
            <h3>${d.name} (#${d.id})</h3>
            <img src="${d.sprites.front_default}" />
            <p>Tipos: ${tipos}</p>
            <ul>${statsHTML}</ul>
        </div>`;
}

//  EJERCICIO 14: slider 3 en 3 
let pokes12 = [];
let index = 0;

async function cargar12() {
    for (let i = 1; i <= 12; i++) {
        let d = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(r => r.json());
        pokes12.push(d);
    }
    mostrar3();
}

function mostrar3() {
    let div = document.getElementById("slider");
    div.innerHTML = "";
    let slice = pokes12.slice(index, index + 3);

    slice.forEach(d => {
        div.innerHTML += `
            <div class='card'>
                <h4>${d.name} (#${d.id})</h4>
                <img src="${d.sprites.front_default}" />
            </div>`;
    });
}

function siguiente() {
    if (index < 9) index += 3;
    mostrar3();
}

function anterior() {
    if (index > 0) index -= 3;
    mostrar3();
}

cargar12();
