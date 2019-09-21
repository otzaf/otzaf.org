import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import React, { Suspense } from 'react'
import { IntlProvider } from 'react-intl'

import Home from './home'
import Contact from './contact'
import About from './about'
import ErrorPage from './error_page'
import RoutedPageTemplate from './routed_page_template'
import LoadingPage from './loading_page'

import './main.css'

const App = () => (
  <RoutedPageTemplate>
    <Suspense fallback={LoadingPage}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </Suspense>
  </RoutedPageTemplate>
)

ReactDOM.render(<IntlProvider locale='en'><App/></IntlProvider>, document.getElementById('app'))
