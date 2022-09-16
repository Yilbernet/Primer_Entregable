import { useState } from 'react'
import quotes from './json/quotes.json'
import color from './utils/color'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Body
        quotes={quotes}
        color={color}
      />
    </div>
  )
}

export default App
