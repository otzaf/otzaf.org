import React from 'react'
import { NavLink } from 'react-router-dom'
import { translate } from './translations'

export default () => (
  <header className='nav-container'>
    <nav className='pure-menu pure-menu-horizontal'>
      <a className='pure-menu-heading pure-menu-link' href='https://otzaf.org'>{translate('header', 'otzaf')}</a>

      <ul className='pure-menu-list'>
        <li className='pure-menu-item'><NavLink className='pure-menu-link' exact activeClassName='navlink-selected' to='/'>{translate('header', 'home')}</NavLink></li>
        <li className='pure-menu-item'><a className='pure-menu-link' href='https://github.com/otzaf'>{translate('header', 'source_code')}</a></li>
        <li className='pure-menu-item'><NavLink className='pure-menu-link' exact activeClassName='navlink-selected' to='/about'>{translate('header', 'about')}</NavLink></li>
      </ul>
    </nav>
  </header>
)
