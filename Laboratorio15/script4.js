
// 17
const contenedor = document.querySelector("#contenido");
const parrafos = Array.from(contenedor.querySelectorAll("p"));
parrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));
parrafos.forEach(p => contenedor.appendChild(p));


// 18
document.querySelectorAll("section").forEach((sec, index) => {
    sec.dataset.index = index;
});

// 19
const cantidadDivs = document.querySelectorAll("div").length;
const pDivs = document.createElement("p");
pDivs.textContent = "Cantidad de divs: " + cantidadDivs;
document.body.appendChild(pDivs);

// 20
const ulInterno = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = "Nivel interno";
    li.appendChild(span);
    ulInterno.appendChild(li);
}
document.body.appendChild(ulInterno);

// 21
const cont = document.querySelector("#contenedor");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Parrafo " + i;
    cont.appendChild(p);
}
cont.removeChild(cont.children[1]);

// 22
const seccion = document.querySelector("section");
const nuevoTitulo = document.createElement("h2");
nuevoTitulo.textContent = "Titulo nuevo";
const nuevaDesc = document.createElement("p");
nuevaDesc.textContent = "Descripcion generada";

const lista3 = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    lista3.appendChild(li);
}

seccion.appendChild(nuevoTitulo);
seccion.appendChild(nuevaDesc);
seccion.appendChild(lista3);

const originalH2 = seccion.querySelector("h2");
if (originalH2 && originalH2 !== nuevoTitulo) {
    originalH2.remove();
}

