import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color } from 'styles/theme'

const size = 150

const Image = styled.div`
  background: ${color.red500};
  flex: 0 0 ${size}px;
  height: ${size}px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
  `}
  ${media.sm`
    margin-bottom: -20px;
  `}
`

const Logo = styled.img`
  max-height: 120px;
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  border-radius: 100px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19); 
`

function ProjectLogo(props) {
  return (
    <Image>
      <Logo src={props.src} alt={props.alt} />
    </Image>
  )
}

export default ProjectLogo

/*<svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.children}
      </svg>*/