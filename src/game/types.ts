import { Move } from "./moves"

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
  baseAttack: number
  baseDefense: number
  baseSpeed: number
  movementRange: number
  primaryType: PokemonType
  secondaryType: PokemonType | null
  move: Move
}

export enum PokemonType {
  NORMAL,
  FIRE,
  WATER,
  ELECTRIC,
  GRASS,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DRAGON,
  DARK,
  STEEL,
  FAIRY,
}

