import { useEffect, useState } from "react";

import { PostType } from "../protocols";
import getPosts from "../api/getPosts";

export default function usePosts(postId?: number) {
  const [posts, setPosts] = useState<null | PostType[]>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getPosts()
      .catch((res) => {
        console.log(res);
        setError(res);
      })
      .then((res) => {
        if (postId) {
          setPosts(res.filter((e: PostType) => e.id === postId));
        } else {
          setPosts(res);
        }
      });
  }, []);

  return { posts, error };
}
