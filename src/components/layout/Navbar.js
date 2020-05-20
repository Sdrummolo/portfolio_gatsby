import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Components
import NavLogo from "../UI/NavLogo"
import Burger from "./Burger"
import RightNav from "./RightNav"

const NavBar = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 20px rgba(98, 98, 98, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index: 100;

  .container {
    max-width: 1364px;
    margin: auto;
    height: 80px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenBurger = () => setIsOpen(isOpen => !isOpen)

  return (
    <NavBar>
      <div className="container" isOpen={isOpen}>
        <Link to="/">
          <NavLogo />
        </Link>
        <Burger handleOpenBurger={handleOpenBurger} isOpen={isOpen} />
        <RightNav isOpen={isOpen} />
      </div>
    </NavBar>
  )
}

export default Navbar
