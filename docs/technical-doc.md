# 📄 **Documentación Técnica - Bot Discord RPG**

---

## 1. Stack Tecnológico

| Componente        | Tecnología elegida             |
| :---------------- | :----------------------------- |
| Lenguaje          | TypeScript                     |
| Framework backend | NestJS                         |
| Base de datos     | MongoDB                        |
| Cliente Discord   | `discord.js`                   |
| ORM/ODM           | `mongoose`                     |
| Arquitectura      | Modular (features por carpeta) |
| Deploy (futuro)   | VPS o Railway/Render/Heroku    |

---

## 2. Arquitectura general del proyecto

El proyecto se dividirá siguiendo una arquitectura modular tipo **Clean Architecture simplificada**, separando:

- **Bot Module**: conecta eventos de Discord a casos de uso.
- **Feature Modules**: cada funcionalidad del juego será su propio módulo de NestJS.
- **Services**: lógica de negocio.
- **Schemas**: modelado de documentos de MongoDB.
- **DTOs**: para las transferencias de datos entre capa de presentación y capa de servicio.

```bash
src/
│
├── bot/                  # Configuración y listeners del cliente de Discord
│
├── common/               # DTOs, constantes comunes, excepciones
│
├── database/             # Conexión a MongoDB y modelos
│
├── modules/
│   ├── character/         # Crear y administrar personajes
│   ├── explore/           # Mecanismo de exploración
│   ├── combat/            # Sistema de combate
│   ├── inventory/         # Gestión de ítems
│   ├── leveling/          # Sistema de niveles
│   └── loot/              # Generación de loot
│
└── main.ts               # Bootstrap principal
```

---

## 3. Principales entidades y modelos de datos

### 3.1. Character (Personaje)

```typescript
@Schema()
export class Character {
  @Prop({ required: true, unique: true })
  discordId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: 1 })
  level: number;

  @Prop({ default: 0 })
  experience: number;

  @Prop({ default: 100 })
  health: number;

  @Prop({ default: 10 })
  attack: number;

  @Prop({ default: 5 })
  defense: number;

  @Prop({ default: 0 })
  gold: number;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Item', default: [] })
  inventory: mongoose.Types.ObjectId[];
}
```

---

### 3.2. Item (Objeto)

```typescript
@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: 0 })
  bonusAttack: number;

  @Prop({ default: 0 })
  bonusDefense: number;

  @Prop({ default: 0 })
  bonusHealth: number;

  @Prop({ default: 0 })
  value: number;
}
```

---

### 3.3. Enemy (Enemigo) _(no persistido en base, generado en runtime)_

```typescript
interface Enemy {
  name: string;
  level: number;
  health: number;
  attack: number;
  defense: number;
  rewardGold: number;
  rewardExperience: number;
}
```

---

## 4. Principales servicios y flujos

### 4.1. CharacterService

- `createCharacter(discordId: string, name: string)`
- `findCharacter(discordId: string)`
- `updateCharacter(discordId: string, updates: Partial<Character>)`

---

### 4.2. ExploreService

- `explore(discordId: string)`
  - 40% de encontrar enemigo
  - 30% de encontrar cofre
  - 30% de no encontrar nada

---

### 4.3. CombatService

- `initiateCombat(character: Character)`
- `performAttack(character: Character, enemy: Enemy)`
- `resolveCombatResult(...)`

---

### 4.4. InventoryService

- `addItemToInventory(discordId: string, item: Item)`
- `getInventory(discordId: string)`

---

### 4.5. LevelingService

- `gainExperience(discordId: string, amount: number)`
- `checkLevelUp(character: Character)`

---

### 4.6. LootService

- `generateLoot()`
- `generateGoldAmount(level: number)`

---

## 5. Comandos de Discord soportados

| Comando      | Acción                                |
| :----------- | :------------------------------------ |
| `/start`     | Crear personaje nuevo                 |
| `/explore`   | Explorar y generar evento             |
| `/stats`     | Mostrar estadísticas del personaje    |
| `/inventory` | Mostrar inventario actual             |
| `/fight`     | Pelear directamente contra un enemigo |

---

## 6. MongoDB: Colecciones

| Colección    | Propósito                     |
| :----------- | :---------------------------- |
| `characters` | Personajes de los jugadores   |
| `items`      | Ítems disponibles en el juego |

**Nota:** Enemigos no se almacenan, se generan en tiempo real.

---

## 7. Seguridad y validaciones

- Validar que el usuario no pueda spamear `/explore` sin cooldown (ej: 10 segundos).
- Validar que no haya dos combates activos.
- Sanitizar entradas de usuario en nombres de personaje.
- Manejo de errores con excepciones de NestJS.

---

## 8. Consideraciones de Escalabilidad (futuras)

- Sistema de eventos de temporada.
- Items únicos o legendarios.
- Combates cooperativos (multiplayer en Discord).
- Sistema de clanes/gremios.
- Tienda para comprar ítems usando oro.
