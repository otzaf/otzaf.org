import React, { useEffect } from 'react'
import { HashRouter, withRouter } from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import ErrorBoundary from './error_boundary'

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
}

const Scroller = withRouter(ScrollToTop)

const RoutedPageTemplate = ({ children }) => {
  return (
    <HashRouter>
      <Scroller>
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
        </ErrorBoundary>
      </Scroller>
    </HashRouter>
  )
}

export default RoutedPageTemplate
