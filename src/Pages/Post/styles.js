import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 1rem 0px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  p {
    margin: 1rem 0px;
    text-align: justify;
  }
  .createBy {
    width: 1200px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1280px) {
      width: 90%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .breadcrumb {
    margin-bottom: 20px;
  }
  @media (max-width: 1280px) {
    width: 90%;
  }
`;
export const Related = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  @media (max-width: 1280px) {
    width: 90%;
  }
`;
