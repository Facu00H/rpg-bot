# 📄 **Flow Document - Comando `/explore`**

_(Define cómo debe fluir la acción cuando un usuario usa el comando `/explore` en tu bot RPG de Discord)_

---

# 🎯 **Objetivo del comando `/explore`**

Permitir que el usuario explore una zona desconocida y se enfrente a eventos aleatorios como enemigos, cofres, trampas o eventos especiales.

---

# 🧭 **Flujo paso a paso**

### 1. Usuario ejecuta `/explore`

- El bot recibe el comando.

---

### 2. Determinar evento aleatorio

- Se elige **aleatoriamente** entre tipos de evento:
  - **40%** → Encuentro con enemigo.
  - **30%** → Encuentra un cofre.
  - **20%** → Sufre una trampa.
  - **10%** → Evento especial (descanso, bonus, etc.).

(Estos porcentajes los puedes tunear después).

---

### 3. Flujo según el evento:

#### 🧟 Encuentro con Enemigo

- El bot genera un **enemigo aleatorio** usando generación procedural basada en el nivel del jugador.
- Muestra:
  - Nombre del enemigo.
  - Vida, Ataque, Defensa.
- Pregunta:  
  → "¿Quieres luchar o huir?" (`Botón: Luchar / Huir`)

##### Si elige Luchar:

- Simular el combate (turnos rápidos: jugador ataca, enemigo ataca).
- Mostrar daño de cada turno.
- Resultado:
  - Si gana → recibe experiencia y posibles recompensas (items/dinero).
  - Si pierde → pierde dinero o experiencia (o algún castigo leve para no frustrar).

##### Si elige Huir:

- 80% probabilidad de huir exitosamente.
- 20% probabilidad de que falle y sea forzado a pelear.

---

#### 🎁 Encuentra un Cofre

- Muestra:
  - El cofre puede contener oro, objetos o equipamiento.
- Pregunta:
  → "¿Quieres abrir el cofre?" (`Botón: Abrir / Ignorar`)

##### Si elige Abrir:

- Bot genera un objeto aleatorio o una cantidad de oro.
- Ocasionalmente el cofre puede tener una trampa (¡pequeño daño sorpresa!).

##### Si elige Ignorar:

- No pasa nada, vuelve a estado normal.

---

#### ⚡ Trampa

- El jugador activa una trampa:
  - Pierde un porcentaje de su vida máxima (ej: 10%-20%).
- Mostrar mensaje de trampa divertida ("¡Pisaste una trampa explosiva!").

---

#### 🌟 Evento Especial

- Puede ocurrir algo positivo:
  - Pequeño bonus de experiencia gratis.
  - Recuperar algo de vida.
  - Encontrar un NPC amistoso que te regala algo.

---

# 🛠️ **Errores y protección**

- Si el jugador ya está en una exploración (por ejemplo, no respondió aún luchar/huir), no puede hacer `/explore` de nuevo.
- Se debería agregar **timeout**: si el jugador no responde en, por ejemplo, **2 minutos**, se cierra el evento automáticamente.

---

# 📂 **Datos mínimos que necesita el jugador para explorar**

- Nivel del jugador.
- Vida actual.
- Inventario básico (para dar premios).
- Dinero (si va a recibir/perder oro).

---

# ✨ **Notas de mejora para el futuro**

- Poder elegir zonas para explorar con distintos niveles de dificultad.
- Hacer "eventos en cadena" (ejemplo: luego de ganar un combate, encontrar un cofre automáticamente).
- Misiones que involucren explorar zonas varias veces.

---

# 📈 **Resumen Visual del Flow**

```
Usuario ejecuta /explore
   ↓
Se elige evento aleatorio
   ↓
[Enemigo] ↔ [Cofre] ↔ [Trampa] ↔ [Evento Especial]
   ↓
(Según lo que pase: combate, loot, daño, bonus)
   ↓
Termina la exploración
```
