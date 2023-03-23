export default async function getPosts() {
  try {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
