import React from 'react'
import styled from 'styled-components'

import media from 'utils/media-queries'

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  justify-content: space-between;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  //border: 1px solid white;
  ${media.md`
    grid-template-columns: auto;
    justify-content: center;
  `}
`

const LeftColumn = styled.div`

`

const RightColumn = styled.div`
  margin-left: 40px;
`

const ProjectIntro = props => {
  return (
    <Div>
      <LeftColumn>{props.leftColumn}</LeftColumn>
      <RightColumn>{props.rightColumn}</RightColumn>
    </Div>
  )
}

export default ProjectIntro