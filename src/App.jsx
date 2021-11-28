import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './Components/Pages/About/About'
import Home from './Components/Pages/Home/Home'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
