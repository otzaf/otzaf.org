import React from 'react'
import { NavLink } from 'react-router-dom'
import { translate } from './translations'

export default () => (
  <header>
    <nav>
      <ul>
        <div className='logoContainer'>
          <li className='logo'><a href='https://otzaf.org'>{translate('header', 'otzaf')}</a></li>
        </div>

        <div className='links'>
          <li><NavLink exact activeClassName='navlink-selected' to='/'>{translate('header', 'home')}</NavLink></li>
          <li><a href='https://github.com/otzaf'>{translate('header', 'source_code')}</a></li>
          <li><NavLink exact activeClassName='navlink-selected' to='/about'>{translate('header', 'about')}</NavLink></li>
        </div>
      </ul>
    </nav>
  </header>
)
