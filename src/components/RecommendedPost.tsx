import styled from "styled-components";

export default function RecommendedPost() {
  return (
    <RecommendedPostLayout>
      <img
        src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="post"
      />
      <h2>uaie qi qhiq qqbdd qoq qdn ah uahd uahush asuhauhuh uahuah uahu</h2>
    </RecommendedPostLayout>
  );
}

const RecommendedPostLayout = styled.div`
  margin-right: 20px;
  width: 290px;
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
`;
