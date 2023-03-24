import CommentsLayout from "../styles/CommentsLayout";
import useComments from "../hooks/useComments";

import { CommentType } from "../protocols";

interface ICommentsProps {
  postId: number;
}
interface ICommentProps {
  comment: CommentType;
}

export default function Comments({ postId }: ICommentsProps) {
  const { comments, error } = useComments(postId);

  return (
    <>
      {comments?.map((e: CommentType) => (
        <Comment comment={e} key={e.id} />
      ))}
    </>
  );
}
function Comment({ comment }: ICommentProps) {
  return (
    <CommentsLayout>
      <span>{comment.name}</span>
      <p>{comment.body}</p>
    </CommentsLayout>
  );
}
