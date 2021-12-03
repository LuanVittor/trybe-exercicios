import React from 'react'
import useNum from './hooks/useNum'

export default function App() {
  const { number, multiple, timer } = useNum()
  return (
    <div>
      <p>{`timer: ${timer}`}</p>
      <p>{`numero aleatorio: ${number}`}</p>
      {(multiple) && <p>Acerto</p> }
    </div>
  )
}

