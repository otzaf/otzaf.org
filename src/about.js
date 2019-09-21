import React from 'react'
import { translate } from './translations'

export default () => (
  <main>
    <article>
      <h1>{translate('about', 'about')}</h1>
      <p>
      {translate('about', 'tagline')}
      </p>
    </article>

    <article>
      <div className='paddedSection'>
        <h3>{translate('about', 'vision')}</h3>
        <p>{translate('about', 'vision_msg')}</p>
      </div>

      <div className='paddedSection'>
        <h3>{translate('about', 'direction')}</h3>
        <p>{translate('about', 'direction_msg_1')}</p>
        <p>{translate('about', 'direction_msg_2')}</p>
      </div>

      <div className='paddedSection'>
        <h3>{translate('about', 'transparency')}</h3>
        <p>{translate('about', 'transparency_msg_1')}</p>
        <p>{translate('about', 'transparency_msg_2')}</p>
        <p>{translate('about', 'transparency_msg_3')}</p>
      </div>
    </article>

  </main>
)
