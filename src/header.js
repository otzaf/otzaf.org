import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header>
    <nav>
      <ul>
        <div className='logoContainer'>
          <li className='logo'><a href='https://otzaf.org'>otzaf</a></li>
        </div>

        <div className='links'>
          <li><NavLink exact activeClassName='navlink-selected' to='/'>Home</NavLink></li>
          <li><a href='https://github.com/otzaf'>Source Code</a></li>
          <li><NavLink exact activeClassName='navlink-selected' to='/about'>About</NavLink></li>
        </div>
      </ul>
    </nav>
  </header>
)
