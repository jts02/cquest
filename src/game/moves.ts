import { Facing, Position, PokemonType } from './types'

export type Stat = 'attack' | 'defense' | 'speed' | 'range'; // example stats
export type Status = 'paralysis' | 'sleep' | 'burn' | 'freeze'; // example statuses

export interface HealEffect {
  kind: 'heal';
  healPercentage: number;
}

export interface StatChangeEffect {
  kind: 'statChange';
  stat: Stat;
  chance: number;
  increase: boolean; // true for increase, false for decrease
  self: boolean;
  stages: number;
}

export interface StatusEffect {
  kind: 'status';
  status: Status;
  chance: number; // 0.00 to 1.00, for probability
}

export type AdditionalEffect = HealEffect | StatChangeEffect | StatusEffect;

export interface Move {
  name: string
  power: number
  type: PokemonType
  shape: Position[] // Relative coordinates from attacker facing "north"
  additionalEffects: AdditionalEffect[]
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Force Palm',
        power: 60,
        type: PokemonType.FIGHTING,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Astonish',
        power: 30,
        type: PokemonType.GHOST,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Thunder Shock',
        power: 40,
        type: PokemonType.ELECTRIC,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Iron Head',
        power: 80,
        type: PokemonType.STEEL,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Meteor Mash',
        power: 90,
        type: PokemonType.STEEL,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Psycho Cut',
        power: 70,
        type: PokemonType.PSYCHIC,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Ice Ball',
        power: 40,
        type: PokemonType.ICE,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Aurora Beam',
        power: 65,
        type: PokemonType.ICE,
        // Two squares forward
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
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
      additionalEffects: [],
    },
    {
        name: 'Icy Wind',
        power: 55,
        type: PokemonType.ICE,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
      ],
      additionalEffects: [],
    },
    {
        name: 'Brave Bird',
        power: 120,
        type: PokemonType.FLYING,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
      ],
      additionalEffects: [
        { kind: 'statChange', chance: 1, increase: false, self: true, stat: 'defense', stages: 1}
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
      additionalEffects: [],
    },
    {
        name: 'Surf',
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
      additionalEffects: [],
    },
    {
        name: 'Muddy Water',
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
      additionalEffects: [],
    },
    {
        name: 'Roar of Time',
        power: 150,
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
      additionalEffects: [],
    },
    {
        name: 'Dragon Ascent',
        power: 120,
        type: PokemonType.FLYING,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: -2 },
          { x: 0, y: -2 },
          { x: 1, y: -2 },
      ],
      additionalEffects: [
        { kind: 'statChange', chance: 1, increase: false, self: true, stat: 'defense', stages: 1}
      ],
    },
    {
        name: 'Iron Tail',
        power: 100,
        type: PokemonType.STEEL,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: -2 },
          { x: 0, y: -2 },
          { x: 1, y: -2 },
      ],
      additionalEffects: [
        { kind: 'statChange', chance: .3, increase: false, self: false, stat: 'defense', stages: 1}
      ],
    },
    {
        name: 'Air Cutter',
        power: 60,
        type: PokemonType.FLYING,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -1 },
          { x: 0, y: -1 },
          { x: 1, y: -1 },
      ],
      additionalEffects: [],
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
      additionalEffects: [],
    },
    {
        name: 'Blizzard',
        power: 110,
        type: PokemonType.ICE,
        // Horizontally in front of user
        shape: [
          { x: -1, y: -2 },
          { x: 0, y: -2 },
          { x: 1, y: -2 },
          { x: -1, y: -3 },
          { x: 0, y: -3 },
          { x: 1, y: -3 },
      ],
      additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Dragon Breath',
    power: 60,
    type: PokemonType.DRAGON,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Blaze Kick',
    power: 85,
    type: PokemonType.FIRE,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
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
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Slam',
    power: 80,
    type: PokemonType.NORMAL,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
    additionalEffects: [],
},
{
    name: 'Mega Punch',
    power: 80,
    type: PokemonType.NORMAL,
    // One square forward
    shape: [
      { x: 0, y: -1 },
    ],
    additionalEffects: [],
},
{
    name: 'Brine',
    power: 65,
    type: PokemonType.WATER,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Powder Snow',
    power: 40,
    type: PokemonType.ICE,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
    additionalEffects: [],
},
{
    name: 'Bubble',
    power: 40,
    type: PokemonType.WATER,
    // Two squares forward
    shape: [
      { x: 0, y: -1 },
      { x: 0, y: -2 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Mist Ball',
    power: 95,
    type: PokemonType.PSYCHIC,
    // Two squares forward
    shape: [
      { x: 0, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [
      { kind: 'statChange', chance: .5, increase: false, self: false, stat: 'attack', stages: 1}
    ],
},
{
    name: 'Luster Purge',
    power: 95,
    type: PokemonType.PSYCHIC,
    // Two squares forward
    shape: [
      { x: 0, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [
      { kind: 'statChange', chance: .5, increase: false, self: false, stat: 'defense', stages: 1}
    ],
},
{
    name: 'Aura Sphere',
    power: 80,
    type: PokemonType.FIGHTING,
    // Two squares forward
    shape: [
      { x: 0, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
},
{
    name: 'Shadow Force',
    power: 150,
    type: PokemonType.GHOST,
    // Two squares forward
    shape: [
      { x: 0, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Absorb',
    power: 20,
    type: PokemonType.GRASS,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [
        { kind: 'heal', healPercentage: 0.5 } // this is a HealEffect
    ],
},
{
    name: 'Mega Drain',
    power: 40,
    type: PokemonType.GRASS,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [
        { kind: 'heal', healPercentage: 0.5 } // this is a HealEffect
    ],
},
{
    name: 'Giga Drain',
    power: 75,
    type: PokemonType.GRASS,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [
        { kind: 'heal', healPercentage: 0.5 } // this is a HealEffect
    ],
},
{
    name: 'Leech Life',
    power: 80,
    type: PokemonType.BUG,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [
        { kind: 'heal', healPercentage: 0.5 } // this is a HealEffect
    ],
},
{
    name: 'Draining Kiss',
    power: 50,
    type: PokemonType.FAIRY,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [
        { kind: 'heal', healPercentage: 0.75 } // this is a HealEffect
    ],
},
{
    name: 'Play Rough',
    power: 90,
    type: PokemonType.FAIRY,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [],
},
{
    name: 'Struggle Bug',
    power: 50,
    type: PokemonType.BUG,
    shape: [
        { x: 0, y: -1 },
    ],
    additionalEffects: [
        { kind: 'heal', healPercentage: 0.5 } // this is a HealEffect
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
    additionalEffects: [],
},
{
    name: 'Fairy Wind',
    power: 40,
    type: PokemonType.FAIRY,
    // Three squares horizontally in front
    shape: [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Zap Cannon',
    power: 120,
    type: PokemonType.ELECTRIC,
    // Three squares horizontally in front
    shape: [
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
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
    additionalEffects: [
        { kind: 'statChange', chance: .1, increase: false, self: false, stat: 'defense', stages: 1}
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
    additionalEffects: [],
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
    additionalEffects: [],
},
{
    name: 'Seed Flare',
    power: 120,
    type: PokemonType.GRASS,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [
      { kind: 'statChange', chance: .4, increase: false, self: false, stat: 'defense', stages: 2}
    ],
},
{
    name: 'Flash Cannon',
    power: 80,
    type: PokemonType.STEEL,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
},
{
    name: 'Doom Desire',
    power: 140,
    type: PokemonType.STEEL,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
},
{
    name: 'Earth Power',
    power: 90,
    type: PokemonType.GROUND,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
},
{
    name: 'Sacred Fire',
    power: 100,
    type: PokemonType.FIRE,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
},
{
    name: 'Psystrike',
    power: 100,
    type: PokemonType.PSYCHIC,
    // Filled cross in front
    shape: [
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
},
{
    name: 'Fire Blast',
    power: 110,
    type: PokemonType.FIRE,
    // Filled cross in front, sides
    shape: [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: -2 },
      { x: 0, y: -2 },
      { x: 1, y: -2 },
      { x: 0, y: -3 },
    ],
    additionalEffects: [],
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
    additionalEffects: [],
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
    additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Scald',
        power: 80,
        type: PokemonType.WATER,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Air Slash',
        power: 75,
        type: PokemonType.FLYING,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Raging Bull',
        power: 90,
        type: PokemonType.NORMAL,
        shape: [
            { x: 0, y: -1 },
            { x: 0, y: -2 },
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Razor Shell',
        power: 75,
        type: PokemonType.WATER,
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Tri Attack',
        power: 80,
        type: PokemonType.NORMAL,
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Ember',
        power: 40,
        type: PokemonType.FIRE,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Ice Shard',
        power: 40,
        type: PokemonType.ICE,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Weather Ball',
        power: 50,
        type: PokemonType.NORMAL,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Energy Ball',
        power: 90,
        type: PokemonType.GRASS,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Psyshock',
        power: 80,
        type: PokemonType.ICE,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Octazooka',
        power: 65,
        type: PokemonType.WATER,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Icicle Crash',
        power: 85,
        type: PokemonType.ICE,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Ancient Power',
        power: 60,
        type: PokemonType.ROCK,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Power Gem',
        power: 80,
        type: PokemonType.ROCK,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Fly',
        power: 90,
        type: PokemonType.FLYING,
        // Just three squares forward
        shape: [
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Thunder',
        power: 110,
        type: PokemonType.ELECTRIC,
        // Just three squares forward
        shape: [
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Aeroblast',
        power: 100,
        type: PokemonType.FLYING,
        // Just three squares forward
        shape: [
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Confusion',
        power: 50,
        type: PokemonType.PSYCHIC,
        // Just three squares forward
        shape: [
            { x: 0, y: -3 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Electro Ball',
        power: 40,
        type: PokemonType.ELECTRIC,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Acrobatics',
        power: 55,
        type: PokemonType.FLYING,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Rock Throw',
        power: 50,
        type: PokemonType.ROCK,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Sludge',
        power: 65,
        type: PokemonType.POISON,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Lunge',
        power: 80,
        type: PokemonType.BUG,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Rock Tomb',
        power: 60,
        type: PokemonType.ROCK,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Dig',
        power: 80,
        type: PokemonType.GROUND,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Shadow Ball',
        power: 80,
        type: PokemonType.GHOST,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Aqua Jet',
        power: 40,
        type: PokemonType.WATER,
        // Just two squares forward
        shape: [
            { x: 0, y: -2 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Quick Attack',
        power: 40,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Mega Kick',
        power: 120,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Giga Impact',
        power: 150,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Low Kick',
        power: 50,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Karate Chop',
        power: 50,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Feint Attack',
        power: 60,
        type: PokemonType.DARK,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Dynamic Punch',
        power: 100,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Double Kick',
        power: 60,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Brick Break',
        power: 75,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Arm Thrust',
        power: 75,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Close Combat',
        power: 120,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Liquidation',
        power: 85,
        type: PokemonType.WATER,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Spark',
        power: 65,
        type: PokemonType.ELECTRIC,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Metal Claw',
        power: 50,
        type: PokemonType.STEEL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Shadow Claw',
        power: 75,
        type: PokemonType.GHOST,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Dragon Claw',
        power: 80,
        type: PokemonType.DRAGON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Knock Off',
        power: 65,
        type: PokemonType.DARK,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Shadow Sneak',
        power: 40,
        type: PokemonType.DARK,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Flare Blitz',
        power: 120,
        type: PokemonType.FIRE,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Leaf Blade',
        power: 90,
        type: PokemonType.GRASS,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Tackle',
        power: 40,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Pound',
        power: 40,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Scratch',
        power: 40,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Stomp',
        power: 65,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    
    {
        name: 'Double Hit',
        power: 70,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Facade',
        power: 70,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Crush Claw',
        power: 75,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [
          { kind: 'statChange', chance: .5, increase: false, self: false, stat: 'defense', stages: 1}
        ],
    },
    {
        name: 'Headbutt',
        power: 70,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Zen Headbutt',
        power: 85,
        type: PokemonType.PSYCHIC,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Leafage',
        power: 40,
        type: PokemonType.GRASS,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Hyper Fang',
        power: 80,
        type: PokemonType.NORMAL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Assurance',
        power: 60,
        type: PokemonType.DARK,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Lick',
        power: 30,
        type: PokemonType.GHOST,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Hex',
        power: 65,
        type: PokemonType.GHOST,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Night Slash',
        power: 70,
        type: PokemonType.DARK,
        // Horizontal line in front of user
        shape: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Poison Fang',
        power: 50,
        type: PokemonType.POISON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Bite',
        power: 60,
        type: PokemonType.DARK,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Crunch',
        power: 80,
        type: PokemonType.DARK,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [
          { kind: 'statChange', chance: .2, increase: false, self: false, stat: 'defense', stages: 1}
        ],
    },
    {
        name: 'Ice Fang',
        power: 65,
        type: PokemonType.ICE,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Poison Jab',
        power: 80,
        type: PokemonType.POISON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Peck',
        power: 35,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Pluck',
        power: 60,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Wing Attack',
        power: 60,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Aerial Ace',
        power: 60,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Steel Wing',
        power: 75,
        type: PokemonType.STEEL,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Crabhammer',
        power: 100,
        type: PokemonType.WATER,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Drill Peck',
        power: 80,
        type: PokemonType.FLYING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Poison Sting',
        power: 15,
        type: PokemonType.POISON,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Wake-Up Slap',
        power: 70,
        type: PokemonType.FIGHTING,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Fire Fang',
        power: 65,
        type: PokemonType.FIRE,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Fire Punch',
        power: 75,
        type: PokemonType.FIRE,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Shadow Punch',
        power: 60,
        type: PokemonType.GHOST,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Bug Bite',
        power: 60,
        type: PokemonType.BUG,
        // Just one square forward
        shape: [
            { x: 0, y: -1 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Echoed Voice',
        power: 40,
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
        additionalEffects: [],
    },
    {
        name: 'Round',
        power: 60,
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
        additionalEffects: [],
    },
    {
        name: 'Chatter',
        power: 65,
        type: PokemonType.FLYING,
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Snarl',
        power: 55,
        type: PokemonType.DARK,
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
        additionalEffects: [
          { kind: 'statChange', chance: 1, increase: false, self: false, stat: 'attack', stages: 1}
        ],
    },
    {
        name: 'Dark Pulse',
        power: 80,
        type: PokemonType.DARK,
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
        additionalEffects: [],
    },
    {
        name: 'Triple Kick',
        power: 60,
        type: PokemonType.FIGHTING,
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
        additionalEffects: [],
    },
    {
        name: 'Seed Bomb',
        power: 80,
        type: PokemonType.GRASS,
        // X in front of user
        shape: [
            { x: -1, y: -3 },
            { x: 1, y: -3 },
            { x: 0, y: -2 },
            { x: -1, y: -1 },
            { x: 1, y: -1 },
        ],
      additionalEffects: [],
    },
     {
        name: 'Shock Wave',
        power: 60,
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Earthquake',
        power: 100,
        type: PokemonType.GROUND,
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Clear Smog',
        power: 50,
        type: PokemonType.POISON,
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
        additionalEffects: [],
    },
    {
        name: 'Lava Plume',
        power: 80,
        type: PokemonType.FIRE,
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
        additionalEffects: [],
    },
    {
        name: 'Hidden Power',
        power: 60,
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
        additionalEffects: [],
    },
     {
        name: 'Origin Pulse',
        power: 110,
        type: PokemonType.WATER,
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
        additionalEffects: [],
    },
    {
        name: 'Precipice Blades',
        power: 120,
        type: PokemonType.GROUND,
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Cross Poison',
        power: 70,
        type: PokemonType.POISON,
        // X Around user
        shape: [
            { x: -1, y: -2 },
            { x: 1, y: -2 },
            { x: 0, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Sludge Bomb',
        power: 90,
        type: PokemonType.POISON,
        // X In front of user
        shape: [
            { x: -1, y: -3 },
            { x: 1, y: -3 },
            { x: 0, y: -2 },
            { x: -1, y: -1 },
            { x: 1, y: -1 },
        ],
        additionalEffects: [],
    },
    {
        name: 'Attack Order',
        power: 90,
        type: PokemonType.BUG,
        // X In front of user
        shape: [
            { x: -1, y: -3 },
            { x: 1, y: -3 },
            { x: 0, y: -2 },
            { x: -1, y: -1 },
            { x: 1, y: -1 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Spacial Rend',
        power: 100,
        type: PokemonType.DRAGON,
        // Cross Around user
        shape: [
            { x: -1, y: -2 },
            { x: 1, y: -2 },
            { x: 0, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
        ],
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
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
        additionalEffects: [],
    },
    {
        name: 'Harden',
        power: 0,
        type: PokemonType.NORMAL,
        shape: [
            { x:0, y: 0},
        ],
        additionalEffects: [
            { kind: 'statChange', chance: 1, increase: true, self: true, stat: 'defense', stages: 1}
        ]
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
          additionalEffects: [],
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