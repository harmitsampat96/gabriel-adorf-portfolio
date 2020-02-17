import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color } from 'styles/theme'

import Header from 'components/header'
import Icon from 'components/icons'

import HSLogo from 'img/brand_lt.svg'

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${props => (props.article ? '64px' : '')};
  `}
  ${media.sm`
    display: ${props => (props.article ? 'flex' : 'none')};
  `};
  z-index: 10;
  height: ${props => (props.article ? '112px' : '')};
  ${media.xs`
    display: none;
    height: 112px;
  `}
`

const TitleBar_sm = styled.div`
  display: none;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
    display: none;
    height: ${props => (props.article ? '64px' : '')};
  `}
  ${media.sm`
    display: ${props => (props.article ? 'none' : 'block')};
  `};
  z-index: 10;
  height: ${props => (props.article ? '112px' : '')};
  ${media.xs`
    display: block;
  `}
`

const BackArrow = styled(Link)`
  float: left;
  padding: 20px 0px;
  position: relative;
  transform: rotate(90deg);
  max-width: 64px;
  max-height: 64px;
  color: ${color.grey900};
  
  &:visited {
    color: ${color.grey900};
  }
  &:hover {
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
`

const Title = styled.div`
  padding: 5px 20px;
  text-align: center;
  float: left;
  font-weight: 400;
`

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${props => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

export const SvgWrapper = styled.div`
  float: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

function ArticleHeader(props) {
  return (
    <Fragment>
      
      <TitleBar>
        <LogoWrapper>
          <SvgWrapper href="/">
            <a href="/"><img src={HSLogo} height="88px" alt="Logo" /></a>
          </SvgWrapper>
          <Title>
            <h2> • {props.title}</h2>
          </Title>
        </LogoWrapper>
      </TitleBar>
      <TitleBar_sm id="foo">
        <BackArrow to="/#projects">
          <Icon glyph="arrow" size={32} />
        </BackArrow>
        <Title>
          <h2 id="white">{props.title}</h2>
        </Title>
      </TitleBar_sm>

    </Fragment>
  )
}

export default ArticleHeader
