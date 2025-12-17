from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os

class Servidor(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            archivo = "index.html"
        else:
            archivo = self.path.lstrip("/")

        if not os.path.isfile(archivo):
            self.send_error(404, "Archivo no encontrado")
            return

        self.send_response(200)
        if archivo.endswith(".html"):
            self.send_header("Content-Type", "text/html; charset=utf-8")
        elif archivo.endswith(".css"):
            self.send_header("Content-Type", "text/css")
        elif archivo.endswith(".js"):
            self.send_header("Content-Type", "application/javascript")
        else:
            self.send_header("Content-Type", "application/octet-stream")
        self.end_headers()

        with open(archivo, "rb") as f:
            self.wfile.write(f.read())

    # POST → recibe JSON y devuelve la suma
    def do_POST(self):
        if self.path == "/sumar":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length)
            try:
                datos = json.loads(body)
                a = int(datos.get("a", 0))
                b = int(datos.get("b", 0))
                resultado = {"suma": a + b}
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(resultado).encode())
            except Exception as e:
                self.send_error(400, f"Error procesando JSON: {e}")
        else:
            self.send_error(404, "No encontrado")


server = HTTPServer(("localhost", 8000), Servidor)
print("Servidor corriendo en http://localhost:8000")
server.serve_forever()
