

# EJERCICIO 4: Calculadora de impuestos progresivos

ingreso_mensual = float(input("Ingrese ingreso mensual: "))

ingreso_anual = ingreso_mensual * 14

impuesto = 0

if ingreso_anual > 100000:
    impuesto += (ingreso_anual - 100000) * 0.30
    ingreso_anual = 100000

if ingreso_anual > 50000:
    impuesto += (ingreso_anual - 50000) * 0.20
    ingreso_anual = 50000

if ingreso_anual > 20000:
    impuesto += (ingreso_anual - 20000) * 0.10

tasa_efectiva = (impuesto / (ingreso_mensual * 14)) * 100

print("Total de impuestos:", impuesto)
print("Tasa efectiva real:", tasa_efectiva, "%")

# EJERCICIO 5: Matriz espiral NxN

N = int(input("Ingrese N (>=3): "))

while N < 3:
    N = int(input("Ingrese N válido (>=3): "))

matriz = [[0]*N for _ in range(N)]

num = 1
inicio = 0
fin = N - 1

while inicio <= fin:
    for i in range(inicio, fin + 1):
        matriz[inicio][i] = num
        num += 1

    for i in range(inicio + 1, fin + 1):
        matriz[i][fin] = num
        num += 1

    for i in range(fin - 1, inicio - 1, -1):
        matriz[fin][i] = num
        num += 1

    for i in range(fin - 1, inicio, -1):
        matriz[i][inicio] = num
        num += 1

    inicio += 1
    fin -= 1

for fila in matriz:
    print(fila)

# EJERCICIO 6: Normalizador de datos (Python puro)

def normalizar(lista, modo):
    nueva = []

    if modo == "minmax":
        minimo = min(lista)
        maximo = max(lista)
        if maximo - minimo == 0:
            return lista.copy()
        for x in lista:
            nueva.append((x - minimo) / (maximo - minimo))

    elif modo == "zscore":
        media = sum(lista) / len(lista)
        suma = 0
        for x in lista:
            suma += (x - media) ** 2
        desviacion = (suma / len(lista)) ** 0.5
        if desviacion == 0:
            return lista.copy()
        for x in lista:
            nueva.append((x - media) / desviacion)

    elif modo == "unit":
        suma = 0
        for x in lista:
            suma += x ** 2
        norma = suma ** 0.5
        if norma == 0:
            return lista.copy()
        for x in lista:
            nueva.append(x / norma)

    else:
        print("Modo inválido")
        return lista.copy()

    return nueva


valores = [10, 20, 30]
print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)

# EJERCICIO 6: Normalizador de datos (NumPy)

import numpy as np

def normalizar(lista, modo):
    v = np.array(lista, dtype=float)

    if modo == "minmax":
        if v.max() - v.min() == 0:
            return lista.copy()
        return list((v - v.min()) / (v.max() - v.min()))

    elif modo == "zscore":
        if v.std() == 0:
            return lista.copy()
        return list((v - v.mean()) / v.std())

    elif modo == "unit":
        norma = np.linalg.norm(v)
        if norma == 0:
            return lista.copy()
        return list(v / norma)

    else:
        print("Modo inválido")
        return lista.copy()


valores = [10, 20, 30]
print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)

# EJERCICIO 7: Registro de estudiantes

estudiantes = []

while True:
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mejor promedio")
    print("4. Buscar por nombre")
    print("5. Eliminar por nombre")
    print("6. Salir")

    opcion = input("Opcion: ")

    if opcion == "1":
        nombre = input("Nombre: ")
        edad = int(input("Edad: "))
        promedio = float(input("Promedio: "))
        estudiante = {"nombre": nombre, "edad": edad, "promedio": promedio}
        estudiantes.append(estudiante)

    elif opcion == "2":
        for e in estudiantes:
            print(e)

    elif opcion == "3":
        if estudiantes:
            mejor = estudiantes[0]
            for e in estudiantes:
                if e["promedio"] > mejor["promedio"]:
                    mejor = e
            print(mejor)
        else:
            print("No hay estudiantes")

    elif opcion == "4":
        nombre = input("Nombre a buscar: ")
        encontrado = False
        for e in estudiantes:
            if e["nombre"] == nombre:
                print(e)
                encontrado = True
        if not encontrado:
            print("No encontrado")

    elif opcion == "5":
        nombre = input("Nombre a eliminar: ")
        for e in estudiantes:
            if e["nombre"] == nombre:
                estudiantes.remove(e)
                print("Eliminado")
                break
        else:
            print("No encontrado")

    elif opcion == "6":
        break

    else:
        print("Opción invalida")
