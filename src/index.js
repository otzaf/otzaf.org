import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, withRouter, Switch } from 'react-router-dom'

import './main.css'

import Header from './header'
import Footer from './footer'

import Home from './home'
import Contact from './contact'
import About from './about'
import ErrorPage from './error_page'

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
}

const Scroller = withRouter(ScrollToTop)

const routes = (
  <HashRouter>
    <Scroller>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={ErrorPage} />
      </Switch>

      <Footer />
    </Scroller>
  </HashRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
