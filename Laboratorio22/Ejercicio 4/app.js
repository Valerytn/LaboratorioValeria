document.getElementById("btnSumar").addEventListener("click", function() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);

    fetch("/sumar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a, b })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.suma;
    })
    .catch(err => {
        document.getElementById("resultado").innerText = "Error al conectar con el servidor";
        console.error(err);
    });
});
