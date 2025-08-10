import { Facing, Position, PokemonType } from './types'

export interface Move {
  name: string
  power: number
  type: PokemonType
  shape: Position[] // Relative coordinates from attacker facing "north"
}

export const MOVES: Move[] = [
    {
        name: 'Water Gun',
        power: 40,
        type: PokemonType.WATER,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Vine Whip',
        power: 45,
        type: PokemonType.GRASS,
        // Two squares forward
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
      ],
    },
  {
    name: 'Forward Strike',
    power: 20,
    type: PokemonType.NORMAL,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Wide Swipe',
    power: 15,
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
    power: 25,
    type: PokemonType.FIRE,
    // One square forward, skip one, then another forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -3 },
    ],
  },
  {
    name: 'Dragon Pulse',
    power: 90,
    type: PokemonType.DRAGON,
    shape: [
        { x: 0, y: -1 },
        { x: 0, y: -2 },
        { x: 0, y: -3 },
    ],
    },
    {
        name: 'Flamethrower',
        power: 90,
        type: PokemonType.FIRE,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Dragon Rush',
        power: 100,
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

export const  getMoveSquares = (attackerPos: Position, facing: Facing, shape: Position[]): Position[] => {
return shape.map(offset => {
    const rotated = rotatePosition(offset, facing)
    return {
    x: attackerPos.x + rotated.x,
    y: attackerPos.y + rotated.y
    }
})
}