// EJERCICIO 1: Cambiar color

document.getElementById("btnColor").onclick = function () {
    const colores = ["red", "blue", "green", "yellow", "pink", "orange", "purple"];
    const random = Math.floor(Math.random() * colores.length);
    document.body.style.background = colores[random];
};



// EJERCICIO 2: Formulario

document.getElementById("btnEnviar").onclick = () => {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    nombre.classList.remove("error");
    email.classList.remove("error");
    mensaje.textContent = "";

    if (nombre.value === "" || email.value === "") {
        mensaje.textContent = "Todos los campos son obligatorios.";
        mensaje.style.color = "red";
        if (nombre.value === "") nombre.classList.add("error");
        if (email.value === "") email.classList.add("error");
        return;
    }

    if (!email.value.includes("@")) {
        mensaje.textContent = "El email no es válido.";
        mensaje.style.color = "red";
        email.classList.add("error");
        return;
    }

    mensaje.textContent = "Formulario enviado correctamente ";
    mensaje.style.color = "green";
};


// EJERCICIO 3: Menú
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

menuBtn.onclick = function () {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

document.onclick = function (e) {
    if (e.target !== menuBtn && !menu.contains(e.target)) {
        menu.style.display = "none";
    }
};

// EJERCICIO 4: Galeria

const imagenGrande = document.getElementById("imgGrande");
const miniaturas = document.getElementsByClassName("mini");

for (let i = 0; i < miniaturas.length; i++) {
    let mini = miniaturas[i];
    mini.onclick = function () {
        imagenGrande.src = this.src;
    };
}





