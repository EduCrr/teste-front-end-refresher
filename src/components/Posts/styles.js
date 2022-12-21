import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;

  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 30px;
  }
  .postSingle {
    display: flex;
    width: calc(95% / 3);
    flex-direction: column;
    h3 {
      margin-top: 15px;
      height: 50px;
      @media (max-width: 768px) {
        height: auto !important;
      }
    }

    p {
      margin: 15px 0px;
      font-size: 13px;
      text-align: justify;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 50px;
    }

    img {
      width: 100%;
      display: block;
    }

    a {
      background-color: rgb(255, 221, 0);
      border: 0px;
      padding: 15px 25px;
      cursor: pointer;
      text-align: center;
      color: #222;
      font-weight: bold;
    }

    @media (max-width: 1280px) {
      width: calc(95% / 2);
    }
    @media (max-width: 768px) {
      width: calc(100% / 1);
    }
  }
  @media (max-width: 1280px) {
    width: 90%;
  }
`;
