import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import PropTypes from "prop-types"

const StyledMenu = styled(animated.div)`
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

  div {
    width: 30px;
    height: 5px;
    background: var(--main);
    border-radius: 3px;
    transform-origin: 1px;
    transition: all 0.2s linear;

    :nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const BurgerMenu = ({ isOpen, toggleOpen }) => {
  const MenuSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: "translateY(0)",
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
  })

  return (
    <StyledMenu isOpen={isOpen} onClick={toggleOpen} style={MenuSpring}>
      <div></div>
      <div></div>
      <div></div>
    </StyledMenu>
  )
}

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
}

export default BurgerMenu
