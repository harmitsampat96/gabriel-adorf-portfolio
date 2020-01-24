import React from 'react'

import TwoColumns from 'components/twoColumns'
import Project from 'components/project'
import SectionHeading from 'components/sectionHeading'

import ScenographicsLogo from 'img/scenographicslogo'
import MapsLogo from 'img/maps.png'

const MapsLink = (
  <a href="https://medium.com/p/how-well-do-we-perceive-maps-1a761ed4898c?source=email-97ffaeda2728--writer.postDistributed&sk=8c6e73e6c9aa2de74362b71bb32ba5a1">Read More on Medium ↗</a>
)

function Writing() {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Project
          logo={MapsLogo}
          title="How Well Do We Perceive Maps?"
          abstract="Spatial representations can help us perceive geographical phenomena."
          link={MapsLink}
        />
      }
    />
  )
}

export default Writing
