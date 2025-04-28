# 📄 **Flow Document - Sistema de Loot**

## 🎯 **Objetivo**

Entregar recompensas a los jugadores al derrotar enemigos o abrir cofres.

---

## 🧭 **Flujo paso a paso**

1. Cuando un jugador vence un enemigo o abre un cofre:
2. Se genera aleatoriamente un loot:
   - Probabilidad de recibir:
     - Dinero
     - Objeto de inventario (poción, arma, armadura)
     - Nada (pequeña probabilidad)
3. El loot se añade al inventario automáticamente.
4. Se muestra un mensaje:
   - "¡Recibiste X monedas y una Espada de Hierro del Veneno!"

---

## 🛠️ **Notas sobre loot**

- Mejor loot en enemigos más fuertes o cofres raros.
- Probabilidad de rareza basada en nivel del jugador.

---

# 📈 **Resumen Visual**

```
Jugador derrota enemigo o abre cofre
   ↓
Se genera loot aleatorio
   ↓
Loot añadido al inventario
```
