import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Header from './header'
import Footer from './footer'

import Home from './home'
import Contact from './contact'
import About from './about'

const routes = (
  <HashRouter>
    <Header/>

    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>

    <Footer/>
  </HashRouter>
)  

ReactDOM.render(routes, document.getElementById('app'))