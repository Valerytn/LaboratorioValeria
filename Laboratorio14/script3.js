/*3. Redondeo de precios. Pide un numero decimal que represente el precio de un producto y que muestre:
    • Redondeo hacia abajo
    • Redondeo hacia arriba
    • Redondeo normal
    Tip: prueba con el numero 12.49 y 12.5 */

let numero = parseFloat(prompt("Ingresar el precio del producto: "));
console.log("Su costo redondeado hacia abajo es", Math.floor(numero));
console.log("Su costo redondeado hacia arriba es", Math.ceil(numero));
console.log("Su costo redondeado normal es", Math.round(numero));

/*4. Numero aleatorio en un rango. Crear una funcion numeroAleatorio(min, max) que devuelva un numero entero entre min y max (incluidos)*/

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numAleatorio = numeroAleatorio(5, 100);
console.log("Numero aleatorio entre 5 y 100:", numAleatorio);

/*5. Lanzamiento de dados. Simula el lanzamiento de dos dados (valores del 1 al 6) y muestra su suma.
Tip: reutiliza la funcion del ejercicio anterior*/

let dado1 = numeroAleatorio(1, 6);
let dado2 = numeroAleatorio(1, 6);
console.log("Dado 1:", dado1, "Dado 2:", dado2, "Suma:", (dado1 + dado2));

/*6. Potencias y raices. Solicita un numero y muestra su cuadrado, cubo y raiz cuadrada usando Math.pow() y Math.sqrt()*/

let opcion = 0;
let numero1 = parseFloat(prompt("Ingresar un numero: "));

opcion = parseInt(prompt("MENU\n1. Hallar el cuadrado del numero\n2. Hallar el cubo del numero\n3. Hallar la raiz cuadrada del numero\nIngresar opcion:"));

switch (opcion) {
    case 1: 
        console.log("El cuadrado de", numero1, "es", Math.pow(numero1, 2));
        break;
    case 2:
        console.log("El cubo de", numero1, "es", Math.pow(numero1, 3));
        break;
    case 3:
        console.log("La raiz cuadrada de", numero1, "es", Math.sqrt(numero1));
        break;
    default:
        console.log("Opcion invalida");
        break;
}

/*7. Conversion de grados a radianes y de radianes a grados. Crea una funcion gradosARadianes(grados) que convierta angulos
de grados a radianes y muestre el seno y coseno del angulo*/

function gradosARadianes(grados){
    return grados * (Math.PI / 180);
}

function radianesAGrados(radianes){
    return radianes * (180 / Math.PI);
}

let angulo = parseFloat(prompt("Ingresar el angulo en grados: "));
let anguloRad = gradosARadianes(angulo);
console.log("El seno del angulo", angulo, "es", Math.sin(anguloRad));
console.log("El coseno del angulo", angulo, "es", Math.cos(anguloRad));

/*8. Generar contrasenas numericas. Crear una funcion que genere una contrasena aleatoria de 6 digitos (solo numeros).
Tip: recorre un bucle 6 veces y genera un digito del 0 al 9 en cada iteracion*/

function generarContrasena(){
    let contrasena = "";
    for (let i = 0; i < 6; i++){
        let digitoAleatorio = Math.floor(Math.random() * 10);
        contrasena += digitoAleatorio;
    }
    return contrasena;
}

let miContrasena = generarContrasena();
console.log("Su nueva contrasena de 6 digitos es:", miContrasena);

/*9. Calcular distancia entre dos puntos en el plano cartesiano. Dadas las coordenadas (x1, y1) y (x2, y2), calcular la distancia
entre los puntos y la suma de las distancias de cada punto al origen*/

let x1 = parseFloat(prompt("Ingresar x1: "));
let y1 = parseFloat(prompt("Ingresar y1: "));
let x2 = parseFloat(prompt("Ingresar x2: "));
let y2 = parseFloat(prompt("Ingresar y2: "));

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
let distanciaOrigen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
let distanciaOrigen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

console.log("La distancia entre los puntos es:", distancia);
console.log("La distancia del punto 1 al origen es:", distanciaOrigen1);
console.log("La distancia del punto 2 al origen es:", distanciaOrigen2);
console.log("La suma de las dos distancias al origen es:", distanciaOrigen1 + distanciaOrigen2);

/*10. Normalizacion de calificaciones. Dado un arreglo de calificaciones, normalizar todos los valores al rango 0–1 dividiendo cada
nota entre el maximo del arreglo
Tip: usa el operador de propagacion: Math.max(...array). */

let calificaciones = [12, 15, 18, 10, 20];
let maximo = Math.max(...calificaciones);
let normalizadas = calificaciones.map(nota => nota / maximo);
console.log("Calificaciones normalizadas:", normalizadas);


/*11. Control de inventario con encapsulacion. Crear una clase Producto con atributos privados nombre, precio, stock.
Implementa setters que validen que el precio y el stock sean mayores a 0
Agregar un metodo vender(cantidad) que disminuya el stock solo si hay unidades suficientes */

class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    set precio(valor) {
        if (valor > 0) this.#precio = valor;
        else console.log("El precio debe ser mayor a 0");
    }

    get precio() {
        return this.#precio;
    }

    set stock(valor) {
        if (valor > 0) this.#stock = valor;
        else console.log("El stock debe ser mayor a 0");
    }

    get stock() {
        return this.#stock;
    }

    vender(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log("Venta realizada, stock actual:", this.#stock);
        } else {
            console.log("Stock insuficiente");
        }
    }
}

let prod = new Producto("Laptop", 3500, 10);
prod.vender(3);


/*12. Modificar Producto para que el getter precio devuelva el valor con formato de moneda ($120.00) y que el setter acepte
tanto numero como cadena ("120.5")
Tip: puedes usar Number() y toFixed(2) */

class Producto2 {
    #precio;

    constructor(precio) {
        this.precio = precio;
    }

    set precio(valor) {
        let numero = Number(valor);
        if (numero > 0) this.#precio = numero;
        else console.log("Precio invalido");
    }

    get precio() {
        return "$" + this.#precio.toFixed(2);
    }
}

let p = new Producto2("120.5");
console.log(p.precio);


/*13. Herencia. Crear una clase Figura. Debe tener un metodo area() y perimetro() que las subclases Cuadrado y Triangulo deben
sobrescribir.
Tip: llamar a constructor de la superclase */

class Figura {
    area() {}
    perimetro() {}
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }

    perimetro() {
        return 4 * this.lado;
    }
}

class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

let c = new Cuadrado(5);
console.log("Area cuadrado:", c.area(), "Perimetro:", c.perimetro());

let t = new Triangulo(5, 3, 5, 4, 3);
console.log("Area triangulo:", t.area(), "Perimetro:", t.perimetro());


/*14. Herencia. Crear una clase base Usuario con nombre y email. Que lo hereden Cliente y Administrador
• Cliente tiene un nivel de fidelidad [1–5]
• Administrador tiene permisos (crear, editar, eliminar)
Cada uno sobrescribe mostrarInfo() con diferente detalle
Tip: llama a super() para reutilizar atributos base */

class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return "Usuario: " + this.nombre + ", Email: " + this.email;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }

    mostrarInfo() {
        return super.mostrarInfo() + ", Nivel de fidelidad: " + this.nivelFidelidad;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return super.mostrarInfo() + ", Permisos: " + this.permisos.join(", ");
    }
}

let cliente = new Cliente("Luis", "luis@mail.com", 4);
console.log(cliente.mostrarInfo());

let admin = new Administrador("Ana", "ana@mail.com", ["crear", "editar", "eliminar"]);
console.log(admin.mostrarInfo());

/*17. Encapsulacion y polimorfismo. Crear una clase Cuenta con atributo privado saldo y metodos depositar() y retirar().
Luego crea subclases CuentaAhorro y CuentaCorriente que redefinan retirar() segun sus reglas (por ejemplo, permitir
sobregiro en la cuenta corriente pero con un limite) y tambien la transferencia entre cuentas
Tip: implementa validaciones distintas en cada clase hija. */

class Cuenta {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log("Deposito realizado. Saldo actual:", this.#saldo);
        } else {
            console.log("Monto invalido");
        }
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log("Retiro realizado. Saldo actual:", this.#saldo);
        } else {
            console.log("Fondos insuficientes");
        }
    }

    transferir(monto, cuentaDestino) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            cuentaDestino.depositar(monto);
            console.log("Transferencia realizada. Saldo actual:", this.#saldo);
        } else {
            console.log("Transferencia no realizada");
        }
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            super.retirar(monto);
        } else {
            console.log("En cuenta de ahorro no se permite retirar mas del saldo disponible");
        }
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.saldo + this.limiteSobregiro) {
            console.log("Retiro realizado");
            let nuevoSaldo = this.saldo - monto;
            this.depositar(nuevoSaldo - this.saldo);
        } else {
            console.log("Se supera el limite de sobregiro");
        }
    }
}

let ahorro = new CuentaAhorro(500);
let corriente = new CuentaCorriente(300, 200);

ahorro.retirar(600);
corriente.retirar(450);
ahorro.transferir(200, corriente);


/*18. Composicion. Crear una clase Carrito que contenga una lista de objetos Producto. Agrega metodos agregarProducto(),
calcularTotal() y mostrarResumen()
Tip: usa un array de objetos */

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log("Producto agregado:", producto.nombre);
    }

    calcularTotal() {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }

    mostrarResumen() {
        console.log("Resumen del carrito:");
        this.productos.forEach(p => console.log("- " + p.nombre + ": $" + p.precio));
        console.log("Total a pagar: $" + this.calcularTotal());
    }
}

let carrito = new Carrito();
carrito.agregarProducto(new Producto("Pan", 5));
carrito.agregarProducto(new Producto("Leche", 7));
carrito.agregarProducto(new Producto("Huevos", 12));
carrito.mostrarResumen();


/*19. Polimorfismo. Crear una clase base Notificacion con un metodo enviar(). Implementa subclases Email, SMS y Push que
sobrescriban enviar() con mensajes distintos. Luego crea una funcion que reciba una lista de notificaciones y las procese
dinamicamente
Tip: usa una estructura de datos adecuada que almacene objetos y que llame a notificacion.enviar() en un bucle */

class Notificacion {
    constructor(destino) {
        this.destino = destino;
    }

    enviar() {}
}

class Email extends Notificacion {
    enviar() {
        console.log("Enviando email a", this.destino);
    }
}

class SMS extends Notificacion {
    enviar() {
        console.log("Enviando SMS a", this.destino);
    }
}

class Push extends Notificacion {
    enviar() {
        console.log("Enviando notificacion push a", this.destino);
    }
}

function procesarNotificaciones(lista) {
    lista.forEach(notificacion => {
        notificacion.enviar();
    });
}

let notificaciones = [
    new Email("cliente@mail.com"),
    new SMS("999123456"),
    new Push("@usuario1")
];

procesarNotificaciones(notificaciones);
