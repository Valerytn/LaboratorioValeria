import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./SumaResta.js";

const salida = document.getElementById("salida");
const a = 10;
const b = 2;

let texto = `Operando con a = ${a} y b = ${b}\n\n`;
texto += `Suma: ${sumar(a, b)}\n`;
texto += `Resta: ${restar(a, b)}\n`;
texto += `Multiplicacion: ${multiplicar(a, b)}\n`;

try {
    texto += `Division: ${dividir(a, b)}\n`;
} catch (err) {
    texto += `Error en division: ${err.message}\n`;
}

salida.textContent = texto;
