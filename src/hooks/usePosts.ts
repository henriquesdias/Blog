import { useEffect, useState } from "react";

import { PostType } from "../protocols";
import getPosts from "../api/getPosts";

export default function usePosts() {
  const [posts, setPosts] = useState<null | PostType[]>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getPosts()
      .catch((res) => {
        console.log(res.data);
        setError(res.data);
      })
      .then((res) => setPosts(res));
  }, []);

  return { posts, error };
}
