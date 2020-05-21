import React from "react"
import styled from "styled-components"
import logo from "../../images/dp_lighblue_textright_sm.png"

const StyledLogo = styled.img`
  position: fixed;
  top: 15px;
  max-height: 50px;
  z-index: 200;

  @media (max-width: 768px) {
    max-height: 40px;
    top: 10px;
  }
`

const NavLogo = () => {
  return <StyledLogo src={logo} alt="Di Paolo Web Developer" />
}

export default NavLogo
