import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const UL = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;

  li {
    padding: 0 18px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 320px;
    background-color: var(--white);
    width: ${({ isOpen }) => (isOpen ? "100%" : 0)};

    li {
      margin: 20px auto;
    }
  }
`

const RightNav = ({ isOpen }) => {
  return (
    <UL isOpen={isOpen}>
      <li>
        <Link>About me</Link>
      </li>
      <li>
        <Link>Portfolio</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </UL>
  )
}

export default RightNav
