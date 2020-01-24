import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const Button = styled.a`
  font-size: ${fontSize.f4};
`

function About() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Ab0ut</SectionHeading>}
      rightColumn={
        <Fragment>
          <p>
            I am a graduate student at the <b>University of Maryland</b> pursuing my Master's
            in <b>Human-Computer Interaction</b>. Coming from a computer science & engineering background,
            I believe that I can offer a unique skill set and help create richer experiences by using the
            technological capabilities at its fullest. My primary research interests are in
            data visualization and creating novel user interfaces.
          </p>
          
          <p>
            I'm now looking for <b>UX Design & Research</b> internship opportunities - Summer 2020. 
            If you'd like to get in touch or see more of my work please contact me at <Link to="mailto:harmitsampat@gmail.com">harmitsampat@gmail.com</Link>. Also, feel
            free to connect with me on <Link to="https://www.linkedin.com/in/harmitsampat96/">LinkedIn</Link>.
          </p>
          <Button href="https://drive.google.com/file/d/1V3uvj7lw2Q2WQ3QdJvw17tEud4A0K-oa/view?usp=sharing">🗎 View Resume</Button>
          
        </Fragment>
      }
    />
  )
}

export default About

/*
<p>
            Currently I'm designing the future of medical infrastructure at{' '}
            <Link to="/lifetime">LifeTime</Link> and hosting electronic music
            festivals with <Link to="/kellerkind">Kellerkind</Link>.
          </p>
<p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my family, climbing and riding
            all kinds of boards on roads, water and snow.
          </p>*/