export default async function getPosts() {
  try {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(URL, { method: "GET" });
    return response.json();
  } catch (error) {
    return error;
  }
}
