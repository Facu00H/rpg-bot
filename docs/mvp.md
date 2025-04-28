# 📄 **Documento del MVP - Bot de Discord RPG**

---

## 🎯 Objetivo del MVP

Construir un bot de Discord que permita a los jugadores:

- Crear su personaje.
- Explorar un mundo mediante comandos.
- Enfrentar enemigos de manera individual.
- Ganar experiencia y oro.
- Subir de nivel.
- Gestionar un inventario de ítems.

Todo esto en partidas **individuales**, **rápidas** y **auto-contenidas**, preparado para que más adelante se puedan añadir **misiones cooperativas**.

---

## 📌 Funcionalidades incluidas en el MVP

### 1. Registro y Creación de Personaje

- Comando `/start`.
- Crear personaje único por Discord ID.
- Guardar el personaje en MongoDB.

---

### 2. Exploración

- Comando `/explore`.
- Resultado aleatorio:
  - Encuentro de enemigo (pelea).
  - Hallazgo de cofre (loot).
  - Nada.

---

### 3. Combate

- Sistema de combate contra enemigos generados dinámicamente:
  - Turnos simples: personaje ataca, enemigo ataca.
  - Finaliza en victoria o derrota.
- Recompensas:
  - Oro.
  - Experiencia.

---

### 4. Subida de Nivel

- Ganancia de experiencia por combate ganado.
- Al alcanzar umbral de XP → Subida automática de nivel.
- Mejora de estadísticas (vida, ataque, defensa).

---

### 5. Inventario

- Recepción de ítems de cofres.
- Visualización del inventario con `/inventory`.
- **(Opcional mínimo viable)**: Equipar ítems (modificar stats).

---

### 6. Visualización de Estadísticas

- Comando `/stats`.
- Mostrar nombre, nivel, vida, ataque, defensa, oro.

---

### 7. Sistema de Cooldown

- Cooldown global de 10 segundos para `/explore` y `/fight` para evitar spam.

---

## 🗺️ Alcance técnico del MVP

- **Backend**: NestJS
- **Base de datos**: MongoDB
- **Bot**: `discord.js`
- **ORM/ODM**: `@nestjs/mongoose`
- **Estructura de carpetas**: Modular por feature
- **Testing**: Test unitarios básicos en servicios críticos (ej: combate).

---

## 🧩 Diseño pensando en el futuro (quests grupales)

| Tema                                | Cómo el MVP lo prepara                                                             |
| :---------------------------------- | :--------------------------------------------------------------------------------- |
| Personajes de múltiples jugadores   | Ya tenemos personajes individuales ligados al Discord ID                           |
| Combates multijugador               | CombatService puede extenderse para soportar `GroupCombatService`                  |
| Quests cooperativas                 | Crear nuevo módulo `quests/` que busque personajes disponibles                     |
| Inventario compartido o por jugador | Inventario ya aislado por personaje                                                |
| Gestión de Party (Grupo)            | Nueva entidad "Party" que relacione múltiples personajes                           |
| Escalado                            | Cada módulo será fácilmente extendible, usando `@nestjs` inyección de dependencias |

---

## 🚀 Plan de implementación del MVP

| Fase      | Tareas                                                     | Tiempo estimado |
| :-------- | :--------------------------------------------------------- | :-------------- |
| 1         | Configurar NestJS + MongoDB + Discord Bot                  | 1 día           |
| 2         | Implementar creación de personajes `/start`                | 1 día           |
| 3         | Implementar exploración y generación de eventos `/explore` | 2 días          |
| 4         | Implementar combate y loot básico `/fight`                 | 2 días          |
| 5         | Implementar subida de nivel y mejora de stats              | 1 día           |
| 6         | Implementar inventario `/inventory`                        | 1 día           |
| 7         | Agregar cooldown global                                    | 0.5 días        |
| 8         | Testear todo (mínimo viable)                               | 1 día           |
| **Total** | **Aproximadamente 9 días** (solo MVP)                      |

---

## 🛡️ Límites del MVP

- No incluye sistema de clanes.
- No incluye PvP entre jugadores.
- No incluye quests grupales aún.
- No hay equipamiento de ítems todavía (solo loot de cofres).
- Los enemigos son simples, no tienen habilidades.
