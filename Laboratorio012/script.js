// 3. Crea una función esPar(num) que devuelva true si el número es par
function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("¿4 es par?", esPar(4)); // true
console.log("¿7 es par?", esPar(7)); // false

// 4. Crea una función areaRectangulo(base, altura) que retorne el área
function areaRectangulo(base, altura) {
    if (base > 0 && altura > 0) {
        return base * altura;
    } else {
        return 0; // Si alguna medida no es positiva, devuelve 0
    }
}
console.log("Area de 5x3:", areaRectangulo(5,3)); // 15

// 5. Crea una función esMultiplo(a, b) que indique si a es múltiplo de b
function esMultiplo(a, b) {
    if (b === 0) {
        return false; // No se puede dividir entre 0
    }
    if (a % b === 0) {
        return true;
    } else {
        return false;
    }
}
console.log("6 es multiplo de 3?", esMultiplo(6,3)); // true
console.log("7 es multiplo de 3?", esMultiplo(7,3)); // false

// 6. Crea una función mayorDeTres(a, b, c) que devuelva el mayor número
function mayorDeTres(a, b, c) {
    let mayor = a;
    if (b > mayor) {
        mayor = b;
    }
    if (c > mayor) {
        mayor = c;
    }
    return mayor;
}
console.log("Mayor de 5,9,2:", mayorDeTres(5,9,2)); // 9

// 7. Crea una función expresada promedio que reciba 3 notas y retorne su promedio
const promedio = function(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    let prom = suma / 3;
    return prom;
}
console.log("Promedio de 4,5,6:", promedio(4,5,6)); // 5

// 8. Crea una función expresada convertirAMayusculas que reciba un texto y lo devuelva en mayúsculas
const convertirAMayusculas = function(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra >= 'a' && letra <= 'z') {
            let codigo = letra.charCodeAt(0) - 32;
            resultado += String.fromCharCode(codigo);
        } else {
            resultado += letra;
        }
    }
    return resultado;
}
console.log(convertirAMayusculas("hola mundo")); // "HOLA MUNDO"

// 9. Crea una función expresada calcularDescuento(precio, porcentaje)
const calcularDescuento = function(precio, porcentaje) {
    if (precio < 0) {
        return 0;
    }
    if (porcentaje < 0 || porcentaje > 100) {
        return precio;
    }
    let descuento = precio * porcentaje / 100;
    let total = precio - descuento;
    return total;
}
console.log(calcularDescuento(100, 20)); // 80

// 10. Crea una función flecha saludo que reciba un nombre y devuelva un mensaje
const saludo = nombre => {
    if (nombre === "") {
        return "Hola, Amigo!";
    } else {
        return "Hola, " + nombre + "!";
    }
}
console.log(saludo("Ana")); // "Hola, Ana!"
console.log(saludo(""));    // "Hola, Amigo!"

// 11. Crea una función flecha esPositivo que indique si un número es mayor a 0
const esPositivo = num => {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esPositivo(5));  // true
console.log(esPositivo(-2)); // false

// 12. Crea una función flecha componerTransformaciones
const componerTransformaciones = (f1, f2) => texto => f2(f1(texto));
const mayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => texto + "!";
const transformar = componerTransformaciones(mayusculas, agregarSigno);
console.log(transformar("hola")); // "HOLA!"

// 13. Crea una función procesarTexto con funciones internas limpiarEspacios y contarPalabras
function procesarTexto(texto) {
    function limpiarEspacios(string) {
        let resultado = "";
        let espacioPrevio = false;
        for (let i = 0; i < str.length; i++) {
            if (string[i] !== " ") {
                resultado += string[i];
                espacioPrevio = false;
            } else {
                if (!espacioPrevio) {
                    resultado += " ";
                    espacioPrevio = true;
                }
            }
        }
        return resultado.trim();
    }

    function contarPalabras(str) {
        let limpio = limpiarEspacios(str);
        if (limpio === "") return 0;
        let palabras = limpio.split(" ");
        return palabras.length;
    }

    return {
        textoLimpio: limpiarEspacios(texto),
        numeroPalabras: contarPalabras(texto)
    };
}
console.log(procesarTexto("   Hola   mundo   desde JS   "));

// 14. Crea una función operacionesMatematicas() con closures y funciones flecha
function operacionesMatematicas() {
    const sumar = (a,b) => a+b;
    const restar = (a,b) => a-b;
    const multiplicar = (a,b) => a*b;
    const dividir = (a,b) => {
        if (b === 0) {
            return "Error: division entre 0";
        } else {
            return a/b;
        }
    };
    return {sumar, restar, multiplicar, dividir};
}
const ops = operacionesMatematicas();
console.log("5+3 =", ops.sumar(5,3));
console.log("5/0 =", ops.dividir(5,0));

// 15. Crea una función crearContador() con incrementar() y resetear()
function crearContador() {
    let valor = 0;
    function incrementar() {
        valor++;
        return valor;
    }
    function resetear() {
        valor = 0;
        return valor;
    }
    return {incrementar, resetear};
}
const contador = crearContador();
console.log(contador.incrementar()); // 1
console.log(contador.incrementar()); // 2
console.log(contador.resetear());    // 0

// 16. Crea una función acumulador(valorInicial)
function acumulador(valorInicial) {
    let total = valorInicial;
    return function(valorNuevo) {
        total += valorNuevo;
        return total;
    };
}
const acum = acumulador(10);
console.log(acum(5)); // 15
console.log(acum(3)); // 18

// 17. Crea la función saludo(nombre = "Amigo")
function saludoDef(nombre) {
    if (nombre === undefined || nombre === "") {
        return "Hola, Amigo!";
    } else {
        return "Hola, " + nombre + "!";
    }
}
console.log(saludoDef()); // "Hola, Amigo!"
console.log(saludoDef("Luis")); // "Hola, Luis!"

// 18. Crea una función media(...numeros)
function media(...numeros) {
    if (numeros.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}
console.log(media(2,3,4)); // 3

// 19. Crear mostrarDatos(nombre, edad, ...hobbies)
function mostrarDatos(nombre, edad, ...hobbies) {
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    if (hobbies.length > 0) {
        console.log("Hobbies: " + hobbies.join(", "));
    } else {
        console.log("No hay hobbies.");
    }
}
mostrarDatos("Ana", 25, "leer", "correr");

// 20. Crea una función ejecutarOperacion(fn, x, y)
function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}
console.log(ejecutarOperacion((a,b) => a+b, 5, 7)); // 12

// 21. Crea una función filtrarArreglo(arr, callback)
function filtrarArreglo(arr, callback) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}
console.log(filtrarArreglo([1,2,3,4,5], n => n%2===0)); // [2,4]

// 22. Simula una función descargarArchivo(url, callback)
function descargarArchivo(url, callback) {
    console.log("Descargando");
    setTimeout(function() {
        callback("Descarga completa de " + url);
    }, 1000);
}
descargarArchivo("archivo.zip", mensaje => console.log(mensaje));

// 23. Recursividad pura — Potencia sin ** ni Math.pow()
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * potencia(base, exponente-1);
    }
}
console.log("2^5 =", potencia(2,5)); // 32

// 24. Generador de secuencia aritmética (con closure y estado interno)
// Crea una función crearSecuencia(inicio, paso) que devuelva otra función.
// Cada vez que se invoque la función interna, devuelve el siguiente número de la secuencia.

function crearSecuencia(inicio, paso) {
    let actual = inicio;

    return function() {
        let valor = actual; 
        actual = actual + paso;
        return valor; 
    };
}

// Ejemplo
const secuencia = crearSecuencia(2, 3);
console.log(secuencia()); // 2
console.log(secuencia()); // 5
console.log(secuencia()); // 8
console.log(secuencia()); // 11
console.log(secuencia()); // 14

let inicio = parseInt(prompt("Ingresa el inicio de la secuencia:"));
let paso = parseInt(prompt("Ingresa el paso de la secuencia:"));

const secuenciaUsuario = crearSecuencia(inicio, paso);

console.log("Primer numero:", secuenciaUsuario());
console.log("Segundo numero:", secuenciaUsuario());
console.log("Tercer numero:", secuenciaUsuario());
console.log("Cuarto numero:", secuenciaUsuario());
