import RecommendedPost from "./RecommendedPost";
import Post from "./Post";
import ContainerRecommendedPosts from "../styles/ContainerRecommendedPosts";
import ContainerPosts from "../styles/ContainerPosts";
import FeedLayout from "../styles/FeedLayout";

export default function Feed() {
  return (
    <>
      <FeedLayout>
        <h1>Recommended</h1>
        <ContainerRecommendedPosts>
          <RecommendedPost />
          <RecommendedPost />
          <RecommendedPost />
        </ContainerRecommendedPosts>
        <ContainerPosts></ContainerPosts>
      </FeedLayout>
      <ContainerPosts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ContainerPosts>
    </>
  );
}
