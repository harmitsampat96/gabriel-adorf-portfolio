import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'

import GoCanvasLogo from 'img/gocanvas.png'
import iqSolnLogo from 'img/iqsoln.jpg'
import MixTapeLogo from 'img/spotify.jpg'
import KJSCELiveLogo from 'img/kjscelive.png'

const GoCanvasLink = <a href="https://drive.google.com/file/d/1VKIxKIUchkGk_rlK30TN4sS_xN1FwF7r/view?usp=sharing">Read More →</a>
const IQSolnLink = <Link to="/iqsolns">Read More →</Link>
const MixTapeLink = <a href="https://medium.com/p/check-out-my-mixtape-a7bfbcc98860?source=email-97ffaeda2728--writer.postDistributed&sk=b93c9e9ebc60f8f360e8f0b892adcb30">Read More →</a>
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
            logo={MixTapeLogo}
            title="Mix Tape • Spotify Data Visualization"
            abstract="Analyzing music playlists & preferences."
            link={MixTapeLink}
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
