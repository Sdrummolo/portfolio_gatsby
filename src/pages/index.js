import React, { useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/utilities/seo"
import GlobalStyle from "../styles/global"

// Components
import Layout from "../components/layout/layout"
import Container from "../components/UI/Container"
import Navbar from "../components/layout/Navbar"
import BackgroundLogo from "../components/UI/BackgroundLogo"
import Header from "../components/layout/Header"
import About from "../components/layout/About"
import Portfolio from "../components/layout/Portfolio"

const IndexPage = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const handleOpenBurger = () => setIsBurgerOpen(isBurgerOpen => !isBurgerOpen)

  return (
    <>
      <GlobalStyle hideOverflowY={isBurgerOpen} />
      <SEO title="Home" />
      <Navbar handleOpenBurger={handleOpenBurger} isBurgerOpen={isBurgerOpen} />
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
