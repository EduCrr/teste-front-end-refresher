import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(255, 221, 0);

  .content {
    width: 1200px;
    padding: 1.5rem 0px;
    margin: auto;
    color: #222 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: #222 !important;
    }
    @media (max-width: 1280px) {
      width: 90%;
    }
  }
`;
