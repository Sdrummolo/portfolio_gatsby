import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledBurger = styled.div`
  height: 30px;
  width: 30px;
  position: fixed;
  top: 25px;
  right: 25px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 100;

  @media (min-width: 769px) {
    display: none;
  }

  div {
    width: 30px;
    height: 0.25rem;
    background-color: var(--main);
    border-radius: 2px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    :nth-child(1) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const Burger = ({ isMenuOpen, handleOpenMenu }) => {
  return (
    <StyledBurger onClick={handleOpenMenu} isMenuOpen={isMenuOpen}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  )
}

Burger.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Burger
