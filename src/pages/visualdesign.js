import React, { Fragment } from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import TwoColumnsNew from 'components/twoColumnsNew'
import ProjectIntro from 'components/projectIntro'

import { color, fontSize } from 'styles/theme'
import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import FullSizeImage from 'components/article/fullsizeimage'
import TwoImage from 'components/article/twoimage'
import LargeImage from 'components/article/largeimage'

import gcmockup from 'img/articles/gocanvas/gocanvas-Macbook-Pro.png'
import table01 from 'img/articles/gocanvas/table1.png'
import table02 from 'img/articles/gocanvas/table2.png'
import sketch01 from 'img/articles/gocanvas/sketches/01.png'
import sketch02 from 'img/articles/gocanvas/sketches/02.png'
import sketch03 from 'img/articles/gocanvas/sketches/03.png'
import sketch04 from 'img/articles/gocanvas/sketches/04.jpg'
import sketch05 from 'img/articles/gocanvas/sketches/05.png'
import sketch06 from 'img/articles/gocanvas/sketches/06.jpg'
import sketch07 from 'img/articles/gocanvas/sketches/07.png'
import slide01 from 'img/articles/gocanvas/current/slide01.png'
import slide02 from 'img/articles/gocanvas/current/slide02.png'
import slide03 from 'img/articles/gocanvas/current/slide03.png'
import slide04 from 'img/articles/gocanvas/current/slide04.png'
import slide05 from 'img/articles/gocanvas/current/slide05.png'
import homepage from 'img/articles/gocanvas/recommended/homepage.png'
import onboarding from 'img/articles/gocanvas/recommended/onboarding.png'
import summary from 'img/articles/gocanvas/recommended/summary.png'
import timecard from 'img/articles/gocanvas/recommended/timecard.png'

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
const iframeContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  ${media.lg`
    max-width: 600px;
  `}
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

const TextGrid = styled.div`
  background: #f2f2f2;
  max-width: 100%;
  padding: 40px;
  margin: 32px 0;
  text-align: left;
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

function VisualDesign() {
  return (
    <GlobalWrapper>
      <Helmet>
        <style>{'body { background-color: white; color: black; } h1, h2 {font-weight: 700} h1, h2, h3, h4 { color: black; } #foo {background-color: black} #white {color: white; background-color: black;} iframe{border: none;}'}</style>
      </Helmet>
      <Header title="Visual Design Studio" />
      
      <Section>
        
        <ProjectIntro
          
          leftColumn={
            <Fragment>
            <iframe width="800" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ffxf5kufjGMHsuc9rlw7m1t%2Fnike_redesign_harmit_final-Copy%3Fnode-id%3D0%253A6255%26viewport%3D396%252C159%252C0.2954770624637604%26scaling%3Dscale-down" allowfullscreen></iframe>
            <center>Figma Prototype: Mobile</center>
            </Fragment>
          }
          rightColumn={
            <Fragment>
              <h4>Studio Project #1</h4>
              <h2>Nike.com Redesign</h2>
              <p>Nike’s mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making theirproducts more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.</p>
              <p>Their purpose is to use the power of sport to move the world forward. Nike believes in a fair, sustainable future—one where everyone thrives on a healthy planet and level playing field.</p>
              <p>Nike was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. Nike’s path to becoming one of the most iconic, profitable and world-changing brands in the world, all from what once used to be considered “a crazy idea,” is an inspirational one and has defined what the company stands for today.</p>
            </Fragment>
          }
        />
        <ImageGrid>
        <TextGrid>
          <ContentWrapper>
          <h3>Overview</h3>
          <hr/><br/>
          <TwoColumnsNew
            
            leftColumn={
              <Fragment>
                <h4>Project Description:</h4>
                <p>Redesigning key pages of Nike.com to deliver an improved responsive website for both Desktop and Mobile experiences</p>
                <h4>Duration: </h4>
                <p>3 weeks</p>
              </Fragment>
            }
            rightColumn={
              <Fragment>
                <h4>Deliverables: </h4>
                <p>Design Strategy, Mood Board and Prototype</p>
                <h4>Tools:</h4>
                <p>Figma, Adobe Photoshop, Pen & paper</p>
              </Fragment>
            }
          />
          </ContentWrapper>
        </TextGrid>
        <iframe width="1280" height="720" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ffxf5kufjGMHsuc9rlw7m1t%2Fnike_redesign_harmit_final-Copy%3Fnode-id%3D0%253A5572%26viewport%3D255%252C448%252C0.2186489999294281%26scaling%3Dscale-down-width" allowfullscreen></iframe>
        <p>Figma Prototype: Desktop</p>
        </ImageGrid>
        <br />
        <ProjectIntro
                  
          leftColumn={
            <Fragment>
            <iframe width="800" height="360" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6KwVVlxffKE3dM4vjGrkgW%2FStudio-Project-2-Apple-watch-prototype-Copy%3Fnode-id%3D4%253A0%26viewport%3D710%252C224%252C0.44839680194854736%26scaling%3Dscale-down" allowfullscreen></iframe>
            <center>Figma Prototype: Apple Watch</center>
            </Fragment>
          }
          rightColumn={
            <Fragment>
              <h4>Studio Project #2</h4>
              <h2>Xbox Design System</h2>
              <p>Evolution & Gaming Without Boundaries—the Xbox we have today isn’t the same product it originally started as. It has evolved from a console for gamers to a living room entertainment device that can serve a much wider audience. With new features and functionality, there is good variety of content offered by the platform.</p>
            </Fragment>
          }
        />
        <ImageGrid>
        <TextGrid>
          <ContentWrapper>
          <h3>Background</h3>
          <hr/><br/>
          <TwoColumnsNew
            
            leftColumn={
              <Fragment>
                <h4>Project Description:</h4>
                <p>Big & Small Design System—experiences that contrast in device size and experience type (ex: TV, Apple Watch, vehicle interfaces, exhibit touchscreens, etc)</p>
                <h4>Duration: </h4>
                <p>4 weeks</p>
              </Fragment>
            }
            rightColumn={
              <Fragment>
                <h4>Deliverables: </h4>
                <p>Design Strategy, Sketches, Mood Board, High-fidelity Mockups & Prototype</p>
                <h4>Tools:</h4>
                <p>Adobe Photoshop, Illustrator, and After Effects, InVision, Figma, Pen & paper</p>
              </Fragment>
            }
          />
          </ContentWrapper>
        </TextGrid>
        <iframe width="1280" height="720" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Frau5kMhlLmrqzXNFNwoM0M%2FStudio-Project-2-main%3Fnode-id%3D93%253A277%26viewport%3D-661%252C-34%252C0.04495549201965332%26scaling%3Dcontain" allowfullscreen></iframe>
        <p>Figma Prototype: TV screen</p>
        </ImageGrid>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default VisualDesign