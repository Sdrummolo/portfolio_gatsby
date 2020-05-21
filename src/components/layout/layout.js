import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
  position: relative;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  )
}
