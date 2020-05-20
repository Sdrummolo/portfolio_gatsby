import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../../styles/global"

// Components
const StyledMain = styled.main`
  position: relative;
  overflow-x: hidden;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledMain>{children}</StyledMain>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
