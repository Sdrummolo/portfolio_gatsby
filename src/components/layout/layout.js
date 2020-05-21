import React from "react"
import styled from "styled-components"

const StyledMain = styled.main`
  position: relative;
`

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  )
}
