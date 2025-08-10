import { Facing, PlayerId, Position, PokemonSpecies, PokemonType } from './types'
import { MOVES } from './moves'

export const BOARD_SIZE = 8

// Default colors for quick placeholders are kept in public/pokemon/*.svg

// (internal proto removed; use the exported version below)

export function defaultFacingForTeam(team: PlayerId): Facing {
  return team === 'A' ? 'N' : 'S'
}

export function makePositionsForTeam(team: PlayerId): Position[] {
  // Public export for default placements
  if (team === 'A') {
    return [
      { x: 1, y: BOARD_SIZE - 1 },
      { x: 3, y: BOARD_SIZE - 1 },
      { x: 5, y: BOARD_SIZE - 1 },
      { x: 0, y: BOARD_SIZE - 2 },
      { x: 2, y: BOARD_SIZE - 2 },
      { x: 4, y: BOARD_SIZE - 2 },
    ]
  }
  return [
    { x: 1, y: 0 },
    { x: 3, y: 0 },
    { x: 5, y: 0 },
    { x: 0, y: 1 },
    { x: 2, y: 1 },
    { x: 4, y: 1 },
  ]
}

export async function loadSpeciesFromCsv(url: string): Promise<PokemonSpecies[]> {
  const res = await fetch(url)
  const text = await res.text()
  const lines = text.split(/\r?\n/).filter(Boolean)
  if (lines.length === 0) return []
  const header = lines.shift()!.split(',')
  const idx = (name: string) => header.indexOf(name)
  const out: PokemonSpecies[] = []

  for (const line of lines) {
    const parts = line.split(',')
    if (parts.length !== header.length) continue
    const primaryTypeStr = parts[idx('primaryType')].trim()
    const secondaryTypeStr = parts[idx('secondaryType')]?.trim() || ''
    out.push({
      id: parts[idx('id')],
      name: parts[idx('name')],
      image: parts[idx('image')],
      maxHp: parseInt(parts[idx('maxHp')], 10),
      baseAttack: parseInt(parts[idx('baseAttack')], 10),
      baseDefense: parseInt(parts[idx('baseDefense')], 10),
      baseSpeed: parseInt(parts[idx('baseSpeed')], 10),
      movementRange: parseInt(parts[idx('movementRange')], 10),
      primaryType: PokemonType[primaryTypeStr as keyof typeof PokemonType],
      secondaryType: secondaryTypeStr
        ? PokemonType[secondaryTypeStr as keyof typeof PokemonType]
        : null,
      move: MOVES.find(a => a.name === parts[idx('move')]) ?? MOVES[0],
      })
  }
  return out

}