import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import GlobalStyle from 'styles/global-style'

class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayOutlines: false,
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeyboardInput(e))
  }

  handleKeyboardInput(e) {
    const key = e.keyCode || e.charCode
    
    if (key === 9) {
      this.setState({ displayOutlines: true })
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <html lang="en" />
          <title>Harmit Sampat</title>
          <meta name="description" content="Harmit's UX Design Portfolio" />
          <meta
            name="keywords"
            content="design, ux, ui, product, app, interface, experience, code"
          />
          
          <meta property="og:description" content="Harmit's UX Design Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://harmitsampat.com" />
          <meta property="og:title" content="Harmit Sampat" />

          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <GlobalStyle displayOutlines={this.state.displayOutlines} />
        {this.props.children}
      </Fragment>
    )
  }
}

export default GlobalWrapper
