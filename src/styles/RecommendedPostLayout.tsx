import styled from "styled-components";

const RecommendedPostLayout = styled.div`
  cursor: pointer;
  margin-right: 20px;
  width: 290px;
  position: relative;
  img {
    width: 289px;
    height: 176px;
    border-radius: 16px;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #2c2c2c;
  }
  > span {
    background-color: #9b9792;
    opacity: 40%;
    position: absolute;
    left: 10px;
    top: 10px;
    color: white;
    border-radius: 6px;
    padding: 7px;
  }
`;

export default RecommendedPostLayout;
