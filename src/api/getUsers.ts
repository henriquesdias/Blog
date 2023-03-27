import request from "../services/request";

export default async function getUsers() {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}users`;
    const response = await request.get(URL);
    return response.json();
  } catch (error) {
    return error;
  }
}
