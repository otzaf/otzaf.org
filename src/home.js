import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <main>
    <article className='container mission-statement'>
      <h1>Hello, World! We're Otzaf.</h1>
      <p className='mission'>
        Otzaf is an engineering company with the mission of providing elegant solutions that
        are <span className='keyword'>privacy</span> first - we don't depend on abusing
        your <span className='keyword'>trust</span> for profit.
      </p>
    </article>

    <article>
      <p>
        Otzaf is a young company with ambitious goals - there are many problems that we are yet to tackle. Right now we're
        in the phase of bootstrapping Otzaf.
      </p>
      <p>
        Join us on our journey. Learn more about <Link to='/about'>what we're planning</Link>.
      </p>
    </article>
  </main>
)
