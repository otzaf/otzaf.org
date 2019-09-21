import React from 'react'
import RoutedPageTemplate from './routed_page_template'

const ErrorContainer = () => {
  return (
    <RoutedPageTemplate>
      <main>
        <article>
          <h1>Oh No!</h1>
          <p>
                    Something went wrong.
          </p>
        </article>
      </main>
    </RoutedPageTemplate>
  )
}

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError (error) {
    console.error(error)
    return {
      hasError: true
    }
  }

  componentDidCatch (error, errorInfo) {
    // TODO sentry?
    console.error(error, errorInfo)
  }

  render () {
    if (!this.state.hasError) {
      return this.props.children
    }
    return <ErrorContainer />
  }
}

export default ErrorBoundary
