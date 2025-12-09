// Selecciones
const entrada = document.getElementById('entrada');
const salida = document.getElementById('salida');
const btnQuitar = document.getElementById('btn-quitar');
const btnReset = document.getElementById('btn-reset');

const regexQuitarH1 = /<\/?h1[^>]*>/gi;

btnQuitar.addEventListener('click', () => {
	const texto = entrada.value;
	const limpio = texto.replace(regexQuitarH1, '');
	salida.value = limpio;
});

btnReset.addEventListener('click', () => {
	entrada.value = '';
	salida.value = '';
	entrada.focus();
});
