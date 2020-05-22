import React from "react"
import PropTypes from "prop-types"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"

const StyledBurger = styled(animated.div)`
  height: 30px;
  width: 30px;
  position: fixed;
  top: 15px;
  right: 15px;
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
  const BurgerSpring = useSpring({
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
    <StyledBurger
      onClick={handleOpenMenu}
      isMenuOpen={isMenuOpen}
      style={BurgerSpring}
    >
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
