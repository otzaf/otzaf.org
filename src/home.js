import React from 'react'
import { translate } from './translations'

export default () => {
  return (
    <div className='main-container pure-g'>
      <div className='pure-u-1-1'>
        <h1>{translate('home', 'welcome')}</h1>
        <p className='mission'>{translate('home', 'mission')}</p>
      </div>

      <div className='pure-u-1-1'>
        <h3>{translate('home', 'heading')}</h3>
        <p>{translate('home', 'goal1')}</p>
        <p>{translate('home', 'learn_more')}</p>
      </div>
    </div>
  )
}
