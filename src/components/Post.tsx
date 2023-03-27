import { useNavigate } from "react-router-dom";

import PostLayout from "../styles/PostLayout";
import { PostType } from "../protocols";

interface IPostProps {
  post: PostType;
}

export default function Post({ post }: IPostProps) {
  const navigate = useNavigate();
  return (
    <PostLayout onClick={() => navigate(`/comments/${post.id}`)}>
      <img
        src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image-post"
      />
      <div>
        <span>Tecnology</span>
        <h2>{post.title}</h2>
      </div>
    </PostLayout>
  );
}
