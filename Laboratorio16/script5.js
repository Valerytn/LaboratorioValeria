// Ejercicio 3
const contenedor = document.querySelector("#contenedor-ejercicios");

contenedor.innerHTML += `
<h2>Ejercicio 3: Cambiar contenido</h2>
<p id="p3">Texto original</p>
<button id="btn3">Cambiar</button>
<hr>
`;

document.querySelector("#btn3").addEventListener("click", () => {
    document.querySelector("#p3").textContent = "Texto cambiado";
});


// Ejercicio 4
contenedor.innerHTML += `<h2>Ejercicio 4: Alternar texto</h2><p id="p4">Texto original</p>
<button id="btn4">Alternar</button>
<hr>
`;

document.querySelector("#btn4").addEventListener("click", () => {
    const p = document.querySelector("#p4");
    p.textContent = p.textContent === "Texto original" ? "Texto cambiado" : "Texto original";
});

// Ejercicio 5 - Modo oscuro
contenedor.innerHTML += `
<h2>Ejercicio 5: Modo oscuro</h2>
<button id="btnModo">Alternar modo oscuro</button>
<hr>
`;

document.querySelector("#btnModo").addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});


// Ejercicio 6 - Contador
contenedor.innerHTML += `<h2>Ejercicio 6: Contador</h2><button id="sumar">+</button>
<button id="restar">-</button>
<span id="contador">0</span>
<p id="error6" style="color:red"></p>
<hr>
`;

let valor = 0;

document.querySelector("#sumar").addEventListener("click", () => {
    valor++;
    document.querySelector("#contador").textContent = valor;
    document.querySelector("#error6").textContent = "";
});

document.querySelector("#restar").addEventListener("click", () => {
    if (valor === 0) {
        document.querySelector("#error6").textContent = "No puede bajar de 0";
        return;
    }
    valor--;
    document.querySelector("#contador").textContent = valor;
});


// Ejercicio 7 - Lista
contenedor.innerHTML += `<h2>Ejercicio 7: Lista mágica</h2>
<input id="texto7" placeholder="Agregar elemento">
<button id="agregar7">Agregar</button>
<button id="borrar7">Eliminar último</button>
<ul id="lista7"></ul>
<hr>
`;

document.querySelector("#agregar7").addEventListener("click", () => {
    const texto = document.querySelector("#texto7").value;
    if (texto.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = texto;
    document.querySelector("#lista7").appendChild(li);
    document.querySelector("#texto7").value = "";
});

document.querySelector("#borrar7").addEventListener("click", () => {
    const lista = document.querySelector("#lista7");
    if (lista.lastChild) lista.removeChild(lista.lastChild);
});


// Ejercicio 8 - Validación de formulario
contenedor.innerHTML += `<h2>Ejercicio 8: Validación</h2>
<input id="nombre8" placeholder="Nombre">
<br>
<input id="correo8" placeholder="Correo">
<br>
<button id="validar8">Validar</button>
<div id="errores8"></div>
<hr>
`;

document.querySelector("#validar8").addEventListener("click", () => {
    const div = document.querySelector("#errores8");
    div.innerHTML = "";

    const nombre = document.querySelector("#nombre8").value;
    const correo = document.querySelector("#correo8").value;

    if (nombre.trim() === "") {
        const sp = document.createElement("span");
        sp.style.color = "red";
        sp.textContent = "Nombre vacío";
        div.appendChild(sp);
        div.appendChild(document.createElement("br"));
    }
    if (correo.trim() === "") {
        const sp = document.createElement("span");
        sp.style.color = "red";
        sp.textContent = "Correo vacío";
        div.appendChild(sp);
    }
});


// Ejercicio 9 - Galería
contenedor.innerHTML += `
<h2>Ejercicio 9: Galería</h2>
<div class="galeria-grande"><img id="imgGrande" src="cenicienta1.jpg"></div>
<div class="galeria-mini">
    <img src="cenicienta2.jpg">
    <img src="cenicienta3.jpg">
    <img src="cenicienta4.jpg">
</div>
<hr>
`;

document.querySelectorAll(".galeria-mini img").forEach(img => {
    img.addEventListener("click", () => {
        document.querySelector("#imgGrande").src = img.src;
    });
});



// Ejercicio 10 - Tabla dinámica
contenedor.innerHTML += `
<h2>Ejercicio 10: Tabla dinámica</h2>
<button id="crearTabla10">Crear tabla</button>
<div id="tabla10"></div>
<hr>
`;

const productos10 = [
    { nombre: "Cenicienta", edad: 22 },
    { nombre: "Madrastra", edad: 45 }
];

document.querySelector("#crearTabla10").addEventListener("click", () => {
    const div = document.querySelector("#tabla10");
    div.innerHTML = "";

    const tabla = document.createElement("table");

    productos10.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${p.nombre}</td><td>${p.edad}</td>`;
        tabla.appendChild(fila);
    });

    div.appendChild(tabla);
});


// EJERCICIO 11: Delegación de eventos
const listaDelegacion = document.getElementById("listaDelegacion");

listaDelegacion.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.remove(); 
    }
});

// EJERCICIO 12: Animación con DOM y CSS
const cuadrado = document.getElementById("cuadrado");
const btnMover = document.getElementById("btnMover");
const btnReset = document.getElementById("btnReset");

btnMover.addEventListener("click", () => {
    cuadrado.classList.add("mover");
});

btnReset.addEventListener("click", () => {
    cuadrado.classList.remove("mover");
});

// EJERCICIO 13: CRUD básico
const formUser = document.getElementById("formUser");
const tablaBody = document.getElementById("tablaBody");
let idUsuario = 0;

formUser.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = formUser.nombre.value;
    const edad = formUser.edad.value;

    const fila = document.createElement("tr");
    fila.dataset.id = idUsuario++;

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
        </td>
    `;

    tablaBody.appendChild(fila);
    formUser.reset();
});

tablaBody.addEventListener("click", function(e){
    const fila = e.target.closest("tr");

    if(e.target.classList.contains("eliminar")){
        fila.remove();
    }

    if(e.target.classList.contains("editar")){
        const celdas = fila.querySelectorAll("td");
        formUser.nombre.value = celdas[0].textContent;
        formUser.edad.value = celdas[1].textContent;
        fila.remove(); 
    }
});

// EJERCICIO 14: Objeto -> JSON
const persona = {
    nombre: "Ana",
    edad: 20,
    ciudad: "Lima"
};

console.log("Ejercicio 14 JSON:", JSON.stringify(persona));
// EJERCICIO 15: JSON -> Objeto
const cadenaJSON = '{"curso":"JavaScript","duracion":40}';
const objetoCurso = JSON.parse(cadenaJSON);

document.getElementById("valorCurso").textContent = objetoCurso.curso;

const productos = [
    {nombre:"Zapatilla de Cristal", precio:500},
    {nombre:"Carroza Encantada", precio:1200},
    {nombre:"Vestido Azul Real", precio:800}
];

const productosJSON = JSON.stringify(productos);
const productosObj = JSON.parse(productosJSON);

const ulProductos = document.getElementById("ulProductos");

productosObj.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    ulProductos.appendChild(li);
});


// EJERCICIO 17
const usuarioLS = {
    nombre: "Carlos",
    correo: "carlos@mail.com",
    rol: "admin"
};

localStorage.setItem("usuario", JSON.stringify(usuarioLS));

const datosRecuperados = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("mostrarLS").textContent =
    `${datosRecuperados.nombre} - ${datosRecuperados.rol}`;
// EJERCICIO 18
const jsonLibros = `
[
    {"titulo":"El Principito", "autor":"Saint-Exupéry"},
    {"titulo":"Cenicienta", "autor":"Perrault"}
]
`;

const libros = JSON.parse(jsonLibros);
const tbodyLibros = document.getElementById("tbodyLibros");

libros.forEach(lib => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${lib.titulo}</td>
        <td>${lib.autor}</td>
    `;
    tbodyLibros.appendChild(tr);
});

// EJERCICIO 19
let jsonPersona = '{"nombre":"Luis","edad":22}';
let objPersona = JSON.parse(jsonPersona);

objPersona.edad = 30;

console.log("JSON actualizado:", JSON.stringify(objPersona));

// EJERCICIO 20
const inputNombre = document.getElementById("inputNombre");
const btnGuardarNombre = document.getElementById("btnGuardarNombre");

btnGuardarNombre.addEventListener("click", () => {
    const objeto = { nombre: inputNombre.value };
    console.log("Ejercicio 20:", JSON.stringify(objeto));
});
// EJERCICIO 21
const tareasJSON = `
[
    {"titulo":"Lavar platos","completada":true},
    {"titulo":"Estudiar JS","completada":false}
]
`;

const tareas = JSON.parse(tareasJSON);
const ulTareas = document.getElementById("ulTareas");

tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.titulo;
    if(t.completada) li.style.color = "green";
    ulTareas.appendChild(li);
});
const formPerfil = document.getElementById("formPerfil");
const mostrarPerfil = document.getElementById("mostrarPerfil");

formPerfil.addEventListener("submit", e =>{
    e.preventDefault();

    const datos = {
        nombre: formPerfil.nombre.value,
        edad: formPerfil.edad.value,
        pais: formPerfil.pais.value
    };

    localStorage.setItem("perfil", JSON.stringify(datos));
    mostrarPerfil.textContent = `${dato?.nombre}, ${datos.edad}, ${datos.pais}`;
});

const guardado = localStorage.getItem("perfil");
if(guardado){
    const perfilObj = JSON.parse(guardado);
    mostrarPerfil.textContent = `${perfilObj.nombre}, ${perfilObj.edad}, ${perfilObj.pais}`;
}

