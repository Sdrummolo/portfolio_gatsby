import styled from "styled-components"

export default styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1086px;

  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 768px) {
    max-width: 720px;
  }
  @media (max-width: 576px) {
    max-width: 576px;
    overflow-x: hidden;
  }
`
