import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"

// Components
import NavLogo from "../UI/NavLogo"

const StyledNav = styled(animated.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  min-height: 80px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 20px rgba(98, 98, 98, 0.2);
  z-index: 100;
`

const NavContainer = styled.div`
  height: 100%;
  max-width: 1250px;
  margin: auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UL = styled(animated.ul)`
  display: flex;

  li {
    padding: 0 30px;
  }

  a {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.2s;
    border: 3px solid transparent;

    &:hover {
      color: var(--main);
    }
  }
`

const DesktopNavbar = () => {
  const NavBarSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    height: 80,
    opacity: 1,
    from: {
      opacity: 0,
      height: -100,
    },
  })

  const ULSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(30px)",
    },
  })

  return (
    <StyledNav style={NavBarSpring}>
      <NavContainer>
        <NavLogo />
        <UL style={ULSpring}>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </UL>
      </NavContainer>
    </StyledNav>
  )
}

export default DesktopNavbar
