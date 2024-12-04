import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { PokemonBattle } from './Components/PokemonBattle'

function App() {

  return (
    <>
      <h1 className="text-center text-7xl py-12 font-bold">Pokémon Sumo</h1>
      <BrowserRouter>
        <div className="mx-auto flex gap-12 justify-center">
          <Link to='/'      className="text-center text-2xl pb-12">Dohyō</Link>
          <Link to='/about' className="text-center text-2xl pb-12">About</Link>
        </div>

        <Routes>
          <Route path='/'     element={<PokemonBattle />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
