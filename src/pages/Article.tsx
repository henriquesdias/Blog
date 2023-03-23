import styled from "styled-components";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import usePosts from "../hooks/usePosts";

export default function Article() {
  const { postId } = useParams();
  const { posts, error } = usePosts(Number(postId));
  const article = posts ? posts[0] : null;

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
    </PageLayout>
  );
}

const ArticleLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 600px;
    width: 100%;
    height: 204px;
    border-radius: 16px;
    background-size: cover;
  }
  h2 {
    margin: 40px 0;
    color: #2c2c2c;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    max-width: 600px;
  }
  article {
    color: #2c2c2c;
    font-size: 16px;
    width: 100%;
    max-width: 600px;
  }
`;

const PageLayout = styled.main`
  margin: 45px auto 0 auto;
  padding: 0 10px;
  width: 100%;
  max-width: 1200px;
`;
