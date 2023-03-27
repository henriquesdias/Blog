import { useParams } from "react-router-dom";

import Header from "../components/Header";
import usePosts from "../hooks/usePosts";
import ArticleLayout from "../styles/ArticleLayout";
import Comments from "../components/Comments";
import ErrorMessage from "../components/ErrorMessage";
import PageLayout from "../styles/PageLayout";

export default function Article() {
  const { postId } = useParams();
  const { posts, error } = usePosts(Number(postId));
  const article = posts ? posts[0] : null;
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <PageLayout>
      <Header showArrow={true} />
      <ArticleLayout>
        <div>
          <img
            src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="tech"
          />
          <h2>{article?.title}</h2>
          <article>{article?.body}</article>
        </div>
      </ArticleLayout>
      <h2>Comments</h2>

      <Comments postId={Number(postId)} />
    </PageLayout>
  );
}
