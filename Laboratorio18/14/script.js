// Selecciones
const inputFecha = document.getElementById("fecha");
const btnValidar = document.getElementById("btn-validar");
const resultado = document.getElementById("resultado");

const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;

btnValidar.addEventListener("click", () => {
	const texto = inputFecha.value;

	if (regexFecha.test(texto)) {
		resultado.textContent = "Fecha valida";
		resultado.style.color = "green";
	} else {
		resultado.textContent = "Formato incorrecto (use dd/mm/yyyy)";
		resultado.style.color = "red";
	}
});
