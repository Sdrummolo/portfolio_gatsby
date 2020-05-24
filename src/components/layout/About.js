import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import resume from "../../content/static/resume.pdf"

// Components
import SectionContainer from "../UI/SectionContainer"
import SectionTitle from "../UI/SectionTitle"
import SectionDescription from "../UI/SectionDescription"
import Bold from "../UI/Bold"
import Button from "../UI/Button"

const AboutText = styled.p`
  margin: 2.5rem 0;
  line-height: 2rem;
`
const Stack = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--main);
  margin-bottom: 35px;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    margin-top: -15px;
    margin-bottom: 20px;
    font-size: 0.9rem;
  }
`
const ResumeContainer = styled.div`
  font-size: 0.8rem;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutJson {
        text
        stack
      }
    }
  `)

  const { text, stack } = data.aboutJson

  return (
    <SectionContainer centerText id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionDescription>
        Let me <Bold>introduce myself</Bold>
      </SectionDescription>
      <AboutText>{text}</AboutText>
      <SectionDescription>
        My current stack of <Bold>languages/technologies</Bold> include:
      </SectionDescription>
      <Stack>{stack}</Stack>
      <ResumeContainer
        onClick={() => {
          trackCustomEvent({
            category: "Viewed resume",
            action: "click",
            label: "Resume button",
          })
        }}
      >
        <a href={resume} target="_blank" rel="noreferrer">
          <Button main>Resume</Button>
        </a>
      </ResumeContainer>
    </SectionContainer>
  )
}

export default About
