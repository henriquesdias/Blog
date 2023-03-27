import request from "../services/request";

export default async function getInformationsOfUser(userId: number) {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}users/${userId}`;
    const response = await request.get(URL);
    return response.json();
  } catch (error) {
    return error;
  }
}
