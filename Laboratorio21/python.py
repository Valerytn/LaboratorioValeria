import time
import random
import threading
import asyncio
import multiprocessing

def consulta():
    t = random.randint(1, 5)
    time.sleep(t)
    print(f"Consulta en {t}s")

# HILOS
hilos = []
for _ in range(3):
    h = threading.Thread(target=consulta)
    hilos.append(h)
    h.start()

# ASYNC
async def consulta_async():
    t = random.randint(1, 5)
    await asyncio.sleep(t)
    print(f"Async en {t}s")

async def main():
    await asyncio.gather(consulta_async(), consulta_async(), consulta_async())

asyncio.run(main())

# PROCESOS
procesos = []
for _ in range(3):
    p = multiprocessing.Process(target=consulta)
    procesos.append(p)
    p.start()
