import React from 'react'
import { Link } from 'react-router-dom'
import { translate } from './translations'

export default () => {
  return (
    <main>
      <article className='container mission-statement'>
        <h1>{translate('home', 'welcome')}</h1>
        <p className='mission'>{translate('home', 'mission')}</p>
      </article>

      <article>
        <p>{translate('home', 'goal1')}</p>
        <p>{translate('home', 'learn_more')}</p>
      </article>
    </main>
  )
}
