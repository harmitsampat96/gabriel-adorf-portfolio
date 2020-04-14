import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import GoCanvasLogo from 'img/gocanvas.png'
import iqSolnLogo from 'img/iqsoln.jpg'
import KJSCELiveLogo from 'img/kjscelive.png'

const GoCanvasLink = <Link to="/gocanvas">Read More →</Link>
const IQSolnLink = <Link to="/iqsolns">Read More →</Link>
const KJSCELiveLink = <a href="https://drive.google.com/file/d/19rzaiyQ0BlkqEv9AqLth8jIjzfXQbaya/view">Read More →</a>

function Work() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>W0rk</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={GoCanvasLogo}
            title="GoCanvas"
            abstract="Workflow & Dispatch interface usability testing."
            link={GoCanvasLink}
          />
          <Project
            logo={iqSolnLogo}
            title="iQ Solutions"
            abstract="Information Resource Center Modernization."
            link={IQSolnLink}
          />
          <Project
            logo={KJSCELiveLogo}
            title="KJSCE Live"
            abstract="Official college mobile application for K.J. Somaiya College of Engineering (KJSCE)."
            link={KJSCELiveLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
