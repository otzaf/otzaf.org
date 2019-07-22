import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <footer>
    <section className="contributingContainer">
      <h4>Contributing</h4>
      <p>
        This website itself is open source. Requests for change can be made
        on the <a href='https://github.com/otzaf/otzaf.org'>GitHub</a> page.
      </p>
      <p>
        All of the open source projects we have can be found on GitHub &mdash; any contributions
        are welcome.
      </p>

      <hr />

      <div className="resourcesContainer">
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Developers</h4>
          <ul>
            <li><a href='https://github.com/otzaf'>GitHub</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><Link to='/tac'>Terms &amp; Conditions</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li><a href='https://www.linkedin.com/company/otzaf'>LinkedIn</a></li>
            <li><a href='https://twitter.com/otzaf1'>Twitter</a></li>
            <li><a href='https://github.com/otzaf'>GitHub</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section className="copy">
      <p>Copyright &copy; Otzaf, 2019. All rights reserved.</p>
    </section>
  </footer>
)