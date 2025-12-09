
const regexPassFuerte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

document.getElementById("btn-validar").addEventListener("click", () => {
    const pass = document.getElementById("pass").value;
    const resultado = document.getElementById("resultado");

    if (regexPassFuerte.test(pass)) {
        resultado.textContent = "Contraseña valida y segura";
        resultado.style.color = "#4dff4d";
    } else {
        resultado.textContent = "Contraseña debil. Debe tener: 8 caracteres, 1 mayuscula, 1 minuscula y 1 numero.";
        resultado.style.color = "#ff4d4d";
    }
});
