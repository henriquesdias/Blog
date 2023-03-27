import RecommendedPost from "./RecommendedPost";
import Post from "./Post";
import ContainerRecommendedPosts from "../styles/ContainerRecommendedPosts";
import ContainerPosts from "../styles/ContainerPosts";
import FeedLayout from "../styles/FeedLayout";
import usePosts from "../hooks/usePosts";
import ErrorMessage from "./ErrorMessage";

export default function Feed() {
  const { posts, error } = usePosts();
  const recommendedPosts = posts?.slice(0, 3);
  const regularPosts = posts?.slice(3);
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <FeedLayout>
      <h1>Recommended</h1>
      <ContainerRecommendedPosts>
        {recommendedPosts ? (
          recommendedPosts.map((e) => <RecommendedPost post={e} key={e.id} />)
        ) : (
          <></>
        )}
      </ContainerRecommendedPosts>
      <ContainerPosts>
        {regularPosts ? (
          regularPosts.map((e) => <Post post={e} key={e.id} />)
        ) : (
          <></>
        )}
      </ContainerPosts>
    </FeedLayout>
  );
}
