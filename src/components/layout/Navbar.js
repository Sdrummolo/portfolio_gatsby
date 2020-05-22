import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

// Components
import NavLogo from "../UI/NavLogo"
import Burger from "./Burger"
import RightNav from "./RightNav"

const NavBar = styled(animated.nav)`
  background-color: ${({ isMenuOpen }) =>
    isMenuOpen ? "white" : "rgba(255, 255, 255, 0.9)"};
  box-shadow: 0 5px 20px rgba(98, 98, 98, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index: 100;

  .container {
    position: relative;
    max-width: 1364px;
    margin: auto;
    height: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Navbar = ({ handleOpenMenu, isMenuOpen }) => {
  const NavbarSping = useSpring({
    config: config.wobbly,
    height: "60px",
    from: { height: "110px" },
  })

  return (
    <NavBar isMenuOpen={isMenuOpen} style={NavbarSping}>
      <div className="container">
        <NavLogo />
        <Burger handleOpenMenu={handleOpenMenu} isMenuOpen={isMenuOpen} />
        <RightNav isMenuOpen={isMenuOpen} handleOpenMenu={handleOpenMenu} />
      </div>
    </NavBar>
  )
}

export default Navbar
