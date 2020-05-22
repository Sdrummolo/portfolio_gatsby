import React from "react"
import styled from "styled-components"

const StyledMenu = styled.div`
  height: 30px;
  width: 30px;
  background: red;
  div {
  }
`

const BurgerMenu = () => {
  return (
    <StyledMenu>
      <div></div>
      <div></div>
      <div></div>
    </StyledMenu>
  )
}

export default BurgerMenu
