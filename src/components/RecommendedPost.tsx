import { useNavigate } from "react-router-dom";

import RecommendedPostLayout from "../styles/RecommendedPostLayout";
import { PostType } from "../protocols";
import imagePost from "../assets/recommendedPost.jpg";

interface IRecommendedPost {
  post: PostType;
}

export default function RecommendedPost({ post }: IRecommendedPost) {
  const navigate = useNavigate();
  return (
    <RecommendedPostLayout onClick={() => navigate(`/comments/${post.id}`)}>
      <img src={imagePost} alt="post" />
      <h2>{post.title}</h2>
      <span>Technology</span>
    </RecommendedPostLayout>
  );
}
