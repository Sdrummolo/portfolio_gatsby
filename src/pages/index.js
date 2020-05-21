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
import Contact from "../components/layout/Contact"

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => setIsMenuOpen(isMenuOpen => !isMenuOpen)

  return (
    <>
      <GlobalStyle hideOverflowY={isMenuOpen} />
      <SEO title="Home" />
      <Navbar handleOpenMenu={handleOpenMenu} isMenuOpen={isMenuOpen} />
      <Container>
        <Header />
        <About />
        <Portfolio />
        <Contact />
      </Container>
    </>
  )
}

export default IndexPage
