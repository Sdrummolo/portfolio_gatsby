import React, { useEffect, useState } from "react"
import DesktopNavbar from "../layout/DesktopNavbar"
import MobileNavbar from "../layout/MobileNavbar"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(null)

  const getDevice = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // Listen for resize
  useEffect(() => {
    window.addEventListener("resize", getDevice)
    return () => window.removeEventListener("resize", getDevice)
  }, [])

  // return isMobile ? <MobileNavbar /> : <DesktopNavbar />
  return <DesktopNavbar />
}

export default Navbar
