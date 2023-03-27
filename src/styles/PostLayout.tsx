import styled from "styled-components";

const PostLayout = styled.div`
  cursor: pointer;
  width: 335px;
  height: 79px;
  display: flex;
  align-items: center;
  margin: 20px;
  img {
    width: 96px;
    height: 79px;
    border-radius: 16px;
    margin-right: 10px;
  }
  div {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      background-color: #f2f2f2;
      padding: 4px;
      height: 30px;
      width: 100px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
`;

export default PostLayout;
