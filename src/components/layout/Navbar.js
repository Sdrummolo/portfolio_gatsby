import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Components
import NavLogo from "../UI/NavLogo"
import Burger from "./Burger"
import RightNav from "./RightNav"

const NavBar = styled.nav`
  background-color: ${({ isBurgerOpen }) =>
    isBurgerOpen ? "white" : "rgba(255, 255, 255, 0.9)"};
  box-shadow: 0 5px 20px rgba(98, 98, 98, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index: 100;
  height: 80px;

  .container {
    position: relative;
    max-width: 1364px;
    margin: auto;
    height: 100%;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Navbar = ({ handleOpenBurger, isBurgerOpen }) => {
  return (
    <NavBar isBurgerOpen={isBurgerOpen}>
      <div className="container">
        <Link to="/">
          <NavLogo />
        </Link>
        <Burger
          handleOpenBurger={handleOpenBurger}
          isBurgerOpen={isBurgerOpen}
        />
        <RightNav isBurgerOpen={isBurgerOpen} />
      </div>
    </NavBar>
  )
}

export default Navbar
