import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './nav.css'
import Logo from '../images/logo.png'
import {links} from '../data'
import {MdOutlineMenuOpen} from 'react-icons/md'
import {MdOutlineClose} from 'react-icons/md'

const Nav = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">

        <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {
            links.map(({name, path}, index) => {
              return (
                <li>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>

        <button className='nav_btn' onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <MdOutlineMenuOpen />
          }
        </button>
          
      </div>
    </nav>
  )
}

export default Nav