export default async function getUsers() {
  try {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(URL, { method: "GET" });
    return response.json();
  } catch (error) {
    return error;
  }
}
