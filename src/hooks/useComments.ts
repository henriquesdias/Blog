import { useEffect, useState } from "react";

import { CommentType } from "../protocols";
import getComments from "../api/getComments";

export default function useComments(postId: number) {
  const [comments, setComments] = useState<null | CommentType[]>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getComments(postId)
      .catch((res) => {
        console.log(res.data);
        setError(res.data);
      })
      .then((res) => setComments(res));
  }, []);

  return { comments, error };
}
