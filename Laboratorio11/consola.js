//Calcular promedio con validación. Pide 5 notas y calcula el promedio, asegurándote de que estén entre 0 y 20


let notas = []
let sumaTot = 0

for (let i = 1; i <= 5; i++) {
  let textoNota = ""
  let nota = -1

  while (nota < 0 || nota > 20 || textoNota === "") {
    textoNota = prompt("Ingrese la nota " + i + " (0 a 20):")
    nota = parseFloat(textoNota)
  }

  notas.push(nota)
  sumaTotal = sumaTot + nota
}

let promedio = sumaTot / notas.length

console.log("Notas:", notas)
console.log("Promedio:", promedio.toFixed(2))


// 4. Clasificar edad

let edad = parseInt(prompt("Ingrese su edad:"));
if (edad < 12) console.log("Niño");
else if (edad <= 17) console.log("Adolescente");
else if (edad <= 59) console.log("Adulto");
else console.log("Adulto mayor");


// 5. Contador de numeros pares e impares

let pares = 0, impares = 0;
for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt(`Ingrese el numero ${i}:`));
  if (num % 2 === 0) pares++;
  else impares++;
}
console.log(`Pares: ${pares}, Impares: ${impares}`);


// 6. Tabla de multiplicar (1 al 12)

let numTabla = parseInt(prompt("Ingrese un numero para su tabla:"));
for (let i = 1; i <= 12; i++) {
  console.log(`${numTabla} x ${i} = ${numTabla * i}`);
}


// 7. Cajero automatico

let monto = parseInt(prompt("Ingrese monto a retirar (multiplo de 10):"));
let billetes = [100, 50, 20, 10];
let resultado = {};

for (let billete of billetes) {
  resultado[billete] = Math.floor(monto / billete);
  monto %= billete;
}

console.log("Billetes entregados:");
for (let b of billetes) {
  if (resultado[b] > 0) console.log(`${b}: ${resultado[b]}`);
}


// 8. Numeros primos en rango

let limite = parseInt(prompt("Ingrese un numero limite:"));
console.log(`Primos entre 1 y ${limite}:`);

for (let n = 2; n <= limite; n++) {
  let esPrimo = true;
  for (let d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) console.log(n);
}


// 9. Suma desde 1 hasta N, omitiendo multiplos de 5

let N = parseInt(prompt("Ingrese N:"));
let suma = 0;
for (let i = 1; i <= N; i++) {
  if (i % 5 !== 0) suma += i;
}
console.log(`Suma total (sin multiplos de 5): ${suma}`);


// 10. Menu: area del circulo - rectangulo - salir

let opcion;
do {
  opcion = prompt("Elija opcion:\n1. Area del circulo\n2. Area del rectangulo\n3. Salir");
  switch (opcion) {
    case "1":
      let r = parseFloat(prompt("Ingrese radio:"));
      console.log("Area del circulo:", (Math.PI * r * r).toFixed(2));
      break;
    case "2":
      let a = parseFloat(prompt("Ingrese base:"));
      let b = parseFloat(prompt("Ingrese altura:"));
      console.log("Area del rectángulo:", (a * b).toFixed(2));
      break;
    case "3":
      console.log("Saliendo del menu");
      break;
    default:
      console.log("Opcion no valida.");
  }
} while (opcion !== "3");


// 11. Numero Armstrong

let numeroTexto = prompt("Ingrese un numero:")
let numero = parseInt(numeroTexto)
let cantidadDigitos = numeroTexto.length

let sumaTotal = 0

for (let i = 0; i < cantidadDigitos; i++) {
  let digitoTexto = numeroTexto[i]
  let digitoNumero = parseInt(digitoTexto)
  let potencia = Math.pow(digitoNumero, cantidadDigitos)
  sumaTotal = sumaTotal + potencia
}

if (sumaTotal === numero) {
  console.log("Es un numero Armstrong")
} else {
  console.log("No es un numero Armstrong")
}



// 12. Menu con multiples opciones

let opc;
let listaNotas = [];

do {
  opcion = prompt(
    "MENU:\n" +
    "1. Ingresar N notas\n" +
    "2. Promedio\n" +
    "3. Valor máximo\n" +
    "4. Valor mínimo\n" +
    "5. Cantidad pares / impares\n" +
    "6. Cuántos están por encima del promedio\n" +
    "7. Contar pares e impares en un rango\n" +
    "8. Generar tabla de multiplicar\n" +
    "9. Salir"
  );

  switch (opc) {

    case "1":
      listaNotas = [];
      let cantidad = parseInt(prompt("¿Cuantas notas desea ingresar?"));

      for (let i = 0; i < cantidad; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
        listaNotas.push(nota);
      }

      console.log("Notas registradas:", listaNotas);
      break;

    case "2":
      if (listaNotas.length === 0) {
        console.log("Primero debe ingresar notas.");
      } else {
        let suma = 0;
        for (let i = 0; i < listaNotas.length; i++) {
          suma += listaNotas[i];
        }
        let promedio = suma / listaNotas.length;
        console.log("Promedio:", promedio.toFixed(2));
      }
      break;

    case "3":
      if (listaNotas.length === 0) {
        console.log("Primero debe ingresar notas.");
      } else {
        let maximo = listaNotas[0];
        for (let i = 1; i < listaNotas.length; i++) {
          if (listaNotas[i] > maximo) {
            maximo = listaNotas[i];
          }
        }
        console.log("Valor maximo:", maximo);
      }
      break;

    case "4":
      if (listaNotas.length === 0) {
        console.log("Primero debe ingresar notas.");
      } else {
        let minimo = listaNotas[0];
        for (let i = 1; i < listaNotas.length; i++) {
          if (listaNotas[i] < minimo) {
            minimo = listaNotas[i];
          }
        }
        console.log("Valor minimo:", minimo);
      }
      break;

    case "5":
      if (listaNotas.length === 0) {
        console.log("Primero debe ingresar notas.");
      } else {
        let pares = 0;
        let impares = 0;
        for (let i = 0; i < listaNotas.length; i++) {
          if (listaNotas[i] % 2 === 0) {
            pares++;
          } else {
            impares++;
          }
        }
        console.log("Pares:", pares, "Impares:", impares);
      }
      break;

    case "6":
      if (listaNotas.length === 0) {
        console.log("Primero debe ingresar notas.");
      } else {
        let suma = 0;
        for (let i = 0; i < listaNotas.length; i++) {
          suma += listaNotas[i];
        }
        let promedio = suma / listaNotas.length;

        let encima = 0;
        for (let i = 0; i < listaNotas.length; i++) {
          if (listaNotas[i] > promedio) {
            encima++;
          }
        }

        console.log("Notas por encima del promedio:", encima);
      }
      break;

    case "7":
      let inicio = parseInt(prompt("Inicio del rango:"));
      let fin = parseInt(prompt("Fin del rango:"));
      let pares = 0;
      let impares = 0;

      for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
          pares++;
        } else {
          impares++;
        }
      }

      console.log("Pares:", pares, "Impares:", impares);
      break;

    case "8":
      let n = parseInt(prompt("Ingrese un numero para ver su tabla:"));
      for (let i = 1; i <= 12; i++) {
        console.log(n + " x " + i + " = " + (n * i));
      }
      break;

    case "9":
      console.log("Saliendo del menu");
      break;

    default:
      console.log("Opcion no valida. Intente nuevamente.");
  }

} while (opcion !== "9");

// 13. Simulador de carrito de compras

let total = 0;
let seguirComprando;

do {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if (precio !== "" && precio >= 0) {
    total = total + precio;
  } else {
    console.log("Precio invalido, intente de nuevo.");
  }

  seguirComprando = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();
} while (seguirComprando === "si");

console.log("Total de su compra:", total.toFixed(2)); //sin descuento

if (total > 100) {
  console.log("Tiene un descuento del 10%");
  total = total * 0.9;
} else if (total >= 50) {
  console.log("Gana un cupon del 5%");
  total = total * 0.95;
} else {
  console.log("No aplica descuento");
}

console.log("Total final a pagar:", total.toFixed(2));

//14. Mismo ejercicio anterior, pero con un límite en su presupuesto. La app no deberá permitir que se pase del presupuesto y no
//deberá considerar el último producto
let presupuesto = 100
let totall = 0

while (true) {
	let precio = parseFloat(prompt("Ingrese precio del producto o 0 para terminar"))

	if (precio === 0 || isNaN(precio)) break

	if (total + precio > presupuesto) {
		alert("No se puede agregar, supera el presupuesto")
		continue
	}

	total += precio
}

let mensaje = ""
let totalFinal = total

if (total > 100) {
	mensaje = "Tiene un descuento del 10%"
	totalFinal = total * 0.9
} else if (total >= 50) {
	mensaje = "Gana un cupon de 5%"
	totalFinal = total * 0.95
} else {
	mensaje = "No aplica descuento"
}

alert("Total parcial: " + total)
alert(mensaje)
alert("Total final: " + totalFinal)
