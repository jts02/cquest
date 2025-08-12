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
        name: 'Water Pulse',
        power: 60,
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
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
      ],
    },
    {
        name: 'Aqua Tail',
        power: 90,
        type: PokemonType.WATER,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: -2 },
          { x: 0, y: -2 },
          { x: 1, y: -2 },
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
    name: 'Acid',
    power: 40,
    type: PokemonType.POISON,
    // Three squares horizontally in front
    shape: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ],
  },
  {
    name: 'Thunderbolt',
    power: 90,
    type: PokemonType.ELECTRIC,
    // Three squares horizontally in front
    shape: [
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
    ],
  },
  {
    name: 'Venoshock',
    power: 65,
    type: PokemonType.POISON,
    // Three squares horizontally in front
    shape: [
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
    ],
  },
  {
    name: 'Psychic',
    power: 90,
    type: PokemonType.PSYCHIC,
    // Hollow cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
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
        name: 'Moonblast',
        power: 95,
        type: PokemonType.FAIRY,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Razor Leaf',
        power: 55,
        type: PokemonType.GRASS,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Magical Leaf',
        power: 60,
        type: PokemonType.GRASS,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Psybeam',
        power: 65,
        type: PokemonType.PSYCHIC,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Ember',
        power: 40,
        type: PokemonType.FIRE,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Electro Ball',
        power: 40,
        type: PokemonType.ELECTRIC,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Rock Throw',
        power: 50,
        type: PokemonType.ROCK,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Dig',
        power: 80,
        type: PokemonType.GROUND,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Quick Attack',
        power: 40,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Low Kick',
        power: 50,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Karate Chop',
        power: 50,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Tackle',
        power: 40,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Slash',
        power: 70,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Hyper Fang',
        power: 80,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Pay Day',
        power: 40,
        type: PokemonType.NORMAL,
        // Horizontal line in front of user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
        ],
    },
    {
        name: 'Poison Tail',
        power: 50,
        type: PokemonType.POISON,
        // Horizontal line in front of user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
        ],
    },
    {
        name: 'Poison Fang',
        power: 50,
        type: PokemonType.POISON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Poison Jab',
        power: 80,
        type: PokemonType.POISON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Peck',
        power: 35,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Wing Attack',
        power: 60,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Drill Peck',
        power: 80,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Poison Sting',
        power: 15,
        type: PokemonType.POISON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Fire Fang',
        power: 65,
        type: PokemonType.FIRE,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Bug Bite',
        power: 60,
        type: PokemonType.BUG,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Disarming Voice',
        power: 40,
        type: PokemonType.FAIRY,
        // All Around user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
        ],
    },
    {
        name: 'Hyper Voice',
        power: 80,
        type: PokemonType.NORMAL,
        // All Around user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
        ],
    },
    {
        name: 'Seed Bomb',
        power: 80,
        type: PokemonType.GRASS,
        // All Around user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
        ],
    },
    {
        name: 'Bug Buzz',
        power: 90,
        type: PokemonType.BUG,
        // All Around user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
        ],
    },
    {
        name: 'X-Scissor',
        power: 80,
        type: PokemonType.BUG,
        // All Around user
        shape: [
            { x: -1, y: -2 },
            { x: 1, y: -2 },
            { x: 0, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
        ],
    },
    {
        name: 'Bulldoze',
        power: 60,
        type: PokemonType.GROUND,
        // Cross around user
        shape: [
            { x: 0, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
        ],
    },
    {
        name: 'Splash',
        power: 0,
        type: PokemonType.NORMAL,
        // All Around user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
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