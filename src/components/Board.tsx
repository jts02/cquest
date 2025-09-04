import React from 'react'
import { BOARD_SIZE } from '../game/data'
import { Facing, PlayerId, Position } from '../game/types'
import { Pokemon } from '../game/Pokemon'

export interface BoardProps {
  pokemons: Pokemon[]
  activePokemonId: string | null
  highlightMoves: Set<string>
  highlightAttack: Set<string>
  highlightHop: Set<string>
  onCellClick: (pos: Position) => void
}

function keyFromPos(pos: Position): string {
  return `${pos.x},${pos.y}`
}

function facingArrow(facing: Facing): string {
  switch (facing) {
    case 'N':
      return '↑'
    case 'S':
      return '↓'
    case 'E':
      return '→'
    case 'W':
      return '←'
  }
}

export const Board: React.FC<BoardProps> = ({
  pokemons,
  activePokemonId,
  highlightMoves,
  highlightAttack,
  highlightHop,
  onCellClick,
}) => {
  console.log('highlightMoves:', highlightMoves);
  const gridRows = []
  for (let y = 0; y < BOARD_SIZE; y++) {
    const cells = []
    for (let x = 0; x < BOARD_SIZE; x++) {
      const isDark = (x + y) % 2 === 1
      const cellKey = `${x},${y}`
      const isMove = highlightMoves.has(cellKey)
      const isAtk = highlightAttack.has(cellKey)
      const isHop = highlightHop.has(cellKey)
      const occupant = pokemons.find((p) => p.position.x === x && p.position.y === y)
      const isActive = occupant?.id === activePokemonId
      cells.push(
        <div
          key={cellKey}
          className={`cell ${isDark ? 'dark' : 'light'} ${isMove ? 'move' : ''} ${isAtk ? 'atk' : ''} ${isHop ? 'hop' : ''}`}
          onClick={() => onCellClick({ x, y })}
        >
          {occupant && (
            <div className={`piece ${occupant.team === 'A' ? 'teamA' : 'teamB'} ${isActive ? 'active' : ''}`}>
              <img
                src={occupant.image}
                alt={occupant.name}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  if (img.src.endsWith(occupant.image)) {
                    img.src = occupant.team === 'A' ? '/pokemon/blue.svg' : '/pokemon/red.svg'
                  }
                }}
              />
              <div className="hpbar">
                <div
                  className="hp"
                  style={{ width: `${Math.max(0, (occupant.hp / occupant.maxHp) * 100)}%` }}
                />
              </div>
              <div className="facing">{facingArrow(occupant.facing)}</div>
            </div>
          )}
        </div>
      )
    }
    gridRows.push(
      <div key={`row-${y}`} className="row">
        {cells}
      </div>
    )
  }

  return <div className="board">{gridRows}</div>
}


