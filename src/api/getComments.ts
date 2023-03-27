export default async function getComments(postId: number) {
  try {
    const URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const response = await fetch(URL, { method: "GET" });
    return response.json();
  } catch (error) {
    return error;
  }
}
