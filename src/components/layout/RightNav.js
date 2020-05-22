import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const UL = styled.ul`
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
  return (
    <UL isMenuOpen={isMenuOpen}>
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
