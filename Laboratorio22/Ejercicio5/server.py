from wsgiref.simple_server import make_server
from urllib.parse import unquote
import json, os

# Servir archivos estáticos (HTML, CSS, JS)
def servir_estatico(path):
    full_path = path.lstrip("/")
    if not os.path.isfile(full_path):
        return None, None
    if full_path.endswith(".html"):
        content_type = "text/html; charset=utf-8"
    elif full_path.endswith(".css"):
        content_type = "text/css"
    elif full_path.endswith(".js"):
        content_type = "application/javascript"
    else:
        content_type = "application/octet-stream"
    with open(full_path, "rb") as f:
        return f.read(), content_type

def app(environ, start_response):
    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    # GET "/" → HTML
    if metodo == "GET" and path == "/":
        contenido, tipo = servir_estatico("index.html")
        if contenido:
            start_response("200 OK", [("Content-Type", tipo)])
            return [contenido]
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Archivo no encontrado"]

    # GET
    if metodo == "GET" and path == "/saludo":
        data = {"msg": "Hola"}
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(data).encode("utf-8")]

    # GET 
    if metodo == "GET" and (path.endswith(".css") or path.endswith(".js")):
        contenido, tipo = servir_estatico(path.lstrip("/"))
        if contenido:
            start_response("200 OK", [("Content-Type", tipo)])
            return [contenido]
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Archivo no encontrado"]

    # Ruta no encontrada
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no encontrada"]

if __name__ == "__main__":
    server = make_server("localhost", 8000, app)
    print("Servidor corriendo en http://localhost:8000")
    server.serve_forever()
