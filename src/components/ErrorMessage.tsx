import styled from "styled-components";

export default function ErrorMessage() {
  return (
    <ErrorLayout>Oops, an error occurred. Please, reload the page</ErrorLayout>
  );
}

const ErrorLayout = styled.div`
  margin: 50px 0;
  width: 100%;
  text-align: center;
`;
