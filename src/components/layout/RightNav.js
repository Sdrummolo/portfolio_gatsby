import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

const UL = styled(animated.ul)`
  display: flex;
  flex-flow: row nowrap;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;

  li {
    padding: 0 18px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 15rem;
    background-color: var(--white);
    width: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : 0)};

    li {
      margin: 20px auto;
    }
  }
`

const RightNav = ({ isMenuOpen, handleOpenMenu }) => {
  const NavbarSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
  })

  return (
    <UL isMenuOpen={isMenuOpen} style={NavbarSpring}>
      <li>
        <Link to="#about" onClick={isMenuOpen ? handleOpenMenu : null}>
          About me
        </Link>
      </li>
      <li>
        <Link to="#portfolio" onClick={isMenuOpen ? handleOpenMenu : null}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="#contact" onClick={isMenuOpen ? handleOpenMenu : null}>
          Contact
        </Link>
      </li>
    </UL>
  )
}

export default RightNav
