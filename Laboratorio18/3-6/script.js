async function cargarCliente() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2")
    const usuario = await respuesta.json()

    document.getElementById("nombre").textContent = usuario.name
    document.getElementById("email").textContent = usuario.email
    document.getElementById("ciudad").textContent = usuario.address.city
}

document.getElementById("btnCargar").addEventListener("click", cargarCliente)