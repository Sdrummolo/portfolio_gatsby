import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import arrow from "../../images/arrow_down.svg"

const StyledDiv = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  position: fixed;
  bottom: 40px;
  right: 20px;
  border-radius: 50%;
  background: var(--main);
  z-index: 100;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-items: center;
  box-shadow: 0px 8px 15px rgba(98, 98, 98, 0.3);
  transition: transform 0.2s ease-out;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    height: 40px;
    width: 40px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px rgba(98, 98, 98, 0.3);
  }

  a {
    margin: auto;
  }

  img {
    height: 15px;
    width: 15px;
    transform: rotateX(180deg);
    margin: auto;

    @media (max-width: 768px) {
      height: 12px;
      width: 12px;
    }
  }
`

const ScrollUpButton = ({ isOpen }) => {
  return (
    <Link to="#header">
      <StyledDiv isOpen={isOpen}>
        <img src={arrow} alt="" />
      </StyledDiv>
    </Link>
  )
}

ScrollUpButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default ScrollUpButton
