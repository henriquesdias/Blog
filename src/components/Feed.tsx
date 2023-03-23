import styled from "styled-components";

import RecommendedPost from "./RecommendedPost";
import ContainerRecommendedPosts from "../styles/ContainerRecommendedPosts";
import FeedLayout from "../styles/FeedLayout";

export default function Feed() {
  return (
    <FeedLayout>
      <h1>Recommended</h1>
      <ContainerRecommendedPosts>
        <RecommendedPost />
        <RecommendedPost />
        <RecommendedPost />
      </ContainerRecommendedPosts>
      <ContainerPosts></ContainerPosts>
    </FeedLayout>
  );
}

const ContainerPosts = styled.div``;
