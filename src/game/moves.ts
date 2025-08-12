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
        name: 'Drill Run',
        power: 80,
        type: PokemonType.GROUND,
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
        name: 'Dragon Tail',
        power: 60,
        type: PokemonType.DRAGON,
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
    name: 'Dragon Rage',
    power: 40,
    type: PokemonType.DRAGON,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Jump Kick',
    power: 100,
    type: PokemonType.FIGHTING,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'High Jump Kick',
    power: 120,
    type: PokemonType.FIGHTING,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Bone Rush',
    power: 50,
    type: PokemonType.GROUND,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Body Slam',
    power: 85,
    type: PokemonType.NORMAL,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Flame Wheel',
    power: 60,
    type: PokemonType.FIRE,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
  },
  {
    name: 'Bubble Beam',
    power: 65,
    type: PokemonType.WATER,
    // Two squares forward
    shape: [
      { x: 0, y: -2 },
      { x: 0, y: -3 },
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
    name: 'Volt Tackle',
    power: 120,
    type: PokemonType.ELECTRIC,
    // Hollow cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
    ],
  },
  {
    name: 'Stone Edge',
    power: 100,
    type: PokemonType.ROCK,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
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
        name: 'Waterfall',
        power: 80,
        type: PokemonType.WATER,
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
        name: 'Incinerate',
        power: 60,
        type: PokemonType.FIRE,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Hydro Pump',
        power: 110,
        type: PokemonType.WATER,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Rock Slide',
        power: 75,
        type: PokemonType.ROCK,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Ice Beam',
        power: 90,
        type: PokemonType.ICE,
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
        name: 'Fly',
        power: 90,
        type: PokemonType.FLYING,
        // Just three squares forward
        shape: [
            { x: 0, y: -3 },
        ],
    },
    {
        name: 'Confusion',
        power: 50,
        type: PokemonType.PSYCHIC,
        // Just three squares forward
        shape: [
            { x: 0, y: -3 },
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
        name: 'Lunge',
        power: 80,
        type: PokemonType.BUG,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
    },
    {
        name: 'Rock Tomb',
        power: 60,
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
        name: 'Shadow Ball',
        power: 80,
        type: PokemonType.GHOST,
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
        name: 'Dynamic Punch',
        power: 100,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Close Combat',
        power: 120,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Flare Blitz',
        power: 120,
        type: PokemonType.FIRE,
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
        name: 'Lick',
        power: 30,
        type: PokemonType.GHOST,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
    },
    {
        name: 'Hex',
        power: 65,
        type: PokemonType.GHOST,
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
        name: 'Swift',
        power: 60,
        type: PokemonType.NORMAL,
        // 2 Horizontal lines in front of user
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
        name: 'Pluck',
        power: 60,
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
        name: 'Wake-Up Slap',
        power: 70,
        type: PokemonType.FIGHTING,
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
        name: 'Discharge',
        power: 80,
        type: PokemonType.ELECTRIC,
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
        name: 'Leaf Storm',
        power: 130,
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
        name: 'Extrasensory',
        power: 80,
        type: PokemonType.PSYCHIC,
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
        name: 'Bonemerang',
        power: 100,
        type: PokemonType.GROUND,
        // Ring in front of user
        shape: [
            { x: -1, y: -3 },
            { x: 0, y: -3 },
            { x: 1, y: -3 },
            { x: -1, y: -2 },
            { x: 1, y: -2 },
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
        ],
    },
    {
        name: 'X-Scissor',
        power: 80,
        type: PokemonType.BUG,
        // X Around user
        shape: [
            { x: -1, y: -2 },
            { x: 1, y: -2 },
            { x: 0, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
        ],
    },
    {
        name: 'Cross Chop',
        power: 100,
        type: PokemonType.BUG,
        // Cross Around user
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
        name: 'Petal Dance',
        power: 120,
        type: PokemonType.GRASS,
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