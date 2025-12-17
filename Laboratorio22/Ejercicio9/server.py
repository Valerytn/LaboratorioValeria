# server.py
# Endpoints:
# a) GET /equipos → listar equipos
# b) POST /equipos → registrar un equipo
# c) GET /equipos/{id} → consultar equipo por ID
from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote

# Lista inicial de equipos
equipos = [
    {"id": 1, "nombre": "Real Madrid", "ciudad": "Madrid", "nivelAtaque": 10, "nivelDefensa": 9},
    {"id": 2, "nombre": "Barcelona", "ciudad": "Barcelona", "nivelAtaque": 9, "nivelDefensa": 8},
    {"id": 3, "nombre": "Melgar", "ciudad": "Arequipa", "nivelAtaque": 5, "nivelDefensa": 4}
]

# Servir archivos desde la misma carpeta
def servir_archivo(nombre):
    if not os.path.isfile(nombre):
        return None, None
    tipo, _ = mimetypes.guess_type(nombre)
    if tipo is None:
        tipo = "application/octet-stream"
    with open(nombre, "rb") as f:
        return f.read(), tipo

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    if path in ["/index.html", "/app.js", "/styles.css"]:
        contenido, tipo = servir_archivo(path.lstrip("/"))
        if contenido:
            start_response("200 OK", [("Content-Type", tipo)])
            return [contenido]
        else:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo no encontrado"]

    # GET "/" → index.html
    if metodo == "GET" and path == "/":
        contenido, tipo = servir_archivo("index.html")
        if contenido:
            start_response("200 OK", [("Content-Type", tipo)])
            return [contenido]
        else:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo no encontrado"]

    # a) Listar equipos
    if metodo == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode("utf-8")]

    # b) Registrar equipo
    if metodo == "POST" and path == "/equipos":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        datos = json.loads(body)

        nuevo_id = equipos[-1]["id"] + 1 if equipos else 1
        equipo = {"id": nuevo_id, **datos}
        equipos.append(equipo)

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(equipo).encode("utf-8")]

    # c) Consultar equipo por ID
    if metodo == "GET" and path.startswith("/equipos/"):
        try:
            equipo_id = int(path.split("/")[2])
            equipo = next((e for e in equipos if e["id"] == equipo_id), None)
            if equipo:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(equipo).encode("utf-8")]
            else:
                start_response("404 Not Found", [("Content-Type", "application/json")])
                return [json.dumps({"error": "Equipo no encontrado"}).encode("utf-8")]
        except:
            start_response("400 Bad Request", [("Content-Type", "application/json")])
            return [json.dumps({"error": "ID inválido"}).encode("utf-8")]

    # Ruta no encontrada
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

server = make_server("localhost", 8000, app)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
