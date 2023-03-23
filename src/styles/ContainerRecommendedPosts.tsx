import styled from "styled-components";

const ContainerRecommendedPosts = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default ContainerRecommendedPosts;
