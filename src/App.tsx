import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Board } from './components/Board'
import { Controls } from './components/Controls'
import { getDamage, getMultiplier, Pokemon } from './game/Pokemon'
import { BOARD_SIZE, loadSpeciesFromCsv, defaultFacingForTeam, makePositionsForTeam } from './game/data'
import { Facing, PlayerId, Position, PokemonSpecies } from './game/types'
import { getMoveSquares, StatChangeEffect, addHopPosition } from './game/moves'

type WinnerState = 'A' | 'B' | 'Draw' | null

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [species, setSpecies] = useState<PokemonSpecies[]>([])
  const [placementMode, setPlacementMode] = useState<null | { speciesId: string; team: PlayerId }>(null)
  const [isSetupPhase, setIsSetupPhase] = useState<boolean>(true)
  const [currentPlayer, setCurrentPlayer] = useState<'A' | 'B'>('A')
  const [turnOrder, setTurnOrder] = useState<string[]>([])
  const [turnIndex, setTurnIndex] = useState<number>(0)
  const [hasMoved, setHasMoved] = useState<boolean>(false)
  // Track which Pokemon have already acted this round to prevent multiple moves
  const [actedThisRound, setActedThisRound] = useState<Set<string>>(new Set())
  const [winner, setWinner] = useState<WinnerState>(null)

  // Derived: has each side at least one unit?
  const gameStarted = !isSetupPhase

  // Build initial turn order only when the player changes and the game has started
  useEffect(() => {
    if (!gameStarted) return
    const alive = pokemons.filter((p) => p.team === currentPlayer && !p.isFainted)
    setTurnOrder(alive.map((p) => p.id))
    setTurnIndex(0)
    setHasMoved(false)
    // Reset round action tracker when new player's turn starts
    setActedThisRound(new Set())
  }, [currentPlayer, gameStarted])

  const activePokemon: Pokemon | null = useMemo(() => {
    const id = turnOrder[turnIndex]
    return pokemons.find((p) => p.id === id) ?? null
  }, [pokemons, turnOrder, turnIndex])

  useEffect(() => {
    // if all pokemon are fainted on one team, the other team wins
    if (!gameStarted) return
    const aAlive = pokemons.some((p) => p.team === 'A' && !p.isFainted)
    const bAlive = pokemons.some((p) => p.team === 'B' && !p.isFainted)
    console.log ('aAlive:' , aAlive);
    console.log ('bAlive:' , bAlive);
    if (!aAlive && bAlive) {
      setWinner('B')
      return
    }
    if (!bAlive && aAlive) {
      setWinner('A')
      return
    }
  }, [pokemons, gameStarted])

  // Load base species CSV at startup
  useEffect(() => {
    (async () => {
      try {
        const list = await loadSpeciesFromCsv('/data/pokemon.csv')
        setSpecies(list)
      } catch {
        console.log("Error caught");
      }
    })()
  }, [])

  // If the game has started and current player has no units, pass the turn
  useEffect(() => {
    if (!gameStarted || winner) return
    const currentAlive = pokemons.some((p) => p.team === currentPlayer && !p.isFainted)
    const otherAlive = pokemons.some((p) => p.team !== currentPlayer && !p.isFainted)
    if (!currentAlive && otherAlive) {
      setCurrentPlayer((p) => (p === 'A' ? 'B' : 'A'))
    }
  }, [gameStarted, pokemons, currentPlayer, winner])

  function isInside(pos: Position): boolean {
    return pos.x >= 0 && pos.x < BOARD_SIZE && pos.y >= 0 && pos.y < BOARD_SIZE
  }

  function getOccupiedSet(excludeId?: string): Set<string> {
    const set = new Set<string>()
    pokemons.forEach((p) => {
      if (!p.isFainted && p.id !== excludeId) set.add(`${p.position.x},${p.position.y}`)
    })
    return set
  }

  const moveHighlights: Set<string> = useMemo(() => {
    const result = new Set<string>()
    if (!activePokemon) return result
    // BFS up to movementRange in 4 directions; block on occupied cells
    const occupied = getOccupiedSet(activePokemon.id)
    const queue: [Position, number][] = [[activePokemon.position, 0]]
    const visited = new Set<string>([`${activePokemon.position.x},${activePokemon.position.y}`])
    const dirs = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ]
    while (queue.length) {
      const [pos, dist] = queue.shift()!
      if (dist > 0) result.add(`${pos.x},${pos.y}`)
      if (dist === activePokemon.movementRange) continue
      for (const d of dirs) {
        const n: Position = { x: pos.x + d.x, y: pos.y + d.y }
        const key = `${n.x},${n.y}`
        if (!isInside(n)) continue
        if (visited.has(key)) continue
        if (occupied.has(key)) continue
        visited.add(key)
        queue.push([n, dist + 1])
      }
    }
    return result
  }, [activePokemon, pokemons])

  const attackHighlights: Set<string> = useMemo(() => {
    const result = new Set<string>()
    if (!activePokemon) return result
  
    console.log('activepokemon:', activePokemon);
    const movePosition = activePokemon.move.hop ? addHopPosition(activePokemon.position, activePokemon.facing, activePokemon.move.hop) : activePokemon.position;
    const squares = getMoveSquares(movePosition, activePokemon.facing, activePokemon.move.shape)
  
    for (const pos of squares) {
      if (isInside(pos)) {
        result.add(`${pos.x},${pos.y}`)
      }
    }
    return result
  }, [activePokemon])

  // Calculate hop validity
  const hopPosition = activePokemon ? addHopPosition(activePokemon.position, activePokemon.facing, activePokemon.move.hop) : null
  const hopPositionKey = hopPosition ? `${hopPosition?.x},${hopPosition?.y}` : ""
  const occupied = getOccupiedSet(activePokemon?.id)
  const isHopValid = hopPosition && !occupied.has(hopPositionKey) && isInside(hopPosition)

  function handleCellClick(pos: Position) {
    if (isSetupPhase && placementMode) {
      // Place a new Pokemon of selected species for the specified team
      const isOccupied = pokemons.some((p) => p.position.x === pos.x && p.position.y === pos.y)
      if (isOccupied) return
      const teamCount = pokemons.filter((p) => p.team === placementMode.team).length
      if (teamCount >= 6) return
      const spec = species.find((s) => s.id === placementMode.speciesId)
      if (!spec) return
      const id = `${placementMode.team}-${spec.id}-${teamCount + 1}`
      const newP = new Pokemon({
        id,
        name: spec.name,
        team: placementMode.team,
        image: spec.image,
        position: pos,
        facing: defaultFacingForTeam(placementMode.team),
        maxHp: spec.maxHp,
        hp: spec.maxHp,
        movementRange: spec.movementRange,
        primaryType: spec.primaryType,
        secondaryType: spec.secondaryType ?? null,
        move: spec.move,
      })
      setPokemons((prev) => [...prev, newP])
      // Exit placement mode after a successful placement so user must re-enable
      setPlacementMode(null)
      return
    }
    if (!activePokemon || winner || !gameStarted) return
    const key = `${pos.x},${pos.y}`
    
    // Handle regular movement
    if (moveHighlights.has(key) && !hasMoved && !actedThisRound.has(activePokemon.id)) {
      // Move active pokemon
      setPokemons((prev) =>
        prev.map((p) => (p.id === activePokemon.id ? new Pokemon({ ...p, position: pos }) : p))
      )
      setHasMoved(true)
      setActedThisRound((prev) => new Set(prev).add(activePokemon.id))
    }
  }

  function changeFacing(f: Facing) {
    if (!activePokemon || winner) return
    setPokemons((prev) => prev.map((p) => (p.id === activePokemon.id ? new Pokemon({ ...p, facing: f }) : p)))
  }

  function handleStatChange(pokemon: Pokemon, statChangeEffect: StatChangeEffect) {
    console.log('pokemon: ', pokemon)
    const multiplier = statChangeEffect.increase ? 
    1.0 + (statChangeEffect.stages * 0.5)
    :  2.0 / (statChangeEffect.stages + 1.0);
    switch (statChangeEffect.stat) {
      case 'attack':
        pokemon.attack *= multiplier
        break;
      case 'defense':
        pokemon.defense *= multiplier
        break;
      case 'speed':
        pokemon.speed *= multiplier
        break;
      case 'range':
        console.error('Range change not implemented yet.');
        break;
      default:
        break;
      }
      console.log(`${pokemon.name}'s ${statChangeEffect.stat} went ${statChangeEffect.increase ? 'up' : 'down'} by ${statChangeEffect.stages} stages!`);
    }
  function ProcessAddtionalEffects(activePokemon: Pokemon, targetPokemon: Array<[Pokemon, number]>) {
    for (const effect of activePokemon.move.additionalEffects) {
      switch (effect.kind) {
        case 'heal': {
          // Calculate heal amount based on damage dealt to first target
          const rawDamage = targetPokemon.length > 0 ? targetPokemon[0][1] : 0;
          let healAmount = rawDamage * effect.healPercentage;
          if (activePokemon.hp + healAmount >= activePokemon.maxHp) {
            healAmount = activePokemon.maxHp - activePokemon.hp;
          }
          activePokemon.hp += healAmount;
          console.log(`${activePokemon.name} healed for ${healAmount}`);
          break;
        }
  
        case 'statChange':
          // // effect.stat and effect.increase
          if (Math.random() < effect.chance) {
            if (effect.self) {
              handleStatChange(activePokemon, effect);
            }
            for (const [target, _damage] of targetPokemon) {
              handleStatChange(target, effect);
            }
          }
          // console.log(
          //   `${activePokemon.name} ${
          //     effect.increase ? 'increases' : 'decreases'
          //   } ${effect.stat}`
          // );
          // // Apply stat changes to targetPokemon or activePokemon depending on design
          break;
  
        case 'status':
          // console.log(`${targetPokemon.name} is inflicted with ${effect.status}`);
          // // Apply status effect to targetPokemon
          console.log('Status not implemented yet');
          break;
  
        default:
          // const _exhaustiveCheck: never = effect;
          break;
      }
    }
  }

  function applyAttack() {
    if (!activePokemon || winner) return
    
    // Check if hop is required and valid
    if (activePokemon.move.hop && !isHopValid) {
      console.log('Cannot attack: hop position is invalid or occupied')
      return
    }
    
    // Move to hop position if the move has a hop
    let finalPosition = activePokemon.position
    if (activePokemon.move.hop && hopPosition) {
      finalPosition = hopPosition
    }
    
    // Deal damage to enemies inside attackHighlights
    const targets = new Set(attackHighlights)
    const targetPokemon: Array<[Pokemon, number]> = [];
    setPokemons((prev) => {
      const updated = prev.map((p) => {
        if (p.id === activePokemon.id) {
          // Move the active Pokemon to hop position if applicable
          return new Pokemon({ ...p, position: finalPosition })
        }
        if (p.team === activePokemon.team) return p
        const key = `${p.position.x},${p.position.y}`
        if (targets.has(key)) {
          const rawDamage = getDamage(activePokemon, p);
          targetPokemon.push([p, rawDamage]);
          const newHp = p.hp - rawDamage;
          return new Pokemon({ ...p, hp: newHp })
        }
        return p
      })
      ProcessAddtionalEffects(activePokemon, targetPokemon);

      return updated.filter((p) => !p.isFainted)
    })
    endStep()
  }

  function waitAction() {
    if (winner || !gameStarted || !activePokemon) return
    endStep()
  }

  function endStep() {
    // Advance to next pokemon in this player's fixed order. Skip any that might be missing/fainted.
    setTurnIndex((prevIndex) => {
      let nextIndex = prevIndex + 1
      while (nextIndex < turnOrder.length) {
        const nextId = turnOrder[nextIndex]
        const exists = pokemons.some((p) => p.id === nextId && !p.isFainted)
        if (exists) break
        nextIndex += 1
      }
      if (nextIndex >= turnOrder.length) {
        // End of team order -> switch player; the new player's effect will reset index
        setCurrentPlayer((p) => (p === 'A' ? 'B' : 'A'))
        return prevIndex
      }
      setHasMoved(false)
      return nextIndex
    })
  }

  const canAttack = !!activePokemon && (!activePokemon.move.hop || !!isHopValid)

  function TeamBuilder() {
    const [selectedSpecies, setSelectedSpecies] = useState<string>('')
    const [teamSel, setTeamSel] = useState<PlayerId>('A')
    useEffect(() => {
      if (!selectedSpecies && species.length) setSelectedSpecies(species[0].id)
    }, [species])
    const aLeft = 6 - pokemons.filter((p) => p.team === 'A').length
    const bLeft = 6 - pokemons.filter((p) => p.team === 'B').length
    return (
      <div className="panel" style={{ marginBottom: 12 }}>
        <h3>Setup</h3>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {!placementMode && (
            <>
              <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}>
                {species.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <label>
                <input type="radio" name="team" checked={teamSel === 'A'} onChange={() => setTeamSel('A')} /> Team A ({aLeft} slots)
              </label>
              <label>
                <input type="radio" name="team" checked={teamSel === 'B'} onChange={() => setTeamSel('B')} /> Team B ({bLeft} slots)
              </label>
            </>
          )}
          <button onClick={() => setPlacementMode(!placementMode && selectedSpecies ? { speciesId: selectedSpecies, team: teamSel } : null)} disabled={!selectedSpecies || (teamSel === 'A' ? aLeft <= 0 : bLeft <= 0)}>
            {placementMode ? 'Click a board tile…' : 'Enable Placement'}
          </button>
          {placementMode && <button onClick={() => setPlacementMode(null)}>Cancel</button>}
          <button
            onClick={() => {
              // Start game only if both have at least 1
              if (aLeft === 6 || bLeft === 6) return
              setIsSetupPhase(false)
              setCurrentPlayer('A')
            }}
            disabled={aLeft === 6 || bLeft === 6}
          >
            Start Game
          </button>
          <button
            onClick={() => {
              // Quick load defaults: first 3 species for A on bottom, first 3 for B on top
              if (!species.length) return
              const posA = makePositionsForTeam('A')
              const posB = makePositionsForTeam('B')
              const toAdd: Pokemon[] = []
              for (let i = 0; i < Math.min(3, species.length); i++) {
                const s = species[i]
                toAdd.push(new Pokemon({ id: `A-${s.id}-${i}`, 
                  name: s.name, team: 'A', image: s.image, position: posA[i], 
                  facing: defaultFacingForTeam('A'), maxHp: s.maxHp, hp: s.maxHp, 
                  attack: s.baseAttack, defense: s.baseDefense, speed: s.baseSpeed,
                  movementRange: s.movementRange, primaryType: s.primaryType, 
                  secondaryType: s.secondaryType, move: s.move }))
              }
              for (let i = 0; i < Math.min(3, species.length); i++) {
                const s = species[i]
                toAdd.push(new Pokemon({ id: `B-${s.id}-${i}`, 
                  name: s.name, team: 'B', image: s.image, position: posB[i], 
                  facing: defaultFacingForTeam('B'), maxHp: s.maxHp, hp: s.maxHp, 
                  attack: s.baseAttack, defense: s.baseDefense, speed: s.baseSpeed,
                  movementRange: s.movementRange, primaryType: s.primaryType, 
                  secondaryType: s.secondaryType, move: s.move }))
              }
              setPokemons(toAdd)
            }}
          >
            Load Default 3v3
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="app">
      <div className="left">
        <Board
          pokemons={pokemons}
          activePokemonId={activePokemon?.id ?? null}
          highlightMoves={hasMoved ? new Set<string>() : moveHighlights}
          highlightAttack={attackHighlights}
          onCellClick={handleCellClick}
        />
      </div>
      <div className="right">
        {isSetupPhase && <TeamBuilder />}
        {winner ? (
          <div className="winner">{winner === 'Draw' ? 'Draw!' : `Player ${winner} wins!`}</div>
        ) : (
          <Controls
            currentPlayer={currentPlayer}
            activePokemon={activePokemon}
            canAttack={canAttack}
            onFacingChange={changeFacing}
            onAttack={applyAttack}
            onWait={waitAction}
          />
        )}
      </div>
    </div>
  )
}

export default App
