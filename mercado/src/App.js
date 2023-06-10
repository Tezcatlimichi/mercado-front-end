import './App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Art from './pages/Art'
import Articles from './pages/Articles'
import AllFoodItems from './pages/AllFoodItems'
import Food from './pages/Food'
import Produce from './pages/Produce'
import Register from './pages/Register'
import Services from './pages/Services'
import SignIn from './pages/SignIn'
import OneArticle from './components/OneArticle'
import OneFoodItem from './components/OneFoodItem'
import OneProduce from './components/OneProduce'
import OneService from './components/OneService'
import PieceOfArt from './components/PieceOfArt'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/community" element={<Articles />} />
          <Route path="/foods" element={<AllFoodItems />} />
          <Route path="/food" element={<Food />} />
          <Route path="/produce" element={<Produce />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/community/:id" element={<OneArticle />} />
          <Route path="/art/:id" element={<PieceOfArt />} />
          <Route path="/services/:id" element={<OneService />} />
          <Route path="/food/produce/:id" element={<OneProduce />} />
          <Route path="/food/:id" element={<OneFoodItem />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
