import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <section className="resources">
                    <div className="resourcesContainer">
                        <div>
                            <h4>Resources</h4>
                            <ul>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                                <li><Link to='https://github.com/otzaf'>GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="copy">
                    <p>Copyright &copy; Otzaf, 2019. All rights reserved.</p>
                </section>
            </footer>
        )
    }
}