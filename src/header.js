import { Link } from 'react-router-dom'

export default () => (
  <header>
    <nav>
      <ul>
        <div className="logoContainer">
          <li className="logo"><a href="https://otzaf.org">otzaf.org</a></li>
        </div>

        <div className="links">
          <li><Link to='/'>Home</Link></li>
          <li><a href='https://github.com/otzaf'>Source Code</a></li>
          <li><Link to='/about'>About</Link></li>
        </div>
      </ul>
    </nav>
  </header>
)