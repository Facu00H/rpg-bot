# 📄 **Flow Document - Comando `/start`**

## 🎯 **Objetivo**

Permitir que un usuario cree su personaje y empiece su aventura en el bot.

---

## 🧭 **Flujo paso a paso**

1. Usuario ejecuta `/start`.
2. El bot verifica si el usuario ya tiene un personaje.
   - **Si ya existe**: responde "Ya tienes un personaje creado." y cancela.
   - **Si no existe**:
     - Crea un nuevo personaje inicializado:
       - **Nivel:** 1
       - **Experiencia:** 0
       - **Vida máxima:** valor base (ej: 100)
       - **Ataque y defensa:** valores base (ej: 10 y 5)
       - **Inventario:** vacío o con starter items (ej: 1 poción de vida)
       - **Dinero:** 0 o una pequeña cantidad inicial.
     - Guarda al jugador en la base de datos.
     - Responde: "¡Bienvenido, aventurero! Tu aventura comienza ahora."

---

## 🛠️ **Errores y protección**

- Validar que no cree múltiples personajes (uno por usuario de Discord).

---

# 📈 **Resumen Visual**

```
Usuario ejecuta /start
   ↓
¿Tiene personaje?
   ↙️                   ↘️
Sí → Mostrar mensaje    No → Crear personaje
```
