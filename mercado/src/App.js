import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <hi>Let's do this bitch</hi>
      </main>
    </div>
  )
}

export default App
