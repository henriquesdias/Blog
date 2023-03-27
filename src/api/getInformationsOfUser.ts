export default async function getInformationsOfUser(userId: number) {
  try {
    const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const response = await fetch(URL, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
