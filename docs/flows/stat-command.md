# 📄 **Flow Document - Comando `/stats`**

## 🎯 **Objetivo**

Permitir al usuario ver sus estadísticas actuales.

---

## 🧭 **Flujo paso a paso**

1. Usuario ejecuta `/stats`.
2. El bot recupera los datos del personaje del usuario:
   - Nivel
   - Experiencia actual y experiencia necesaria para subir
   - Vida actual y vida máxima
   - Ataque
   - Defensa
   - Dinero
3. Muestra una tarjeta/respuesta con los datos de forma ordenada y bonita.

---

## 🛠️ **Errores y protección**

- Si el usuario no tiene personaje creado, responde: "Debes usar `/start` antes de ver tus estadísticas."

---

# 📈 **Resumen Visual**

```
Usuario ejecuta /stats
   ↓
¿Tiene personaje?
   ↙️                   ↘️
No → Mensaje error     Sí → Mostrar stats
```
