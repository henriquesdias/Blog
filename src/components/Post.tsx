import PostLayout from "../styles/PostLayout";
import { PostType } from "../protocols";

interface IPostProps {
  post: PostType;
}

export default function Post({ post }: IPostProps) {
  return (
    <PostLayout>
      <img
        src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image-post"
      />
      <h2>{post.title}</h2>
    </PostLayout>
  );
}
