import React from 'react'
import {Helmet} from 'react-helmet';
import styled from 'styled-components'

import { color, fontSize } from 'styles/theme'
import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import FullSizeImage from 'components/article/fullsizeimage'

import CoverSrc from 'img/articles/iqsolns/iq-cover.jpg'
import IQ01 from 'img/articles/iqsolns/iq_01.jpg'
// import IQ02 from 'img/articles/iqsolns/iq_02.jpg'
import IQ03 from 'img/articles/iqsolns/iq_03.jpg'
import IQ04 from 'img/articles/iqsolns/iq_04.jpg'
import IQ05 from 'img/articles/iqsolns/iq_05.jpg'
import IQ06 from 'img/articles/iqsolns/iq_06.jpg'
// import IQ07 from 'img/articles/iqsolns/iq_07.jpg'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImageGrid = styled.div`
  background: #f2f2f2;
  max-width: 100%;
  padding: 40px;
  margin: 32px 0;
  text-align: center;
  ${media.lg`
    padding: 32px;
    margin: 0 0 24px 0;
  `}
  ${media.md`
    margin: 0;
    margin: 0 0 16px 0;
  `}
  ${media.sm`
    padding: 16px;
  `}
`

const Img = styled.img`
  max-width: calc(100% - 96px);
  max-height: 300px;
  margin: 8px;
  display: inline-block;
  ${media.xl`
    max-height: 240px;
  `}
  ${media.lg`
    max-height: 200px;
  `}
  ${media.md`
    max-height: 120px;
    margin: 4px;
  `}
  ${media.sm`
    max-height: 80px;
    margin: 2px;
  `}
`

function GoCanvas() {
  return (
    <GlobalWrapper>
      <Helmet>
        <style>{'body { background-color: white; color: black; } h1, h2 {font-weight: 700} h1, h2, h3, h4 { color: black; } #foo {background-color: black} #white {color: white; background-color: black;}'}</style>
      </Helmet>
      <Header title="GoCanvas" />
      <CoverImage src={CoverSrc} focusX={'35%'} focusY={'50%'} />
      <Section>
        <ContentWrapper>
        </ContentWrapper>
      </Section>
      <ImageGrid>
        <Img src={IQ01} />
        <Img src={IQ03} />
        <Img src={IQ04} />
        <Img src={IQ05} />
        <Img src={IQ06} />
      </ImageGrid>
      <Footer />
    </GlobalWrapper>
  )
}

export default GoCanvas