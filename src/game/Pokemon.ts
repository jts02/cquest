import { Facing, PlayerId, Position, PokemonId, PokemonType } from './types'
import { Attack } from './attacks'



export class Pokemon {
  id: PokemonId
  name: string
  primaryType: PokemonType
  secondaryType: PokemonType | null
  attack: Attack
  team: PlayerId
  image: string
  position: Position
  facing: Facing
  maxHp: number
  hp: number
  movementRange: number

  constructor(params: {
    id: PokemonId
    name: string
    primaryType: PokemonType
    secondaryType: PokemonType | null
    attack: Attack
    team: PlayerId
    image: string
    position: Position
    facing?: Facing
    maxHp?: number
    hp?: number
    movementRange?: number
  }) {
    this.id = params.id
    this.name = params.name
    this.team = params.team
    this.image = params.image
    this.position = params.position
    this.facing = params.facing ?? 'N'
    this.maxHp = params.maxHp ?? 200
    this.hp = params.hp ?? this.maxHp
    this.movementRange = params.movementRange ?? 3
    this.primaryType = params.primaryType
    this.secondaryType = params.secondaryType ?? null
    this.attack = params.attack
  }

  get isFainted(): boolean {
    return this.hp <= 0
  }
}

// 2D effectiveness table: attacker row, defender column
const effectiveness: number[][] = [
  //              NORMAL FIRE WATER GRASS ELECTRIC ICE FIGHTING POISON GROUND FLYING PSYCHIC BUG ROCK GHOST DRAGON DARK FAIRY STEEL
  /* NORMAL */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  0.5 /* ROCK */,  0.0 /* GHOST */,  1.0 /* DRAGON */,  1.0 /* DARK */,  0.5 /* STEEL */,  1.0 /* FAIRY */ ],
  /* FIRE   */  [ 1.0 /* NORMAL */,   0.5 /* FIRE */,  0.5 /* WATER */,  1.0 /* ELECTRIC */,   2.0 /* GRASS */,  2.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  2.0 /* BUG */,  0.5 /* ROCK */,  1.0 /* GHOST */,  0.5 /* DRAGON */,  1.0 /* DARK */,  2.0 /* STEEL */, 1.0 /* FAIRY */ ],
  /* WATER  */  [ 1.0 /* NORMAL */,   2.0 /* FIRE */,  0.5 /* WATER */,  1.0 /* ELECTRIC */,   0.5 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  2.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  2.0 /* ROCK */,  1.0 /* GHOST */,  0.5 /* DRAGON */,  1.0 /* DARK */,  1.0 /* STEEL */, 1.0 /* FAIRY */ ],
  /* ELECTRIC */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  2.0 /* WATER */,  0.5 /* ELECTRIC */,   0.5 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  0.0 /* GROUND */,  2.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  1.0 /* GHOST */,  0.5 /* DRAGON */,  1.0 /* DARK */,  1.0 /* STEEL */, 1.0 /* FAIRY */ ],
  /* GRASS  */  [ 1.0 /* NORMAL */,   0.5 /* FIRE */,  2.0 /* WATER */,  1.0 /* ELECTRIC */,   0.5 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  0.5 /* POISON */,  2.0 /* GROUND */,  0.5 /* FLYING */,  1.0 /* PSYCHIC */,  0.5 /* BUG */,  2.0 /* ROCK */,  1.0 /* GHOST */,  0.5 /* DRAGON */,  1.0 /* DARK */,  1.0 /* STEEL */, 1.0 /* FAIRY */ ],
  /* ICE    */  [ 1.0 /* NORMAL */,   0.5 /* FIRE */,  0.5 /* WATER */,  1.0 /* ELECTRIC */,   2.0 /* GRASS */,  0.5 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  2.0 /* GROUND */,  2.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  1.0 /* GHOST */,  2.0 /* DRAGON */,  1.0 /* DARK */,  0.5 /* STEEL */, 1.0 /* FAIRY */ ],
  /* FIGHT */  [ 2.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  2.0 /* ICE */,  1.0 /* FIGHTING */,  0.5 /* POISON */,  1.0 /* GROUND */,  0.5 /* FLYING */,  0.5 /* PSYCHIC */,  0.5 /* BUG */,  2.0 /* ROCK */,  0.0 /* GHOST */,  1.0 /* DRAGON */,  2.0 /* DARK */,  2.0 /* STEEL */, 0.5 /* FAIRY */ ],
  /* POISON */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  0.5 /* ELECTRIC */,   2.0 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  0.5 /* POISON */,  0.5 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  0.5 /* ROCK */,  0.5 /* GHOST */,  1.0 /* DRAGON */,  1.0 /* DARK */,  0.0 /* STEEL */, 2.0 /* FAIRY */ ],
  /* GROUND */  [ 1.0 /* NORMAL */,   2.0 /* FIRE */,  1.0 /* WATER */,  2.0 /* ELECTRIC */,   0.5 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  2.0 /* POISON */,  1.0 /* GROUND */,  0.0 /* FLYING */,  1.0 /* PSYCHIC */,  0.5 /* BUG */,  2.0 /* ROCK */,  1.0 /* GHOST */,  1.0 /* DRAGON */,  1.0 /* DARK */,  2.0 /* STEEL */, 1.0 /* FAIRY */ ],
  /* FLYING */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  0.5 /* ELECTRIC */,   2.0 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  2.0 /* BUG */,  0.5 /* ROCK */,  1.0 /* GHOST */,  1.0 /* DRAGON */,  1.0 /* DARK */,  0.5 /* STEEL */, 1.0 /* FAIRY */ ],
  /* PSYCHIC */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  2.0 /* ELECTRIC */,   1.0 /* GRASS */,  1.0 /* ICE */,  2.0 /* FIGHTING */,  2.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  0.5 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  1.0 /* GHOST */,  1.0 /* DRAGON */,  0.0 /* DARK */,  0.5 /* STEEL */, 1.0 /* FAIRY */ ],
  /* BUG    */  [ 1.0 /* NORMAL */,   0.5 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   2.0 /* GRASS */,  1.0 /* ICE */,  0.5 /* FIGHTING */,  0.5 /* POISON */,  1.0 /* GROUND */,  0.5 /* FLYING */,  2.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  0.5 /* GHOST */,  1.0 /* DRAGON */,  2.0 /* DARK */,  0.5 /* STEEL */, 0.5 /* FAIRY */ ],
  /* ROCK   */  [ 1.0 /* NORMAL */,   2.0 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  2.0 /* ICE */,  0.5 /* FIGHTING */,  1.0 /* POISON */,  0.5 /* GROUND */,  2.0 /* FLYING */,  1.0 /* PSYCHIC */,  2.0 /* BUG */,  1.0 /* ROCK */,  1.0 /* GHOST */,  1.0 /* DRAGON */,  1.0 /* DARK */,  0.5 /* STEEL */, 1.0 /* FAIRY */ ],
  /* GHOST  */  [ 0.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  2.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  2.0 /* GHOST */,  1.0 /* DRAGON */,  0.5 /* DARK */,  1.0 /* STEEL */, 1.0 /* FAIRY */ ],
  /* DRAGON */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  1.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  1.0 /* GHOST */,  2.0 /* DRAGON */,  1.0 /* DARK */,  0.5 /* STEEL */, 0.0 /* FAIRY */ ],
  /* DARK   */  [ 1.0 /* NORMAL */,   1.0 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  1.0 /* ICE */,  0.5 /* FIGHTING */,  1.0 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  2.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  2.0 /* GHOST */,  1.0 /* DRAGON */,  0.5 /* DARK */,  1.0 /* STEEL */, 0.5 /* FAIRY */ ],
  /* STEEL  */  [ 1.0 /* NORMAL */,   0.5 /* FIRE */,  0.5 /* WATER */,  0.5 /* ELECTRIC */,   1.0 /* GRASS */,  2.0 /* ICE */,  1.0 /* FIGHTING */,  1.0 /* POISON */,  0.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  2.0 /* ROCK */,  1.0 /* GHOST */,  1.0 /* DRAGON */,  1.0 /* DARK */,  0.5 /* STEEL */, 2.0 /* FAIRY */ ],
  /* FAIRY  */  [ 1.0 /* NORMAL */,   0.5 /* FIRE */,  1.0 /* WATER */,  1.0 /* ELECTRIC */,   1.0 /* GRASS */,  1.0 /* ICE */,  2.0 /* FIGHTING */,  0.5 /* POISON */,  1.0 /* GROUND */,  1.0 /* FLYING */,  1.0 /* PSYCHIC */,  1.0 /* BUG */,  1.0 /* ROCK */,  1.0 /* GHOST */,  2.0 /* DRAGON */,  2.0 /* DARK */,  0.5 /* STEEL */, 1.0 /* FAIRY */ ],
];

export const getMultiplier = (attackType: PokemonType, defenderPrimary: PokemonType, defenderSecondary: PokemonType | null): number => {
  return effectiveness[attackType][defenderPrimary] * (defenderSecondary ? effectiveness[attackType][defenderSecondary] : 1.0)
}