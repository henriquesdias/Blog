import styled from "styled-components";

const ArticleLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 600px;
    width: 100%;
    height: 204px;
    border-radius: 16px;
    background-size: cover;
  }
  h2 {
    margin: 40px 0;
    color: #2c2c2c;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    max-width: 600px;
  }
  article {
    color: #2c2c2c;
    font-size: 16px;
    width: 100%;
    max-width: 600px;
    text-align: justify;
  }
`;

export default ArticleLayout;
