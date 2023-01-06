import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Sub } from './types'

interface AppState {
  subs: Array<Sub>
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces',
  },
  {
    nick: 'steven',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=steven',
  },
]

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Renier subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
