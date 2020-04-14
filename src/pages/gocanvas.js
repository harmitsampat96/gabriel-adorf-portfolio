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

function GoCanvas() {
  return (
    <GlobalWrapper>
      <Helmet>
        <style>{'body { background-color: white; color: black; } h1, h2 {font-weight: 700} h1, h2, h3, h4 { color: black; } #foo {background-color: black} #white {color: white; background-color: black;}'}</style>
      </Helmet>
      <Header title="GoCanvas" />
      
      <Section>
        
        <ProjectIntro
          
          leftColumn={
            <img src={gcmockup} margin-top="48px" width="100%"/>
          }
          rightColumn={
            <Fragment>
              <h2>GoCanvas</h2>
              <h3>Workflow and Dispatch</h3>
              <p>GoCanvas is a SaaS company - building software for digital forms on mobile devices. GoCanvas is used extensively when collecting information for those users who are away from a computer. Settings and organizations include warehouses, construction sites, health practitioners, utilities and inspections, and hospitality, to name a few.</p>
              <p>Working with GoCanvas as a student consultant, my team focused on the usability of the Workflow and Dispatch feature. Workflow and Dispatch is a web portal that allows a user (someone internal e.g. management in an office setting) to send (or rather dispatch) a form to an external user (e.g. a technician in the field). Essentially, the internal management partially completes the form, sending it over to the technician to complete the form based on his/her work in the field.</p>
            </Fragment>
          }
        />
       
        <TextGrid>
          <ContentWrapper>
          <h3>Background</h3>
          <hr/><br/>
          <TwoColumnsNew
            
            leftColumn={
              <Fragment>
                <h4>Duration: </h4>
                <p>August - December 2019</p>
                <h4>Role: </h4>
                <p>User Researcher, Prototyper and User Experience Designer</p>
              </Fragment>
            }
            rightColumn={
              <Fragment>
                <h4>Team:</h4>
                <p>Interaction Designers</p>
                <h4>Tools:</h4>
                <p>Google Docs, Google Slides, Slack, Sketch, Figma, Pen and Paper</p>
              </Fragment>
            }
          />
          </ContentWrapper>
        </TextGrid>
        <ContentWrapper>
        <br/>
        <h2>Current Challenges and Design Scope</h2>
        <p>There are two primary users of the Workflow and Dispatch platform:&nbsp;</p>
        <ol>
            <li>Individuals who need to assign (dispatch) tasks (e.g. management in an office setting)</li>
            <li>Individuals who need to finish the tasks (e.g. a technician in the field)</li>
        </ol>
        <br/>
        <h3>Challenges:</h3>
        <p>We conducted a preliminary review of the platform individually, then conducted a stakeholder interview with the client, the lead User Researcher of GoCanvas to gather known challenges:</p>
        <ul>
            <li>
                <h4>Display and visibility of Information</h4>
                <ul>
                    <li>Is the format and description of information both usable for its intended user and easily accessible to locate?</li>
                    <li>Is the schedule feature visible to users and does it supersede the immediate dispatch option?</li>
                </ul>
            </li>
            <li>
                <h4>Differentiating between users</h4>
                <ul>
                    <li>Is it easy for users to understand which fields to populate versus forwarding for completion?</li>
                </ul>
            </li>
        </ul>
        <br/>
        <h3>Design Goals:</h3>
        <ol>
            <li>How might we improve the form fields&rsquo; cadence and hierarchy in order to avoid discrepancy and decrease error rate?</li>
            <li>How might we improve GoCanvas Workflow and Dispatch&rsquo;s user flow in order to adhere to best practices of navigation of a mobile application?</li>
        </ol>
        <br/>
        <h2>Recruitment and Participants </h2>
        <p>We recruited users based on guidance by the client - convenience sampling: those who identified as users who were between the ages of 21-50, were technology proficient and assign tasks in their daily roles and responsibilities. Our team sent an email to our academic listerv.&nbsp;</p>
        <p>Using a test environment of GoCanvas, we completed usability testing with a total of five participants.&nbsp;</p>
        <br/>
        <h2>Usability Testing</h2>
        <p>A total of two usability tests were conducted - 1st with current interface in testing environment and 2nd with improved interface in Figma.</p>
        <p>Test 1 was conducted using time performance method, whereas Test 2 was conducted using think-aloud method. There were five users per usability test.</p>
        </ContentWrapper>
        <TextGrid>
          <ContentWrapper>
          <TwoColumnsNew
            
            leftColumn={
              <Fragment>
                <b>Scenario I:</b>
                <hr/>
                <p><i>Imagine that you&rsquo;re a Stock Manager at Lidl, and you have to record your work hours every week. Imagine that today is Friday, November 15th, and you need to submit your work hours for Monday through Thursday of the current week. Create a dispatch timecard, assigning to your supervisor Suzanne Lawing, and enter the following hours.</i></p>
              </Fragment>
            }
            rightColumn={
              <Fragment>
                <b>Scenario II:</b>
                <hr/>
                <p><i>As a Stock Manager, you are responsible for inventory at Lidl. Your primary role is to organize and store incoming and outgoing inventory, specifically for online grocery orders. Under your supervision, you have three employees who check-out inventory for customer orders. In order to fulfill an online grocery order, you must first complete a dispatch form and send to one of your subordinates who&rsquo;s on the floor of the grocery store today. The dispatch form will notify Michael Alston, the Stock Lead who&rsquo;s working today, which inventory to choose from in order to complete the online orders. Use the following tasks to help submit the inventory checkout dispatch form and submit to Michael.</i></p>
              </Fragment>
            }
          />
          </ContentWrapper>
        </TextGrid>
        <ContentWrapper>
        <h2>Task Results</h2>
        <p>The tables below displays a summary of the usability test data. Items highlighted in red indicate low completion rates, high error rates and significant time on task.</p>
        
        </ContentWrapper>
        <TwoImage
          src1={table01}
          alt1="Scenario 1 results"
          src2={table02}
          alt2="Scenario 2 results"
        />
        <ContentWrapper>
        <br />
        <h2>Current Interface</h2>
        </ContentWrapper>
        <LargeImage src={slide01} />
        <ContentWrapper>
        <br />
        <h4>Limited Filtering</h4><p>User can only filter by ‘Creation Date’ and ‘Completion Date’</p>
        </ContentWrapper>
        <LargeImage src={slide02} />
        <ContentWrapper>
        <br />
        <h4>No Preview</h4><p>There’s no description or preview of what the selected App entails</p>
        </ContentWrapper>
        <LargeImage src={slide03} />
        <ContentWrapper>
        <br />
        <h4>Mismatched User Flow</h4><p>The information flow appears out of order and the terminology is both misleading and too technical</p>
        </ContentWrapper>
        <LargeImage src={slide04} />
        <ContentWrapper>
        <br />
        <h4>Limited Customization</h4><p>There’s little to no customization for scheduled reminders. Calendar view isn’t accessible from dispatch interface</p>
        </ContentWrapper>
        <LargeImage src={slide05} />
        <ContentWrapper>
        <br />
        <h4>Ambiguous Summary</h4><p>The summary view lacks details; there’s no clear indication of which fields are “to be completed” for external user. The “updated” notification leads with ambiguous terminology whether or not dispatch was successfully saved</p>

        </ContentWrapper>
        <ImageGrid>
          <Img src={sketch01} />
          <Img src={sketch03} />
          <Img src={sketch05} />
          <Img src={sketch04} />
          <Img src={sketch06} />
          <Img src={sketch07} />
          <Img src={sketch02} />
          <p>Low-fidelity prototyping: sketching out ideas for timesheet and progress bar views</p>
        </ImageGrid>
        <ContentWrapper>
        <br />
        <h2>Recommended Interface</h2>
        </ContentWrapper>
        <LargeImage src={onboarding} />
        <ContentWrapper>
        <br />
        <h4>Onboarding</h4><p>Tutorial to introduce the user what views and customization are available</p>
        </ContentWrapper>
        <LargeImage src={homepage} />
        <ContentWrapper>
        <br />
        <h4>User flow to Dashboard</h4><p>Ability to filter any column and mark an App as important/favorite</p>
        </ContentWrapper>
        <LargeImage src={timecard} />
        <ContentWrapper>
        <br />
        <h4>Enhanced Timesheet</h4><p>Clear and detailed sections of “Work Hours” and updated hierarchy of importance</p>
        </ContentWrapper>
        <LargeImage src={summary} />
        <ContentWrapper>
        <br />
        <h4>Customized Summary</h4><p>Ability to customize which fields can be edited for “hand-off: to dispatch assignee for clear indication of which user populates which field</p>
        <br />
        <h2>Final Recommendations</h2>
        <ul>
            <li>Update terminology as to not overwhelm the user with technical language</li>
            <li>Develop a more comprehensive tutorial for onboarding experience&nbsp;</li>
            <li>When applicable, emphasize separation of what&rsquo;s being completed by User 1 versus what needs to be completed by User 2&nbsp;</li>
            <li>Provide summary detail page</li>
            <li>Capability of customizing forms within the dispatch interface e.g. marking as important</li>
        </ul>
        </ContentWrapper>
        <ImageGrid>
        <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FATCJXrVQOpN2xYPeVi6GtT%2FFinal-Interfaces%3Fnode-id%3D90%253A1091%26viewport%3D1907%252C370%252C0.338676780462265%26scaling%3Dscale-down-width" width="640" height="480"></iframe>
        <p>Figma Prototype</p>
        </ImageGrid>
        <ContentWrapper>
        <h2>Reflection</h2>
        <ul>
            <li>KISS plays an important factor in UI/UX design, especially for user flows that are universal such as a timecard application</li>
            <li>Scope creep should be acknowledged, noted for future considerations and move back towards original priorities/design goals</li>
            <li>Pilot testing is critical to improve/finalize user tasks</li>
            <li>We stayed with the client&rsquo;s original style guide but users sought additional aesthetic such as adding more color; we could explore an updated design strategy for future considerations</li>
        </ul>
        </ContentWrapper>
        <ImageGrid>
        <iframe src="https://drive.google.com/file/d/1VKIxKIUchkGk_rlK30TN4sS_xN1FwF7r/preview" width="852" height="480"></iframe>
        <p>Slide Deck</p>
        </ImageGrid>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default GoCanvas