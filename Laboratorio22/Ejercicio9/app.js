// app.js

async function listarEquipos() {
    const res = await fetch("/equipos");
    const data = await res.json();
    const lista = document.getElementById("listaEquipos");
    lista.innerHTML = "";
    data.forEach(e => {
        const li = document.createElement("li");
        li.textContent = `${e.id} - ${e.nombre} - ${e.ciudad} | Ataque: ${e.nivelAtaque} Defensa: ${e.nivelDefensa}`;
        lista.appendChild(li);
    });
}

async function registrarEquipo() {
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    const nivelAtaque = parseInt(document.getElementById("nivelAtaque").value);
    const nivelDefensa = parseInt(document.getElementById("nivelDefensa").value);

    const res = await fetch("/equipos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, ciudad, nivelAtaque, nivelDefensa})
    });
    const data = await res.json();
    alert(`Equipo registrado: ${data.nombre} (ID: ${data.id})`);
    listarEquipos();
}

async function consultarEquipo() {
    const id = parseInt(document.getElementById("equipoId").value);
    const res = await fetch(`/equipos/${id}`);
    const data = await res.json();
    const pre = document.getElementById("resultadoEquipo");
    pre.textContent = JSON.stringify(data, null, 2);
}
