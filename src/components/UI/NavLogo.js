import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

const StyledLogo = styled(Img)``

const NavLogo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dp_lighblue_textright_sm.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  const image = data.file.childImageSharp.fixed

  return (
    <Link to="#header">
      <StyledLogo fixed={image}>Navlogo</StyledLogo>
    </Link>
  )
}

export default NavLogo
