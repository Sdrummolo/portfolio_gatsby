import React from "react"
import { Link } from "gatsby"
import SEO from "../components/utilities/seo"

// Components
import Layout from "../components/layout/layout"
import Container from "../components/UI/Container"
import Navbar from "../components/layout/Navbar"
import BackgroundLogo from "../components/UI/BackgroundLogo"
import Header from "../components/layout/Header"
import About from "../components/layout/About"
import Portfolio from "../components/layout/Portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <BackgroundLogo />
    <Container>
      <Header />
      <About />
      <Portfolio />
    </Container>
  </Layout>
)

export default IndexPage
