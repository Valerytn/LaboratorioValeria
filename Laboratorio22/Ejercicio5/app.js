function saludar() {
    fetch("/saludo")
    .then(response => response.json())
    .then(data => {
        document.getElementById("resultado").innerText = JSON.stringify(data);
    })
    .catch(err => {
        document.getElementById("resultado").innerText = "Error: " + err;
    });
}
