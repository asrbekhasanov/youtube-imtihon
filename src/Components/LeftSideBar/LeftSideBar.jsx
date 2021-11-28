import { Routes, Route, NavLink } from 'react-router-dom';
import './leftsidebar.scss';
import Channel from '../Pages/Channel/Channel';
import Home from '../Pages/Home/Home';
function LeftSideBar() {
    return (
      <>
      <nav className='nav'>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>
            <NavLink className='sidebar__link' to='/'>Home</NavLink>
          </li>
          <li className='sidebar__item'>
            <NavLink className='sidebar__link' to='/channel'>Channel</NavLink>
          </li>
          <li className='sidebar__item'>
              <a className='sidebar__link' href="https://www.youtube.com/feed/explore">Explore</a>
          </li>
          <li className='sidebar__item'>
              <a className='sidebar__link' href="https://www.youtube.com/feed/subscriptions">Subscriptions</a>
          </li>
          <li className='sidebar__item'>
              <a className='sidebar__link' href="https://www.youtube.com/feed/library">Library</a>
          </li>
          <li className='sidebar__item'>
              <a className='sidebar__link' href="https://www.youtube.com/feed/history">History</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/channel' element={<Channel />} />
      </Routes>
      </>
    );
}
  
export default LeftSideBar;
  