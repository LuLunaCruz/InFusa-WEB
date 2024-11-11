import { axiosInstance } from "../../api/axiosInstance";

export const createPost = async ({ token, postData }) => {
  try {
    const body = postData
    const res = await axiosInstance.post("publicaciones", body, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return { success: true, data: res.data }; 
  } catch (error) {
    console.error(error);
    const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
    return { success: false, error: errorMessage };
  }
};