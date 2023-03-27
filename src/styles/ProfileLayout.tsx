import styled from "styled-components";

const ProfileLayout = styled.div`
  margin: 30px auto 0 auto;
  width: 90%;
  max-width: 450px;
  height: 500px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  img {
    border-radius: 50%;
  }
  > div:first-child {
    display: flex;
    justify-content: center;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    span {
      margin-bottom: 10px;
    }
  }
  button {
    margin-top: 40px;
    outline: none;
    border: none;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

export default ProfileLayout;
