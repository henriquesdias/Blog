import request from "../services/request";

export default async function getPosts() {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}posts`;
    const response = await request.get(URL);
    return response.json();
  } catch (error) {
    return error;
  }
}
