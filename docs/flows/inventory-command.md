# 📄 **Flow Document - Comando `/inventory`**

## 🎯 **Objetivo**

Permitir al usuario ver su inventario de objetos.

---

## 🧭 **Flujo paso a paso**

1. Usuario ejecuta `/inventory`.
2. El bot recupera el inventario del jugador:
   - Lista de objetos: nombre, cantidad, y tipo (arma, poción, etc.).
3. Muestra un mensaje con el inventario organizado:
   - Si tiene objetos → lista normal.
   - Si no tiene objetos → mensaje: "Tu inventario está vacío."

---

## 🛠️ **Errores y protección**

- Controlar que el inventario no muestre "null" si no hay ítems.

---

# 📈 **Resumen Visual**

```
Usuario ejecuta /inventory
   ↓
¿Tiene objetos?
   ↙️                   ↘️
No → Mostrar "vacío"     Sí → Mostrar lista de objetos
```
