import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"

// Components
import NavLogoMobile from "../UI/NavLogoMobile"
import BurgerMenu from "../UI/BurgerMenu"

const StyledNav = styled(animated.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  min-height: 60px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 20px rgba(98, 98, 98, 0.2);
  z-index: 100;
`

const NavContainer = styled.div`
  height: 100%;
  margin: auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MobileNavbar = () => {
  return (
    <StyledNav>
      <NavContainer>
        <NavLogoMobile />
        <BurgerMenu />
      </NavContainer>
    </StyledNav>
  )
}

export default MobileNavbar
