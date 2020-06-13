import React, { useEffect, useState } from "react"
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
import ScrollUpButton from "../components/UI/ScrollUpButton"
import Form from "../components/layout/Form"

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollUp, setScrollUp] = useState(false)

  // Listen for resize and scroll
  useEffect(() => {
    window.addEventListener("resize", getDeviceWidth)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", getDeviceWidth)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // load appropriate navbar on render
  useEffect(() => {
    getDeviceWidth()
  }, [])

  const getDeviceWidth = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // Open and close mobile menu
  const toggleOpen = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const handleScroll = e => {
    window.pageYOffset > 800 ? setScrollUp(true) : setScrollUp(false)
  }

  return (
    <Layout>
      <GlobalStyle isMobile={isMobile} isOpen={isOpen} />
      <BackgroundLogo />
      <Navbar isMobile={isMobile} isOpen={isOpen} toggleOpen={toggleOpen} />
      <Container>
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Form />
      </Container>
      <ScrollUpButton scrollUp={scrollUp} isOpen={isOpen} />
    </Layout>
  )
}

export default IndexPage
