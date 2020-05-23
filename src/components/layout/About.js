import React from "react"
import styled from "styled-components"
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

const About = ({ toggleScrollUp }) => {
  return (
    <SectionContainer centerText id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionDescription>
        Let me <Bold>introduce myself</Bold>
      </SectionDescription>
      <AboutText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto
        atque inventore eaque rem incidunt quam minima est accusamus nesciunt
        vel itaque molestias, mollitia adipisci ipsam voluptas unde, blanditiis
        harum neque amet ea? Cupiditate repellendus fugit, soluta non fuga
        laudantium ut pariatur similique voluptates laboriosam accusantium eos
        accusamus explicabo reprehenderit?
      </AboutText>
      <SectionDescription>
        My current stack of <Bold>languages/technologies</Bold> include:
      </SectionDescription>
      <Stack>
        HTML5, CSS3, JAVASCRIPT, SASS, REACT, CONTEXT API, CSS MODULES, STYLED
        COMPONENTS, GATSBY, GRAPHQL, NPM, PYTHON, FLASK
      </Stack>
      <ResumeContainer>
        <a href={resume} target="_blank" rel="noreferrer">
          <Button main>Resume</Button>
        </a>
      </ResumeContainer>
    </SectionContainer>
  )
}

export default About
