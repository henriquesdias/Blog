import RecommendedPost from "./RecommendedPost";
import Post from "./Post";
import ContainerRecommendedPosts from "../styles/ContainerRecommendedPosts";
import ContainerPosts from "../styles/ContainerPosts";
import FeedLayout from "../styles/FeedLayout";

import usePosts from "../hooks/usePosts";

export default function Feed() {
  const { posts, error } = usePosts();
  const recommendedPosts = posts?.slice(0, 3);
  const regularPosts = posts?.slice(3);

  return (
    <FeedLayout>
      <h1>Recommended</h1>
      <ContainerRecommendedPosts>
        {recommendedPosts ? (
          recommendedPosts.map((e, index) => (
            <RecommendedPost post={e} key={index} />
          ))
        ) : (
          <></>
        )}
      </ContainerRecommendedPosts>
      <ContainerPosts>
        {regularPosts ? (
          regularPosts.map((e, index) => <Post post={e} key={index} />)
        ) : (
          <></>
        )}
      </ContainerPosts>
    </FeedLayout>
  );
}
