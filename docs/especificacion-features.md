# Bot de Discord: **Aventura RPG Chat**

## Descripción general

Un bot que permite a los usuarios vivir aventuras tipo RPG directamente en el chat de Discord. Podrán explorar mazmorras, luchar contra enemigos, conseguir botines, subir de nivel y mejorar sus estadísticas.

---

## Features principales

### 1. **Sistema de Registro de Personaje**

- Comando `/start` para crear tu personaje.
- Cada personaje tendrá:
  - Nombre personalizado.
  - Clase inicial (Guerrero, Mago, Pícaro, etc.).
  - Estadísticas iniciales (Fuerza, Destreza, Inteligencia, Vida).
  - Inventario vacío.

---

### 2. **Exploración**

- Comando `/explore`
- El bot genera eventos aleatorios:
  - Encuentro con monstruos.
  - Descubrimiento de cofres.
  - Trampas.
  - Eventos de decisiones (ej: "¿Tomar el camino izquierdo o derecho?").

---

### 3. **Combate por Turnos**

- Si el usuario encuentra un monstruo, entra en modo combate:
  - Comandos de combate: `/attack`, `/defend`, `/use-item`, `/run`.
  - El enemigo también ataca automáticamente tras cada turno.
- Si el jugador gana:
  - Obtiene experiencia (XP).
  - Puede ganar objetos.
- Si pierde:
  - Pierde algo de oro o XP, o recibe una penalización temporal.

---

### 4. **Sistema de Niveles**

- Cada acción da experiencia (XP).
- Al subir de nivel:
  - Aumento de stats (vida, fuerza, etc.).
  - Posibilidad de elegir una nueva habilidad o mejora.

---

### 5. **Inventario y Equipamiento**

- Sistema de inventario básico.
- Items:
  - Pociones de vida o magia.
  - Armas (espadas, varitas, dagas).
  - Armaduras.
- Equipamiento:
  - Cambiar equipamiento mediante `/equip [item]`.

---

### 6. **Sistema de Habilidades Especiales**

- Cada clase tiene habilidades únicas.
- Cooldowns (tiempos de espera) para usar habilidades.
- Ejemplos:
  - Guerrero: "Golpe poderoso" (gran daño en un solo ataque).
  - Mago: "Bola de fuego" (daño en área).
  - Pícaro: "Golpe crítico" (probabilidad de daño doble).

---

### 7. **Misiones (Quests)**

- Comando `/quests` para ver misiones disponibles.
- Tipos de misiones:
  - Eliminar ciertos enemigos.
  - Buscar un objeto específico.
  - Sobrevivir a varias exploraciones.
- Recompensas:
  - Oro.
  - Objetos raros.
  - Grandes cantidades de experiencia.

---

### 8. **Sistema de Logros**

- Logros por:
  - Número de enemigos derrotados.
  - Jefes especiales vencidos.
  - Niveles alcanzados.
- Desbloqueo de títulos visibles en el perfil.

---

### 9. **Mazmorras Especiales (Opcional)**

- Comando `/dungeon`
- Mazmorras de varios niveles de dificultad.
- Al llegar al final: enfrentar a un "Boss" (jefe final).

---

### 10. **Sistema Económico**

- Moneda virtual (ej: "oro").
- Comprar en tienda con `/shop`:
  - Pociones.
  - Armas mejores.
  - Accesorios.
- Vender objetos encontrados.

---

## Comandos básicos resumidos

| Comando      | Función                      |
| ------------ | ---------------------------- |
| `/start`     | Crear personaje              |
| `/profile`   | Ver tu personaje             |
| `/explore`   | Explorar y encontrar eventos |
| `/attack`    | Atacar en combate            |
| `/defend`    | Defenderse en combate        |
| `/use-item`  | Usar un objeto               |
| `/run`       | Escapar del combate          |
| `/quests`    | Ver misiones disponibles     |
| `/shop`      | Comprar y vender             |
| `/inventory` | Ver inventario               |
| `/equip`     | Equipar objeto               |

---

# Notas Técnicas (Extra)

- Guardar los datos de usuario (nivel, stats, inventario, progreso) en una base de datos (ej: SQLite, PostgreSQL).
- Evitar que el usuario spamee `/explore` poniendo cooldowns de 10-30 segundos.
- Manejar sesiones de combate para que un jugador no inicie varios combates a la vez.
- Sistema de enemigos y objetos escalable (definirlos en archivos de configuración JSON o base de datos).
