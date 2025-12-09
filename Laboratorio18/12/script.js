document.getElementById("btnBuscar").addEventListener("click", () => {
    const texto = document.getElementById("txtTexto").value;

    const regexURL = /https:\/\/[a-zA-Z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+/g;

    const urlsEncontradas = texto.match(regexURL);

    const divResultado = document.getElementById("resultado");

    if (urlsEncontradas) {
        divResultado.innerHTML = "<strong>URLs encontradas:</strong><br>" + urlsEncontradas.join("<br>");
    } else {
        divResultado.innerHTML = "<strong>No se encontraron URLs seguras.</strong>";
    }
});
