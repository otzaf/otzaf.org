import React from 'react'

export default () => (
  <main>
    <article>
      <h1>About Otzaf</h1>
      <p>
        Otzaf is an Engineering company based in Brighton, UK. Our mission is to provide a variety of elegant, privacy-centric
        software solutions.
      </p>
    </article>

    <article>
      <div className='paddedSection'>
        <h3>Vision</h3>
        <p>
          We want to provide a suite of polished software(-as-a-service) solutions that don't misuse your personal information.
        </p>
      </div>

      <div className='paddedSection'>
        <h3>Where we're headed</h3>
        <p>
          Particular problems we're interested in tackling are: search, file storage, planning &amp; organisation,
          emails, and much more!
        </p>
        <p>
          The services that we offer will cost a small fee every month to keep the lights on. We want to provide services worth paying for - where you
          aren't the product.
        </p>
      </div>

      <div className='paddedSection'>
        <h3>Transparency</h3>
        <p>
          Most of our work is done in the public eye and
          can be contributed to by anyone. We try to keep things open when we can. In the future our roadmap will be publicly available.
        </p>
        <p>
          In the mean time you can check out our <a href='https://github.com/otzaf/'>GitHub</a> page where we keep some of our projects.
        </p>
      </div>
    </article>

  </main>
)
