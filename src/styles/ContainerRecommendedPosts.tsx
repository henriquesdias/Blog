import styled from "styled-components";

const ContainerRecommendedPosts = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 40px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ContainerRecommendedPosts;
