import { Link } from 'react-router-dom'

export default () => (
  <footer>
    <section className="resources">
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
            <li><Link to='https://github.com/otzaf'>GitHub</Link></li>
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
            <li><a href='https://github.com/otzaf'>GitHub</a></li>
            <li><a href='https://www.linkedin.com/company/otzaf'>LinkedIn</a></li>
            <li><a href='https://github.com/otzaf'>Twitter</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section className="copy">
      <p>Copyright &copy; Otzaf, 2019. All rights reserved.</p>
    </section>
  </footer>
)