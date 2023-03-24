export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CommentType = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
