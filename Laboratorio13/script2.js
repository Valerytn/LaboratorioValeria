// 3. Crea una función doblarNumeros que reciba un arreglo de números y devuelva uno nuevo con cada número duplicado
function doblarNumeros(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 2);
    }
    return resultado;
}
console.log(doblarNumeros([1,2,3,4])); // [2,4,6,8]

// 4. Crea una función filtrarYTransformar(arr) que elimine negativos, eleve al cuadrado y sume
function filtrarYTransformar(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            suma += arr[i] * arr[i];
        }
    }
    return suma;
}
console.log(filtrarYTransformar([2,-3,4,-1,5])); // 45

// 5. Crea una función reordenarPalabras(oracion) que devuelva arreglo ordenado y en mayúsculas
function reordenarPalabras(oracion) {
    let palabras = oracion.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].toUpperCase();
    }
    palabras.sort();
    return palabras;
}
console.log(reordenarPalabras("sol luna estrella planeta")); // ["ESTRELLA","LUNA","PLANETA","SOL"]

// 6. Crea un Set con nombres y elimina los repetidos automáticamente
let nombres = ["Ana","Luis","Ana","Carlos","Luis"];
let nombresUnicos = new Set(nombres);
console.log(nombresUnicos); // Set {'Ana','Luis','Carlos'}

// 7. Crea una función tieneDuplicados(arr) usando Set
function tieneDuplicados(arr) {
    let conjunto = new Set(arr);
    if (conjunto.size === arr.length) {
        return false;
    } else {
        return true;
    }
}
console.log(tieneDuplicados([1,2,3,2])); // true
console.log(tieneDuplicados([1,2,3]));   // false

// 8. Crea un Map con productos y precios, y calcula precio total de una lista de compras
let productos = new Map([
    ["manzana", 2.5],
    ["pan", 1.2],
    ["leche", 3.0]
]);
let listaCompras = ["manzana","pan","leche"];
let total = 0;
for (let i = 0; i < listaCompras.length; i++) {
    let item = listaCompras[i];
    if (productos.has(item)) {
        total += productos.get(item);
    }
}
console.log("Precio total:", total); // 6.7

// 9. Crea una función contarPalabras(texto) usando Map
function contarPalabras(texto) {
    let palabras = texto.toLowerCase().split(" ");
    let mapa = new Map();
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        if (mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra)+1);
        } else {
            mapa.set(palabra, 1);
        }
    }
    return mapa;
}
console.log(contarPalabras("sol luna sol sol estrella luna"));
// Map { 'sol' > 3, 'luna' > 2, 'estrella' > 1 }

// 10. Crea una función invertirMap(map)
function invertirMap(map) {
    let nuevo = new Map();
    for (let [clave, valor] of map) {
        nuevo.set(valor, clave);
    }
    return nuevo;
}
let capitales = new Map([["Perú","Lima"],["Chile","Santiago"]]);
console.log(invertirMap(capitales)); // Map { 'Lima' > 'Peru', 'Santiago' > 'Chile' }

// 11. Crea un objeto auto con propiedades y método detalles()
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalles: function() {
        return "Marca: " + this.marca + ", Modelo: " + 
        this.modelo + ", Año: " + this.año;
    }
};
console.log(auto.detalles()); // Marca: Toyota, Modelo: Corolla, Año: 2020

// 12. Crea una función contarLetras(texto) que devuelva un objeto con la cantidad de cada letra
function contarLetras(texto) {
    let resultado = {};
    texto = texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra !== " ") { 
            if (resultado[letra]) {
                resultado[letra]++;
            } else {
                resultado[letra] = 1;
            }
        }
    }
    return resultado;
}
console.log(contarLetras("banana")); // { b:1, a:3, n:2 }

// 13. Crea una función combinarCatalogos(tiendaA, tiendaB)
function combinarCatalogos(tiendaA, tiendaB) {
    let combinado = {};

    for (let producto in tiendaA) {
        combinado[producto] = tiendaA[producto];
    }
    for (let producto in tiendaB) {
        if (combinado.hasOwnProperty(producto)) {
            combinado[producto] = Math.min(combinado[producto], tiendaB[producto]);
        } else {
            combinado[producto] = tiendaB[producto];
        }
    }
    for (let producto in combinado) {
        combinado[producto] = Number(combinado[producto].toFixed(2));
    }
    return combinado;
}
let tiendaA = {laptop:3500.5, mouse:100.35, teclado:250.9};
let tiendaB = {mouse:95.2, monitor:720.457, teclado:260.1};
console.log(combinarCatalogos(tiendaA, tiendaB));
// { laptop: 3500.50, mouse: 95.20, teclado: 250.90, monitor: 720.46 }

// 14. Función gestionarEmpleados
function gestionarEmpleados(empleados) {
    let resultado = {}; 

    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        let area = emp.area;
        let nombre = emp.nombre;
        let salario = emp.salario;

        if (!resultado.hasOwnProperty(area)) {
            resultado[area] = {
                empleados: [],
                promedio: 0,
                sumaSalarios: 0
            };
        }

        resultado[area].empleados.push(nombre);
        resultado[area].sumaSalarios += salario;
    }

    // calcular promedio por area
    for (let area in resultado) {
        let data = resultado[area];
        data.promedio = data.sumaSalarios / data.empleados.length;
        delete data.sumaSalarios; 
    }

    return resultado;
}

//Ejemplo
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

console.log(gestionarEmpleados(listaEmpleados));

/* Salida esperada:
{
  Ventas: {empleados: ['Juan','Marta'], promedio: 2500},
  TI: {empleados: ['Luis'], promedio: 4000},
  'Recursos Humanos': {empleados: ['Ana'], promedio: 3000}
}
*/
