import React, { Fragment } from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import MapsLogo from 'img/maps.png'
import MixTapeLogo from 'img/spotify.jpg'

const MixTapeLink = <a href="https://medium.com/p/check-out-my-mixtape-a7bfbcc98860?source=email-97ffaeda2728--writer.postDistributed&sk=b93c9e9ebc60f8f360e8f0b892adcb30">Read More on Medium ↗</a>
const MapsLink = (
  <a href="https://medium.com/p/how-well-do-we-perceive-maps-1a761ed4898c?source=email-97ffaeda2728--writer.postDistributed&sk=8c6e73e6c9aa2de74362b71bb32ba5a1">Read More on Medium ↗</a>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Fragment>
          <Project
            logo={MixTapeLogo}
            title="Mix Tape • Spotify Data Visualization"
            abstract="Analyzing music playlists & preferences."
            link={MixTapeLink}
          />
          <Project
            logo={MapsLogo}
            title="How Well Do We Perceive Maps?"
            abstract="Spatial representations can help us perceive geographical phenomena."
            link={MapsLink}
          />
        </Fragment>
      }
    />
  )
}

export default Writing
