import React from 'react'

export default () => (
  <main>
    <article>
      <h1>Otzaf</h1>
      <p>
        Otzaf is an Engineering compnany based in Brighton, UK. Our mission is to provide a variety of elegant, privacy-centric
        software solutions.
      </p>
    </article>

    <article>
      <div className="paddedSection">
        <h2>Vision</h2>
        <p>
          We want to provide a suite of polished open-source
          software(-as-a-service) solutions that don't misuse your personal information.
        </p>
      </div>

      <div className="paddedSection">
        <h3>Where we're headed</h3>
        <p>
          Particular problems we're interested in tackling are data storage, email, text editors, 
          web browsers, search engines, and more. We want to provide services worth paying for - where you 
          aren't the product.
        </p>
      </div>

      <div className="paddedSection">
        <h2>Transparency</h2>
        <p>
          Most of our work is done in the public eye and
          can be contributed to by anyone. { /* Our roadmap is publicly available <a href=''>here</a>. */ }
        </p>
      </div>
    </article>

  </main>
)