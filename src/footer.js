import React from 'react'
import { Link } from 'react-router-dom'
import { translate } from './translations'

export default () => (
  <footer>
    <section className='container'>
      <div className='footer-content'>
        <h4>{translate('footer', 'contributing')}</h4>
        <p>{translate('footer', 'rfc_msg')}</p>
        <p>{translate('footer', 'open_source_msg')}</p>
      </div>

      <hr />

      <div className='footer-resources'>
        <div>
          <h4>{translate('footer', 'company')}</h4>
          <ul>
            <li><Link to='/about'>{translate('footer', 'about')}</Link></li>
            <li><Link to='/contact'>{translate('footer', 'contact')}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{translate('footer', 'developers')}</h4>
          <ul>
            <li><a href='https://github.com/otzaf'>{translate('footer', 'github')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{translate('footer', 'resources')}</h4>
          <ul>
            <li><Link to='/tac'>{translate('footer', 'tac')}</Link></li>
            <li><Link to='/privacy'>{translate('footer', 'privacy')}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{translate('footer', 'follow_us')}</h4>
          <ul>
            <li><a href='https://www.linkedin.com/company/otzaf'>{translate('footer', 'linkedin')}</a></li>
            <li><a href='https://twitter.com/otzaf1'>{translate('footer', 'twitter')}</a></li>
            <li><a href='https://github.com/otzaf'>{translate('footer', 'github')}</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section className='copy'>
      <p>{translate('footer', 'copyright')}</p>
    </section>
  </footer>
)
