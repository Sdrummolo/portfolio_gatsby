import React from "react"

// Components
import SectionContainer from "../UI/SectionContainer"
import SectionTitle from "../UI/SectionTitle"
import SectionDescription from "../UI/SectionDescription"
import Bold from "../UI/Bold"

const Portfolio = () => {
  return (
    <SectionContainer centerText>
      <SectionTitle>Portfolio</SectionTitle>
      <SectionDescription>
        Some of my <Bold>recent work</Bold>
      </SectionDescription>
    </SectionContainer>
  )
}

export default Portfolio
