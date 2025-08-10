import { Facing, Position, PokemonType } from './types'

export interface Attack {
  name: string
  damage: number
  type: PokemonType
  shape: Position[] // Relative coordinates from attacker facing "north"
}

// Example attacks
export const ATTACKS: Attack[] = [
    {
        name: 'Water Gun',
        damage: 40,
        type: PokemonType.WATER,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Vine Whip',
        damage: 45,
        type: PokemonType.GRASS,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
    },
  {
    name: 'Forward Strike',
    damage: 20,
    type: PokemonType.NORMAL,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Wide Swipe',
    damage: 15,
    type: PokemonType.WATER,
    // Three squares horizontally in front
    shape: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ],
  },
  {
    name: 'Skip Strike',
    damage: 25,
    type: PokemonType.FIRE,
    // One square forward, skip one, then another forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -3 },
    ],
  },
  {
    name: 'Dragon Pulse',
    damage: 90,
    type: PokemonType.DRAGON,
    shape: [
        { x: 0, y: -1 },
        { x: 0, y: -2 },
        { x: 0, y: -3 },
    ],
    },
    {
        name: 'Flamethrower',
        damage: 90,
        type: PokemonType.FIRE,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Dragon Rush',
        damage: 100,
        type: PokemonType.DRAGON,
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
          ],
    },
]

export const  rotatePosition = (pos: Position, facing: Facing): Position => {
    switch (facing) {
      case 'N': return pos
      case 'E': return { x: -pos.y, y: pos.x }
      case 'S': return { x: -pos.x, y: -pos.y }
      case 'W': return { x: pos.y, y: -pos.x }
    }
  }

export const  getAttackSquares = (attackerPos: Position, facing: Facing, shape: Position[]): Position[] => {
return shape.map(offset => {
    const rotated = rotatePosition(offset, facing)
    return {
    x: attackerPos.x + rotated.x,
    y: attackerPos.y + rotated.y
    }
})
}