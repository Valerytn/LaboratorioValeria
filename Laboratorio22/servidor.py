from wsgiref.simple_server import make_server
import json

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    path = environ["PATH_INFO"]

    # 👉 MOSTRAR HTML
    if metodo == "GET" and path == "/":
        start_response("200 OK", [("Content-Type", "text/html; charset=utf-8")])
        with open("index.html", "rb") as f:
            return [f.read()]

    # 👉 RECIBIR POST Y DEVOLVER SUMA
    if metodo == "POST" and path == "/sumar":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length).decode()

        # body: a=5&b=3
        pares = [x.split("=") for x in body.split("&")]
        data = {k: int(v) for k, v in pares}

        resultado = {
            "a": data["a"],
            "b": data["b"],
            "suma": data["a"] + data["b"]
        }

        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(resultado).encode("utf-8")]

    # 👉 404
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"No encontrado"]

server = make_server("localhost", 8000, app)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
