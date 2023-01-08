import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Sub } from './types'
import { getAllSubs } from './services/subs.service'
import { mapFromApiToSubs } from './helpers/subs.helper'

interface AppState {
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // two variants, both do the same
    // first variant
    /* getAllSubs().then((apiSubs) => {
      const subs = mapFromApiToSubs(apiSubs)
      setSubs(subs)
    }) */

    // second variant
    getAllSubs().then(mapFromApiToSubs).then(setSubs)
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
