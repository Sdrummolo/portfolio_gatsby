import React from "react"
import PropTypes from "prop-types"

// Components
import DesktopNavbar from "../layout/DesktopNavbar"
import MobileNavbar from "../layout/MobileNavbar"

const Navbar = ({ isMobile, isOpen, toggleOpen }) => {
  return isMobile ? (
    <MobileNavbar isOpen={isOpen} toggleOpen={toggleOpen} />
  ) : (
    <DesktopNavbar />
  )
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
}

export default Navbar
