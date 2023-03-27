import styled from "styled-components";

const CommentsLayout = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0 auto;
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  text-align: justify;
  span {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export default CommentsLayout;
