import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 2rem auto;
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    textarea {
      margin: 1rem 0px;
      background-color: transparent;
      border: 1px solid white;
      color: white;
      padding: 10px;
    }

    button {
      background-color: rgb(255, 221, 0);
      border: 0px;
      padding: 15px 25px;
      cursor: pointer;
      text-align: center;
      color: #222;
      font-weight: bold;
    }
    @media (max-width: 1280px) {
      width: 100%;
    }
  }
  .comments {
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-bottom: 10px;
    @media (max-width: 1280px) {
      width: 100%;
    }
    img {
      width: 43px;
      height: 43px;
      margin: 30px 0px 10px 0px;
    }
    p {
      font-size: 12.5px;
      margin: 5px 0px;
      line-height: 22px;
    }
  }
  @media (max-width: 1280px) {
    width: 90%;
  }
`;
