import { useNavigate } from "react-router-dom";

import RecommendedPostLayout from "../styles/RecommendedPostLayout";
import { PostType } from "../protocols";

interface IRecommendedPost {
  post: PostType;
}

export default function RecommendedPost({ post }: IRecommendedPost) {
  const navigate = useNavigate();
  return (
    <RecommendedPostLayout onClick={() => navigate(`/comments/${post.id}`)}>
      <img
        src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="post"
      />
      <h2>{post.title}</h2>
    </RecommendedPostLayout>
  );
}
