# 📄 **Flow Document - Comando `/fight`**

_(Este sería para invocar un combate directamente, no durante una exploración)_

## 🎯 **Objetivo**

Permitir que un usuario luche contra un enemigo generado al instante.

---

## 🧭 **Flujo paso a paso**

1. Usuario ejecuta `/fight`.
2. El bot genera un enemigo aleatorio (como en `/explore`).
3. Muestra:
   - Nombre del enemigo
   - Vida, ataque, defensa
4. Pregunta:
   → "¿Estás listo para luchar?" (`Botón: Luchar / Cancelar`)

##### Si acepta:

- Se inicia el combate turno a turno:
  - El jugador ataca primero.
  - El enemigo responde.
- Se muestra resumen de daño cada turno.

##### Final del combate:

- Si gana → experiencia + posibles objetos/dinero.
- Si pierde → castigo leve (ej: pierde parte de su dinero).

##### Si cancela:

- Termina la pelea, vuelve al estado normal.

---

## 🛠️ **Errores y protección**

- Impedir múltiples combates simultáneos (solo un combate activo por usuario).

---

# 📈 **Resumen Visual**

```
Usuario ejecuta /fight
   ↓
Se genera enemigo
   ↓
¿Aceptar lucha?
   ↙️                  ↘️
No → Cancelar        Sí → Iniciar combate
```
