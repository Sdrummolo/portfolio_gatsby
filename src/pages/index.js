import React, { useEffect, useState } from "react"
import GlobalStyle from "../styles/global"
import { Waypoint } from "react-waypoint"

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

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollUp, setScrollUp] = useState(false)

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

  // Render appropriate navbar
  useEffect(() => {
    getDeviceWidth()
  }, [])

  // Listen for resize
  useEffect(() => {
    window.addEventListener("resize", getDeviceWidth)
    return () => window.removeEventListener("resize", getDeviceWidth)
  }, [])

  // Listen for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = e => {
    window.pageYOffset > 800 ? setScrollUp(true) : setScrollUp(false)
  }

  return (
    <>
      <Layout>
        <GlobalStyle isMobile={isMobile} isOpen={isOpen} />
        <BackgroundLogo />
        <Navbar isMobile={isMobile} isOpen={isOpen} toggleOpen={toggleOpen} />
        <Container>
          <Header />
          <About />
          <Portfolio />
          <Contact />
        </Container>
        <ScrollUpButton scrollUp={scrollUp} />
      </Layout>
    </>
  )
}

export default IndexPage
