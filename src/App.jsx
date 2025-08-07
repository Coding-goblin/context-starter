import {useState} from "react"
import './App.css'

import { First } from './components/First'
import { Second } from './components/Second'

import {SettingsProvider} from "./context/SettingsContext"


function App() {

  return (
    <>
      <SettingsProvider>
      <h1>React Context</h1>



      <div style={{display: 'flex', gap: 20}}>
        <First />
        <Second />
      </div>

      </SettingsProvider>
    </> 
  )
}

export default App
