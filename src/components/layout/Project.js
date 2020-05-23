import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useSpring, animated, config } from "react-spring"
import Button from "../UI/Button"

// Components
const Title = styled.h2`
  font-size: 1rem;
  color: var(--main);
  text-transform: uppercase;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 30px;
  display: inline-block;
`

const ProjectContainer = styled(animated.div)`
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FlexItem = styled.div`
  width: 50%;
  padding: 1rem;
  text-align: start;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  p {
    font-size: 1rem;
    line-height: 1.4rem;
  }

  small {
    text-transform: uppercase;
    color: var(--main);
    font-weight: 700;
    font-size: 0.8rem;
  }
`

const StyledImg = styled(Img)`
  min-width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`

const ButtonsContainer = styled.div`
  font-size: 0.7rem;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`

const Project = ({ data, index }) => {
  const ProjectSpring = useSpring({
    config: config.default,
    opacity: 1,
    transform: "translateX(0px)",
    from: {
      opacity: 0,
      transform: index % 2 === 0 ? "translateX(300px)" : "translateX(-300px)",
    },
  })

  const {
    title,
    description,
    technologies,
    siteUrl,
    repoUrl,
    image,
  } = data.node

  return (
    <animated.div style={ProjectSpring}>
      <Title>{title}</Title>
      <ProjectContainer index={index}>
        <FlexItem>
          <StyledImg fluid={image.childImageSharp.fluid} />
        </FlexItem>
        <FlexItem>
          <p>{description}</p>
          <small>{technologies}</small>
          <ButtonsContainer>
            <a href={siteUrl} target="_blank" rel="noreferrer">
              <Button main marginRight>
                Live Site
              </Button>
            </a>
            <a href={repoUrl} target="_blank" rel="noreferrer">
              <Button white>Repo</Button>
            </a>
          </ButtonsContainer>
        </FlexItem>
      </ProjectContainer>
    </animated.div>
  )
}

export default Project
