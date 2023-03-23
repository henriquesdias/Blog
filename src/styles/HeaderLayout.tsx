import styled from "styled-components";

const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    background-color: #f4f4f4;
    border-radius: 16px;
    width: 288px;
    height: 40px;
    display: flex;
    align-items: center;
  }
  input {
    border: none;
    background-color: #f4f4f4;
    height: 100%;
    outline: none;
    margin-left: 8px;
    font-size: 15px;
  }
`;

export default HeaderLayout;
