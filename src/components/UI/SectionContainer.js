import styled from "styled-components"

export default styled.div`
  padding-top: 9rem;
  text-align: ${props => (props.centerText ? "center" : "none")};

  @media (max-width: 768px) {
    padding-top: 7rem;
  }
`
