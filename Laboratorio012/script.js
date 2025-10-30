// función esPar(num) que devuelva true si el número es par 
function esPar(num) {
    if(num%2 === 0)
        return true;
    else false;
}

//una función areaRectangulo(base, altura) que retorne el área
function areaRectangulo(base, altura) {
    area = base * altura;
    return area;
}

//una función esMultiplo(a, b) que indique si a es múltiplo de b
function esMultiplo(a, b){

}


//una función mayorDeTres(a, b, c) que devuelva el mayor número
function mayorDeTres(a ,b ,c) {

    if(a>b && a>c) return a
    else if(b>a && b>c) return b;
    else if (c>a && c>b) return c;
}

// una función expresada promedio que reciba 3 notas y retorne su promedio
function promedio(a, b, c){
    return (a+b+c)/3;
}

// una función expresada convertirAMayusculas que reciba un texto y lo devuelva en mayúsculas

function convertirAMayusculas(text){
    
}

// una función expresada calcularDescuento(precio, porcentaje)
function calcularDescuento(precio, porcentaje){
    precio - (precio*(porcentaje/100));
} 

// una función flecha saludo que reciba un nombre y devuelva un mensaje
const saludo = (nombre) =>{
    return alert('Hola' + nombre);
}

// una función flecha esPositivo que indique si un número es mayor a 0
const esPositivo = (numero) => {
    if(numero > 0)
        return alert('El numero' + numero + 'es positivo');
}

//una función flecha componerTransformaciones que reciba dos funciones flecha de texto, y devuelva una nueva función
//flecha que aplique ambas en secuencia al texto ingresado. Para mayúsculas (convierte todo el parámetro en mayúsculas) y
//la otra agregarSigno (aumenta “!” al final del parámetro). console.log(transformar("hola")); // "HOLA!"



const componerTransformaciones = (a, b) => {

}

//una función procesarTexto que tenga una función interna limpiarEspacios y otra contarPalabras

function procesarTexto (texto){
    function limpiarEspacios(texto){

    }
    function contarPalabras (texto){

    }
}

//