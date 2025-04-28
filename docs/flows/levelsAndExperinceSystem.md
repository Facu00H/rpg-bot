# 📄 **Flow Document - Sistema de Niveles y Experiencia**

_(Este no es comando, es sistema interno)_

## 🎯 **Objetivo**

Permitir que los jugadores suban de nivel al acumular experiencia (XP).

---

## 🧭 **Flujo paso a paso**

1. El jugador gana experiencia al vencer enemigos o abrir cofres.
2. Cada nivel requiere una cantidad creciente de XP (por ejemplo: XP = 100 × nivel actual).
3. Cuando la experiencia acumulada supera la necesaria:
   - El nivel del jugador sube automáticamente.
   - Se incrementan sus atributos:
     - Vida máxima +10%
     - Ataque +5%
     - Defensa +5%
   - Se resetea la experiencia sobrante para el siguiente nivel.
   - Mensaje: "¡Subiste a nivel 2! 🎉"

---

# 📈 **Resumen Visual**

```
Jugador gana experiencia
   ↓
¿Experiencia suficiente para nivel?
   ↙️                   ↘️
No → Suma normal     Sí → Subir de nivel
```
