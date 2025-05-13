'use client'

import React from 'react'
import sortAsc from './domino/sortAsc'
import sortDesc from './domino/sortDesc'
import removeDup from './domino/removeDup'
import flipDomino from './domino/flipDomino'
import removeTotal from './domino/removeTotal'
import doubleCounts from './domino/doubleCounts'
import { useState as reactUseState } from 'react'

type Domino = [number, number]

const defaultDominoes: Domino[] = [
  [6, 1], [4, 3], [5, 1], [3, 4], [1, 1], [3, 4], [1, 2]
]

export default function HomePage() {
  const [dominoes, setDominoes] = useState<Domino[]>([...defaultDominoes])
  const [inputNumber, setInputNumber] = useState('')

  return (
    <main className="min-h-screen p-6  max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dominoes</h1>

      <div className="mb-4 bg-white border rounded shadow p-3">
        <label className="block font-semibold mb-2">Source</label>
        <textarea
          value={JSON.stringify(dominoes)}
          readOnly
          className="w-full p-2  bg-gray-50 font-mono"
        />
      </div>


      <div className="mb-6 bg-white border rounded shadow p-3">
        <label className="block font-semibold mb-2">Double Numbers</label>
        <input
          value={doubleCounts(dominoes)}
          readOnly
          className="w-full p-2  bg-gray-50"
        />
      </div>



      <div className="flex flex-wrap gap-2 mb-6">
        {dominoes.map(([a, b], idx) => (
          <div
            key={idx}
            className="w-[30px] h-[150px] bg-white border border-black rounded text-center shadow flex flex-col items-center justify-between py-2"
          >

            <div className="text-xl font-bold">{a}</div>
            <div className="w-2 border-t-2 border-black my-0" />
            <div className="text-xl font-bold">{b}</div>
          </div>
        ))}
      </div>


      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={() => setDominoes(sortAsc(dominoes))}>Sort (ASC)</Button>
        <Button onClick={() => setDominoes(sortDesc(dominoes))}>Sort (DESC)</Button>
        <Button onClick={() => setDominoes(flipDomino(dominoes))}>Flip</Button>
        <Button onClick={() => setDominoes(removeDup(dominoes))}>Remove Dup</Button>
        <Button onClick={() => setDominoes([...defaultDominoes])}>Reset</Button>
      </div>


      <div className="flex items-center gap-1 mb-0">
        <input
          type="number"
          placeholder="Input Number"
          className="border p-2 rounded"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}

        />


      </div>
      <Button
        onClick={() => {
          const num = parseInt(inputNumber)
          if (!isNaN(num)) {
            setDominoes(removeTotal(dominoes, num))
            setInputNumber('')
          }
        }}
      >
        Remove
      </Button>

    </main>
  )
}

function useState<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  return reactUseState(initialValue)
}

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-400 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded shadow"
    >
      {children}
    </button>
  )
}
