import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/dp_lighblue_textright_sm.png"

const StyledLogo = styled.img`
  z-index: 100;
  max-width: 8rem;

  @media (max-width: 768px) {
    max-width: 5rem;
  }
`

const NavLogo = () => {
  return (
    <Link to="#header">
      <StyledLogo src={logo} />
    </Link>
  )
}

export default NavLogo
