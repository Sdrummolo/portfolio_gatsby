import React from "react"
import GlobalStyle from "../styles/global"

// Components
import Layout from "../components/layout/layout"
import Container from "../components/UI/Container"
import Navbar from "../components/layout/Navbar"
import BackgroundLogo from "../components/UI/BackgroundLogo"
import Header from "../components/layout/Header"
import About from "../components/layout/About"
import Portfolio from "../components/layout/Portfolio"
import Contact from "../components/layout/Contact"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <BackgroundLogo />
        <Navbar />
        <Container>
          <Header />
          <About />
          <Portfolio />
          <Contact />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
