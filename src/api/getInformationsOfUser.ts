export default async function getInformationsOfUser(userId: number) {
  try {
    const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await fetch(URL, { method: "GET" });
    return response.json();
  } catch (error) {
    return error;
  }
}
