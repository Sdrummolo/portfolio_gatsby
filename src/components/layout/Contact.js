import React from "react"
import styled from "styled-components"
import github from "../../images/github.png"
import logo from "../../images/dp_blue_sm.png"
import linkedin from "../../images/linkedin.png"

// Components
import SectionContainer from "../UI/SectionContainer"
import SectionTitle from "../UI/SectionTitle"
import SectionDescription from "../UI/SectionDescription"
import Bold from "../UI/Bold"

const IconsContainer = styled.div`
  img {
    margin: 35px 20px;
    max-width: 30px;
  }
`

const LogoContainer = styled.div`
  img {
    margin: 50px 0 20px 0;
    max-width: 60px;
  }
`

const Contact = () => {
  return (
    <SectionContainer centerText id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionDescription>
        If you want to <Bold>start a project</Bold> with me, or talk about a
        <Bold>job</Bold>, you can <Bold>find</Bold> me at:
        <br />
        <br />
        <a href="mailto: dipaololuigi95@gmail.com<">
          <Bold>dipaololuigi95@gmail.com</Bold>
        </a>
        <IconsContainer>
          <a
            href="https://github.com/Sdrummolo?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/luigi-di-paolo-9a6306188/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
        </IconsContainer>
        <LogoContainer>
          <img src={logo} alt="Di Paolo Web Developer" />
        </LogoContainer>
      </SectionDescription>
    </SectionContainer>
  )
}

export default Contact
