import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useSpring, animated, config } from "react-spring"

// Components
import NavLogoMobile from "../UI/NavLogoMobile"
import BurgerMenu from "../UI/BurgerMenu"
import MobileUL from "../layout/MobileUL"

const StyledNav = styled(animated.nav)`
  position: fixed;
  top: 0;
  left: 0;
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
  position: relative;
`

const MobileNavbar = ({ isOpen, toggleOpen }) => {
  const MobileNavSpring = useSpring({
    config: config.wobbly,
    height: 60,
    opacity: 1,
    from: {
      height: 0,
      opacity: 0,
    },
  })

  return (
    <StyledNav style={MobileNavSpring}>
      <NavContainer>
        <NavLogoMobile />
        <BurgerMenu toggleOpen={toggleOpen} isOpen={isOpen} />
        {isOpen ? <MobileUL toggleOpen={toggleOpen} /> : null}
      </NavContainer>
    </StyledNav>
  )
}

MobileNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
}

export default MobileNavbar
