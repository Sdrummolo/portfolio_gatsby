import styled from "styled-components"

export default styled.div`
  margin-top: 9rem;
  text-align: ${props => (props.centerText ? "center" : "none")};

  @media (max-width: 768px) {
    margin-top: 7rem;
  }
`
