# 🛣️ **Roadmap de Desarrollo - Bot de Discord RPG**

---

## 🔥 Fase 1: MVP Finalizado

✅ Registro de personaje  
✅ Exploración  
✅ Combate básico  
✅ Subida de nivel  
✅ Inventario simple  
✅ Cooldowns

**Resultado**: Bot funcional para partidas individuales.

---

## 🚀 Fase 2: Mejoras de juego individuales

**Objetivo**: Hacer más divertida la progresión de un solo jugador.

- [ ] Sistema de equipamiento:
  - Ítems de armadura y armas que modifican stats.
  - `/equip [item]` y `/unequip [item]`.
- [ ] Habilidades activas:
  - Agregar habilidades especiales que el jugador pueda usar en combate.
- [ ] Mejora de enemigos:
  - Enemigos con habilidades propias (ej: contraataques, buffs, etc.).
- [ ] Tienda:
  - Agregar `/shop` para comprar ítems con el oro ganado.

---

## 🧩 Fase 3: Soporte para Partys (grupos)

**Objetivo**: Permitir formar grupos de jugadores.

- [ ] Sistema de **Party**:
  - Crear comando `/party create`.
  - Invitar usuarios `/party invite @user`.
  - Aceptar invitaciones `/party accept`.
  - Salir de una party `/party leave`.
- [ ] Lógica de party:
  - Compartir loot (opcional).
  - Chat de party (opcional usando threads de Discord).

---

## 🧭 Fase 4: Misiones (Quests)

**Objetivo**: Agregar contenido cooperativo.

- [ ] Sistema de Quests:
  - `/quests available` → ver quests disponibles.
  - `/quest join [quest_id]` → unirse a una quest.
  - `/quest start` → iniciar la quest si el grupo está completo.
- [ ] Tipos de quest:
  - **Eliminación**: vencer X enemigos.
  - **Jefes**: vencer a un boss en conjunto.
  - **Recolecta**: conseguir X ítems del mundo.
- [ ] Lógica de combate grupal:
  - Combatir juntos contra enemigos con stats más altos.
  - Sistema de turnos para parties.

---

## 🛡️ Fase 5: Competitivo y Rankings

**Objetivo**: Mantener activos a los jugadores a largo plazo.

- [ ] Sistema de rankings:
  - Ranking de nivel más alto.
  - Ranking de oro.
  - Ranking de misiones completadas.
- [ ] Eventos semanales:
  - Bosses globales.
  - Torneos entre jugadores (PvP simple).

---

## 🛠️ Fase 6: Optimización y calidad de vida

**Objetivo**: Mejorar rendimiento y usabilidad.

- [ ] Comandos Slash mejorados (autocomplete, choices).
- [ ] Guardado de partidas más eficiente.
- [ ] Logs para depurar errores.
- [ ] Mejoras en la modularización del código.

---

# 📈 Prioridades

| Prioridad Alta            | Prioridad Media        | Prioridad Baja      |
| :------------------------ | :--------------------- | :------------------ |
| Equipamiento de personaje | Habilidades especiales | Eventos semanales   |
| Sistema de Party          | Tienda de ítems        | Rankings            |
| Sistema de Quests         | Mejora de enemigos     | Logs y optimización |

---

# 🏆 Meta Final

✅ Sistema individual divertido  
✅ Sistema cooperativo estable  
✅ Sistema de progresión a largo plazo
