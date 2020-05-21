import React, { useState } from "react"
import SEO from "../components/utilities/seo"
import GlobalStyle from "../styles/global"

// Components
import Container from "../components/UI/Container"
import Navbar from "../components/layout/Navbar"
import BackgroundLogo from "../components/UI/BackgroundLogo"
import Header from "../components/layout/Header"
import About from "../components/layout/About"
import Portfolio from "../components/layout/Portfolio"

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => setIsMenuOpen(isMenuOpen => !isMenuOpen)

  return (
    <>
      <GlobalStyle hideOverflowY={isMenuOpen} />
      <SEO title="Home" />
      <Navbar handleOpenMenu={handleOpenMenu} isMenuOpen={isMenuOpen} />
      <BackgroundLogo />
      <Container>
        <Header />
        <About />
        <Portfolio />
      </Container>
    </>
  )
}

export default IndexPage
