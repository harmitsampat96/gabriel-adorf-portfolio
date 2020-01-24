import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import Header from 'components/header'
// import Spirograph from 'components/spirograph'

import Section from 'components/section'

import { fontSize } from 'styles/theme'
import { color } from 'styles/theme'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  width: 100%;
  ${media.sm`
    height: calc(150vh - 76px);
  `}
`

const HeroText = styled.div`
  text-align: left;
  font-size: ${fontSize.f10};
  color: ${color.grey900};
  font-weight: normal;
  letter-spacing: -0.4px;
  line-height: 1.20;
  ${media.lg`
    font-size: ${fontSize.f9};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f8};
  `}
`

const Big = styled.span`
  font-face: IBMPlexSans;
  font-size: ${fontSize.f12};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.00;
  ${media.lg`
    font-size: ${fontSize.f11};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f10};
  `}
`

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 0;
  ${media.sm`
    padding: ${props => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: left;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${color.red500};
  border-radius: 20px;
  color: #000;
  border: 1px solid ${color.red500};
  &:hover {
    border: 1px solid ${color.red500};
    background: ${color.red500};
    color: ${color.ltblue500};
  }
  &:active {
    color: ${color.ltblue500};
  }
  &:visited {
    color: #000;
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const De = styled.span`
  font-family: IBMPlexSerif;
`

const Co = styled.span`
  font-family: IBMPlexMono;
`

const Spacer = styled.div`
  flex: 1 1 0;
`

// const GearValues = styled.div`
//   display: flex;
//   justify-content: center;
//   z-index: 10;
//   text-align: center;
//   align-items: flex-end;
//   padding-bottom: 48px;
// `

class Hero extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     gearA: 0,
  //     gearB: 0,
  //     ratio: 0,
  //   }
  // }

  // getGearValues = (gearA, gearB, ratio) => {
  //   this.setState({
  //     gearA: gearA,
  //     gearB: gearB,
  //     ratio: ratio,
  //   })
  // }

  render() {
    return (
      <HeroSection>
        
        <Header />
        <Section>
          <HeroText>
            <Big>Hi! I'm Harmit</Big><br/> a Human-Computer Interaction student with a focus on UX Design & Research. I <De>design</De> and <Co>code</Co> digital solutions that are useful and elegant.
          </HeroText>
            <SocialLinks article={this.props.article}>
              <SocialLink
                href="https://github.com/harmitsampat96"
                target="blank"
              >
                <SvgWrapper>
                  <InlineSvg>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </InlineSvg>
                </SvgWrapper>
              </SocialLink>
              <SocialLink
                href="https://www.behance.net/harmit"
                target="blank"
              >
                <SvgWrapper>
                  <InlineSvg>
                    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.4.44.586.75 1.26.94 2.02.19.75.25 1.54.21 2.38h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.592-1.657-.592-.468 0-.855.074-1.166.238-.302.15-.55.35-.74.59-.19.24-.317.48-.392.75-.075.26-.12.5-.135.71h4.762c-.07-.75-.33-1.3-.68-1.69v.01zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"/>
                  </InlineSvg>
                </SvgWrapper>
              </SocialLink>
            </SocialLinks>
        </Section>
        {/* <GearValues>
          {this.state.gearA} | {this.state.gearB} | {this.state.ratio}
        </GearValues> */}
      </HeroSection>
    )
  }
}

export default Hero
