import React, { act } from 'react'
import { Facing, PlayerId } from '../game/types'
import { Pokemon } from '../game/Pokemon'

export interface ControlsProps {
  currentPlayer: PlayerId
  activePokemon: Pokemon | null
  canAttack: boolean
  onFacingChange: (facing: Facing) => void
  onAttack: () => void
  onWait: () => void
}

export const Controls: React.FC<ControlsProps> = ({
  currentPlayer,
  activePokemon,
  canAttack,
  onFacingChange,
  onAttack,
  onWait,
}) => {
  return (
    <div className="controls">
      <div className="panel">
        <h2>Player {currentPlayer}'s Turn</h2>
        {activePokemon ? (
          <>
            <div className="active-info">
              <img src={activePokemon.image} alt={activePokemon.name} />
              <div>
                <div className="name">{activePokemon.name}</div>
                <div>HP: {activePokemon.hp}/{activePokemon.maxHp}</div>
              </div>
            </div>
            <div className="facing-controls">
              <div>Facing</div>
              <div className="arrows">
                <button onClick={() => onFacingChange('N')}>↑</button>
                <div className="left-right">
                  <button onClick={() => onFacingChange('W')}>←</button>
                  <button onClick={() => onFacingChange('E')}>→</button>
                </div>
                <button onClick={() => onFacingChange('S')}>↓</button>
              </div>
            </div>
            <div className="actions">
              <button disabled={!canAttack} onClick={onAttack}>{activePokemon.attack.name}</button>
              <button onClick={onWait}>Wait</button>
            </div>
          </>
        ) : (
          <div>No active Pokemon</div>
        )}
      </div>
    </div>
  )
}


