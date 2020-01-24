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
    // Tab
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
          <meta name="description" content="Gabriel Adorf's projects" />
          <meta
            name="keywords"
            content="design, ux, ui, product, graphic, health, climbing, app, interface, experience, festival, techno, code"
          />
          <meta
            property="og:image"
            content="https://www.gabrieladorf.com/static/kellerkindCover-14f87246d1614ff1cf339940bdc58186.jpg"
          />
          <meta property="og:description" content="Gabriel Adorf's projects" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gabrieladorf.com" />
          <meta property="og:title" content="Gabriel Adorf" />

          // 
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <GlobalStyle displayOutlines={this.state.displayOutlines} />
        {this.props.children}
      </Fragment>
    )
  }
}

export default GlobalWrapper
