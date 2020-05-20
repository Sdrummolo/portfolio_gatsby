import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledButton = styled.button`
  background: var(--main);
  margin-top: 60px;
  padding: 0.8rem 3rem;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  color: var(--white);
  box-shadow: 5px 5px 20px rgba(98, 98, 98, 0.3);
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`

const HeaderButton = () => {
  return <StyledButton>About Me</StyledButton>
}

export default HeaderButton
