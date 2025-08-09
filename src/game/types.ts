export type PlayerId = 'A' | 'B'

export type Facing = 'N' | 'E' | 'S' | 'W'

export interface Position {
  x: number
  y: number
}

export type PokemonId = string

export interface PokemonSpecies {
  id: string
  name: string
  image: string
  maxHp: number
  movementRange: number
  baseAttackDamage: number
}


