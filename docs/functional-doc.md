# 📄 **Documentación Funcional - Bot de Discord RPG**

## 1. Descripción general

El proyecto consiste en un bot de Discord de aventura RPG (juego de rol) en formato de texto, donde los usuarios pueden:

- Crear su personaje.
- Explorar el mundo.
- Combatir enemigos.
- Subir de nivel.
- Administrar su inventario de objetos.

Todo a través de comandos sencillos y respuestas dinámicas en Discord.

---

## 2. Funcionalidades principales

| Funcionalidad        | Descripción breve                                                       |
| :------------------- | :---------------------------------------------------------------------- |
| **Crear personaje**  | Permite al usuario iniciar su aventura.                                 |
| **Explorar**         | Permite encontrar eventos: combates, cofres, o nada.                    |
| **Ver estadísticas** | Muestra el estado actual del personaje.                                 |
| **Ver inventario**   | Muestra los objetos recolectados.                                       |
| **Combatir**         | Permite luchar directamente contra enemigos.                            |
| **Subir de nivel**   | El personaje progresa ganando experiencia.                              |
| **Obtener loot**     | Los jugadores reciben recompensas al ganar combates o encontrar cofres. |

---

## 3. Detalle de funcionalidades

### 3.1. `/start` - Crear personaje

- **Objetivo:** Crear un nuevo personaje.
- **Acción del usuario:** Ejecutar `/start`.
- **Respuesta del bot:**
  - Si ya tiene personaje → mensaje de error.
  - Si no → se crea un personaje base y comienza el juego.

---

### 3.2. `/explore` - Explorar

- **Objetivo:** Explorar el mundo en busca de eventos.
- **Acción del usuario:** Ejecutar `/explore`.
- **Eventos posibles:**
  - Encontrar enemigo → opción de pelear o huir.
  - Encontrar cofre → opción de abrir o ignorar.
  - No encontrar nada → mensaje de exploración fallida.

---

### 3.3. `/stats` - Ver estadísticas

- **Objetivo:** Consultar los atributos del personaje.
- **Acción del usuario:** Ejecutar `/stats`.
- **Respuesta del bot:** Muestra:
  - Nivel
  - Experiencia
  - Vida actual y máxima
  - Ataque
  - Defensa
  - Dinero

---

### 3.4. `/inventory` - Ver inventario

- **Objetivo:** Revisar el inventario personal.
- **Acción del usuario:** Ejecutar `/inventory`.
- **Respuesta del bot:** Lista de objetos o mensaje de inventario vacío.

---

### 3.5. `/fight` - Combatir

- **Objetivo:** Pelear directamente contra un enemigo.
- **Acción del usuario:** Ejecutar `/fight`.
- **Flujo del combate:**
  - Se genera enemigo aleatorio.
  - Usuario confirma si desea luchar.
  - Turnos de ataque hasta que uno gane.
  - Se gana experiencia y loot si vence, o se penaliza si pierde.

---

### 3.6. Sistema de niveles y experiencia

- **Objetivo:** Permitir progresión del personaje.
- **Acción:** Cada vez que el jugador gana experiencia suficiente:
  - Sube de nivel.
  - Mejora sus atributos automáticamente.

---

### 3.7. Sistema de loot

- **Objetivo:** Recompensar al jugador.
- **Acción:** Cada vez que derrota un enemigo o abre un cofre:
  - Se genera aleatoriamente una recompensa (dinero, objetos, nada).
  - Se añade automáticamente al inventario.

---

## 4. Flujo básico del usuario

```plaintext
Usuario usa /start → Se crea su personaje
↓
Usuario usa /explore → Encuentra enemigos o cofres
↓
Usuario combate usando /fight o desde /explore
↓
Gana experiencia y loot
↓
Sube de nivel automáticamente
↓
Administra sus ítems en /inventory
↓
Consulta su progreso en /stats
↓
Repite la aventura
```

---

## 5. Roles de usuarios

- **Usuarios comunes de Discord:**  
  Pueden crear personajes y jugar.
- **Administrador (opcional futuro):**  
  (No se considera para MVP)  
  Podría tener comandos especiales como resetear jugadores o añadir eventos especiales.

---

## 6. Reglas de negocio

- Cada usuario puede tener **un único personaje**.
- El sistema de combate debe ser **justo pero desafiante** (enemigos de dificultad acorde al nivel del jugador).
- El loot es aleatorio, pero con mayor probabilidad de mejores objetos a medida que sube de nivel.
- No se puede participar en más de un combate activo a la vez.
- Si el jugador muere (pierde un combate), no pierde el personaje, pero recibe penalización (por ejemplo, pierde dinero o pierde acceso temporal a exploraciones).
