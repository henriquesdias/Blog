import styled from "styled-components";

import Header from "../components/Header";
import Feed from "../components/Feed";

export default function MainPage() {
  return (
    <PageLayout>
      <Header showArrow={false} />
      <Feed />
    </PageLayout>
  );
}

const PageLayout = styled.main`
  margin: 45px auto 0 auto;
  padding: 0 10px;
  width: 100%;
  max-width: 1200px;
`;
