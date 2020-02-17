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

function IQSolns() {
  return (
    <GlobalWrapper>
      <Helmet>
        <style>{'body { background-color: white; color: black; } h1, h2 {font-weight: 700} h1, h2, h3, h4 { color: black; } #foo {background-color: black} #white {color: white; background-color: black;}'}</style>
      </Helmet>
      <Header title="IQ Solutions" />
      <CoverImage src={CoverSrc} focusX={'35%'} focusY={'50%'} />
      <Section>
        <ContentWrapper>
          <h2>Information Resource Center Modernization</h2>
          <h4>Contextual Interviews and User Research</h4>

          <p>
            IQ Solutions is a full-service firm that specializes in public health
            communications and health information technology, with a dedication
            towards improving the quality of life for underserved communities. IQ
            Solutions have successfully established a strong foundation in this
            domain, combining their 25-years of expertise with technical know-how.
            One of their primary functions is facilitating live, person-to-person
            assistance, in both English and Spanish on behalf of the National
            Institutes of Health (NIH) through their custom-built Information
            Resource Center (IRC) platform.
          </p>
          <p>
            IQ believes that the existing Information Resource Center (IRC) platform
            no longer meets their needs and is planning to transition towards a
            commercially available Software as a Service (SaaS) that fills the shoes
            of the current system and adds extra functionality in order to increase
            task efficiency. IQ’s employees primarily communicate with individuals
            who are suffering from an illness/disease looking for resources,
            clinicians or "intermediaries," and researchers. With this objective, IQ
            seeks to improve the user experience for their employees, especially the
            Contact Center team, so that IQ employees can focus on more intricate
            efforts.
          </p>
          <p>
            The goal of the INST 710 research team was to assess business needs and
            individual requirements, model a modern IRC solution, and potentially
            provide a roadmap with recommendations on a new platform. Our study is
            based on qualitative methods as they are much better suited for answering
            questions about why or how to fix a problem. Our research involved
            understanding the current state of the system by identifying the issues,
            the way it is used and the impact it has on employees at IQ Solutions.
            The following questions were explored by our research team:
          </p>
          <ul>
            <li>How can IQ’s inquiry system for phone, email and chat communication be streamlined?</li>
            <li>How can the new IRC system and privacy regulations be appropriately interwoven?</li>
            <li>How do the employees use the system?</li>
            <li>How does the current system hinder or slow down the call process?</li>
            <li>What tasks can be achieved using the current system?</li>
            <li>How does the system affect the call center employees’ ability of empathy?</li>
          </ul>
          <p>
            Due to the time constraints and scope of IQ’s requirements request, the
            team did not investigate how external audiences (patients, clinicians,
            etc.) will be interacting with the IRC and its various functions. The
            primary focus was on internal use cases and scenarios to improve the
            tasks of IQ’s employees. We also did not carry out any comparative
            analysis between different existing products that IQ may choose from.
          </p>
          <h2>Background</h2>          
          <p>
            The Contact Center team communicates daily with an audience that includes:
            1. Customers (60%) requesting links to resources related to a disease that
            they or their close ones are suffering from, 2. Clinicians (15-20%) who
            call to place orders for a large quantity of medical research publications,
            3. The remaining audience comprises of researchers, sometimes even students,
            looking for very specific information – researchers often contact requesting
            resources and grants. 
          </p>
          <p>
            The major platforms used to accept these inquiries are through phone calls
            and emails. Employees at the call centers must then appropriately handle
            each request by knowing where to look for the information that is being
            requested by the customer, copy-pasting and sending links to resources via
            email, or reading them out over the phone. According to our client, this
            process is unsatisfactory and has the potential of hindering the empathetic
            nature required by the call center team. 
          </p>
          <p>
            IQ Solutions also manages warehouses for their clients and uses a management
            system that keeps track of pamphlets, booklets and exhibit materials in stock
            at the warehouse. This system should ideally work in conjunction with the IRC.
          </p>
          <p>
            Their long-term goal is to modernize their IRC platform to support existing
            and emerging consumer touchpoints, and future considerations like implementing
            self-service solutions, embedded machine learning for creating an omnichannel
            experience. But first and foremost, the new platform must improve the inquiry
            response user experience and at the same time expand data collection, build a
            knowledge base (KB), and offer good API connectivity.
          </p>
          <p>
            The stakeholders for this project include:
          </p>
          <ul>
            <li>Call center employees</li>
            <li>Call center managers</li>
            <li>Partnering government institutions</li>
            <li>Customers</li>
            <li>Warehouse employees</li>
          </ul>
          <h2>Methods and Outcomes</h2>
          <h3>Overall Study Design</h3>
          <p>
            We conducted contextual interviews with the IQ Solutions Call Center and warehouse employees to learn about user requirements and come up with affinity diagrams and subsequently help us build the sequence and collaboration model.
          </p>
          <h3>Participant Summary</h3>
          <p>
            We interviewed a total of seven (7) IQ employees. Five (5) work at IQ’s main headquarters in the Call Center - two (2) employees were Information Specialists (IS) and three (3) were Managers. Information Specialists complete inquiry forms based on the stakeholders who contact IQ for a variety of purposes through the phone, email, letters, or social media. Managers work with the ISs and warehouse to review, validate and approve publication orders, work directly with clients and warehouse for exhibit items, and collaborate with varying IQ teams to implement best practices. Managers occasionally take on the role of an Information Specialist when necessary.
          </p>
          <p>
            The remaining two (2) employees work at IQ’s warehouse. One (1) is the primary Manager who oversees publication and exhibit requests, distributes pick slips to contractors for packaging, verifies and validates orders, and assists with quality check. The second warehouse employee is a recent hire who works on two contracts - FDA and NCI - and completes quality checks on exhibit items, oversees new shipments and works with vendors to negotiate shipping costs.
          </p>
          <h3>Contextual Inquiry</h3>
          <p>
            Each interview lasted 45-60 minutes, with the interviewer asking the employees to sit with the system, and at the same time observe them go through their daily tasks. We probed the user based upon their actions or decisions. This helped us fully understand the requirements of the system, the various user tasks, and any other obstacles not made apparent in the initial meetings.
          </p>
          <p>
            An interpretation session was held after each round of interviews. We interpreted our data from the interviews, made notes that were then used in the development of the affinity diagram and the experience models.
          </p>
          <h3>Restrictions</h3>
          <p>
            We were fully aware of the restrictions that are in place due to certain privacy and confidentiality regulations, specifically HIPAA and FERPA. It was also recommended to us to not interrupt the Contact Center team employees at work as much as possible.
          </p>
          <h3>Final outcomes and deliverables</h3>
          <p>
            After the conclusion of the contextual interviews, we put together an affinity diagram from the data that was captured and interpreted. Using the affinity diagram as a reference, we also composed two different Experience Models.
          </p>
          <h4>1. Affinity Diagram</h4>
          <p>
            This diagram acts as a collection of all raw data (yellow notes) gathered during the contextual interviews. The yellow notes are broken down into various categorical levels by grouping similar actions and “I” statements together. The green notes at the top of the diagram tell the “big picture” story so that those who didn’t participate in a contextual interview or interpretation session can easily latch onto the project and make meaningful contributions. The green notes also encompass the blue and pink categories beneath them.
          </p>
          <p>
            The purpose of the Affinity Diagram is to make sense of all data collected and display it in a way that is collaborative, fluid and is the basis for the experience models which will illustrate the findings in a more cohesive manner.
          </p>
          <h4>2. Experience Models</h4>
          <p>
            The experience models provide a context for the user’s perception of how an ideal system works.
          </p>
          <h5>A. Sequence Model</h5>
          <p>
            The Sequence model attempts to capture users’ actions while doing a task. It helps define the scenarios in which the product will be used.
          </p>
          <p>
            The Sequence Model for IQ has been broken down into two main segments or “workflows.” The first detailing the process of setting up for work, completing an inquiry and interacting with the system to provide resolutions for the inquirers’ requests. The second details the process of receiving orders for publications or exhibit items that must be shipped out to the stakeholders from the warehouse.
          </p>
          <h5>B. Collaboration Model</h5>
          <p>
            This model will demonstrate the collaboration between various entities (i.e. call center employees, warehouse employees, managers). This model will reveal how the people in the user’s world communicate and coordinate tasks within an ideal IRC system.
          </p>
          <h2>Issues</h2>
          <h3>Challenge 1: Lack of necessary automation</h3>
          <ul>
            <li>Information specialists must validate address when submitting publication orders</li>
            <li>Creating reports requires IT support and/or third-party software (i.e. MS Excel)</li>
            <li>Search function is case and hyphen sensitive</li>
          </ul>
          <h3>Challenge 2: Excess complexities in Knowledge Management System</h3>
          <ul>
            <li>Too many fields within inquiry forms</li>
            <li>"Save and Continue" button doesn't save data already entered</li>
            <li>Switching between contracts is tedious</li>
            <li>Multiple VPNs cause issues when working from home</li>
          </ul>
          <h3>Challenge 3: Inconsistent Warehouse Data</h3>
          <ul>
            <li>Missing quality check system for exhibit items</li>
            <li>Absence of real-time inventory numbers</li>
            <li>Warehouse manager is a single point of failure</li>
          </ul>
          <br/>
          <h2>Hot Ideas</h2>
          <h3>Solution 1: Make automation a top priority</h3>
          <ul>
            <li>Incorporate machine learning/chatbot that can begin searching for resources based on inquirer conversation/text&nbsp;</li>
            <li>When an information specialist is on the phone, redirect chats to the next available information specialist, and vice versa</li>
            <li>Implement a fuzzy search function to find relevant resources/pubs</li>
            <li>System that can track the current system being used and the actions being completed</li>
          </ul>
          <h3>Solution 2: Reduce system complexity</h3>
          <ul>
            <li>Centralized system to avoid VPN and reliance on third party software issues</li>
            <li>Omit drop-down menus and use design variations to distinguish contracts</li>
            <li>Centralized system with built-in search engine for pubs</li>
          </ul>
          <h3>Solution 3: Make warehouse data more accessible</h3>
          <ul>
            <li>Hand-held devices for mapping, receiving pick-slips, reporting, and quality check tasks</li>
            <li>New relational barcode system for tracking and storing exhibit items</li>
            <li>Dynamic inventory system where warehouse employees can check-in/out pubs and exhibit items</li>
          </ul>
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

export default IQSolns
