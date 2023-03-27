import { useNavigate } from "react-router-dom";

import PostLayout from "../styles/PostLayout";
import { PostType } from "../protocols";
import postImage from "../assets/post.jpg";

interface IPostProps {
  post: PostType;
}

export default function Post({ post }: IPostProps) {
  const navigate = useNavigate();
  return (
    <PostLayout onClick={() => navigate(`/comments/${post.id}`)}>
      <img src={postImage} alt="image-post" />
      <div>
        <span>Tecnology</span>
        <h2>{post.title}</h2>
      </div>
    </PostLayout>
  );
}
