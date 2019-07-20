import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <div className="logoContainer">
                            <li className="logo"><a href="https://otzaf.org">otzaf.org</a></li>
                        </div>

                        <div className="links">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='https://github.com/otzaf'>Source Code</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
        )
    }
}