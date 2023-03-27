import request from "../services/request";

export default async function getComments(postId: number) {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}posts/${postId}/comments`;
    const response = await request.get(URL);
    return response.json();
  } catch (error) {
    return error;
  }
}
