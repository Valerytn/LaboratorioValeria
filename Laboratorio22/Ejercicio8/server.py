# server.py
# Cumple con:
# a) Listar libros (GET /libros)
# b) Registrar un libro (POST /libros)
# c) Consultar libro por ID (GET /libros/{id})

from wsgiref.simple_server import make_server
import json
from urllib.parse import unquote

libros = [
    {"id": 1, "titulo": "1984", "autor": "George Orwell", "anio": 1949}
]

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    # a) Listar libros
    if metodo == "GET" and path == "/libros":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode("utf-8")]

    # b) Registrar libro
    elif metodo == "POST" and path == "/libros":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        datos = json.loads(body)

        nuevo_id = libros[-1]["id"] + 1 if libros else 1
        libro = {"id": nuevo_id, **datos}
        libros.append(libro)

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(libro).encode("utf-8")]

    # c) Consultar libro por ID
    elif metodo == "GET" and path.startswith("/libros/"):
        try:
            libro_id = int(path.split("/")[2])
            libro = next((l for l in libros if l["id"] == libro_id), None)
            if libro:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(libro).encode("utf-8")]
            else:
                start_response("404 Not Found", [("Content-Type", "application/json")])
                return [json.dumps({"error": "Libro no encontrado"}).encode("utf-8")]
        except:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": "ID inválido"}).encode("utf-8")]

    # Servir HTML (GET /)
    elif metodo == "GET" and path == "/":
        start_response("200 OK", [("Content-Type", "text/html; charset=utf-8")])
        with open("index.html", "rb") as f:
            return [f.read()]

    # Servir JS y CSS
    elif metodo == "GET" and (path.endswith(".js") or path.endswith(".css")):
        try:
            content_type = "application/javascript" if path.endswith(".js") else "text/css"
            start_response("200 OK", [("Content-Type", content_type)])
            with open(path.lstrip("/"), "rb") as f:
                return [f.read()]
        except FileNotFoundError:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo no encontrado"]

    # Ruta no encontrada
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

server = make_server("localhost", 8000, app)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
    