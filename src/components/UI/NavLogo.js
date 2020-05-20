import React from "react"
import styled from "styled-components"
import logo from "../../images/dp_lighblue_textright_sm.png"

const StyledLogo = styled.img`
  max-width: 155px;
`

const NavLogo = () => {
  return <StyledLogo src={logo} alt="Di Paolo Web Developer" />
}

export default NavLogo
