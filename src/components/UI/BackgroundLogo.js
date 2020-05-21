import React from "react"
import styled from "styled-components"
import logoLarge from "../../images/dp_blue_lg.png"

const StyledLogo = styled.img`
  max-width: 70%;
  max-height: 90vh;
  transform: rotate(-45deg);
  position: absolute;
  top: -50px;
  right: -200px;
  opacity: 0.8;
  z-index: -100;
  /* Make it not draggable */
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: 576px) {
    max-width: 90%;
    top: 0;
  }
`

const BackgroundLogo = () => {
  return <StyledLogo src={logoLarge} alt={"Di Paolo Web Developer Logo"} />
}

export default BackgroundLogo
