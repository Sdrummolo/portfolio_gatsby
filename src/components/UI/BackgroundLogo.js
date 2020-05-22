import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  top: -5%;
  overflow: hidden;
  opacity: 0.6;
  right: 0;
  width: 40%;
  transform: rotate(-40deg);
  /* Make it not draggable */
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: 1366px) {
    width: 65%;
    top: -5%;
    right: -5%;
  }

  @media (max-width: 992px) {
    width: 60%;
    top: 0;
  }
  @media (max-width: 768px) {
    width: 65%;
    top: -5%;
  }
  @media (max-width: 576px) {
    width: 75%;
    top: 0;
    right: -15%;
  }
`

const BackgroundLogo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dp_blue_lg.png" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const image = data.file.childImageSharp.fluid

  return (
    <StyledImage
      fluid={image}
      alt="Di Paolo Web Developer logo large"
      style={{ position: "absolute" }}
    />
  )
}

export default BackgroundLogo
