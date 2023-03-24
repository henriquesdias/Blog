export default async function getComments(postId: number) {
  try {
    const URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
