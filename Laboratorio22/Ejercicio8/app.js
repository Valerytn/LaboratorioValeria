// app.js

async function listarLibros() {
    const res = await fetch("/libros");
    const data = await res.json();
    const lista = document.getElementById("listaLibros");
    lista.innerHTML = "";
    data.forEach(libro => {
        const li = document.createElement("li");
        li.textContent = `${libro.id} - ${libro.titulo} - ${libro.autor} (${libro.anio})`;
        lista.appendChild(li);
    });
}

async function registrarLibro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anio = parseInt(document.getElementById("anio").value);

    const res = await fetch("/libros", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({titulo, autor, anio})
    });
    const data = await res.json();
    alert(`Libro registrado: ${data.titulo} (ID: ${data.id})`);
    listarLibros();
}

async function consultarLibro() {
    const id = parseInt(document.getElementById("libroId").value);
    const res = await fetch(`/libros/${id}`);
    const data = await res.json();
    const pre = document.getElementById("resultadoLibro");
    pre.textContent = JSON.stringify(data, null, 2);
}
