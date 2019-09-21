import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()
  return (
    <main>
      <article className='container mission-statement'>
        <h1>{t('Welcome')}</h1>
        <p className='mission'>
          Otzaf is an engineering company with the mission of providing elegant solutions that
          are <span className='keyword'>privacy</span> first - we don't depend on abusing
          your <span className='keyword'>trust</span> for profit.
        </p>
      </article>

      <article>
        <p>
          {t('goal1')}
        </p>
        <p>
          Join us on our journey. Learn more about <Link to='/about'>what we're planning</Link>.
        </p>
      </article>
    </main>
  )
}
