import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

const H2 = styled.h2`
  border-top: 2px solid #636e72;
  display: inline-block;
  font-family: IBMPlexMono;
  font-size: ${fontSize.f5};
  color: #636e72;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 6px 0 0 0;
  padding: 16px 0 0 0;
  line-height: 1.1;
  ${media.lg`
    font-size: ${fontSize.f4};
    padding: 12px 0 0 0;
    margin: 2px 0 0 0;
  `}
  ${media.md`
      border-top: none;
      margin-bottom: 72px;
      padding-bottom: 12px;
      border-bottom: 2px solid #636e72;
    `}
  ${media.sm`
      margin-bottom: 60px;
      padding-bottom: 8px;
    `}
`

const SectionHeading = props => {
  return <H2>{props.children}</H2>
}

export default SectionHeading
