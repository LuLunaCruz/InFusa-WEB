import { axiosInstance } from "../../api/axiosInstance";

export const deletePost = async ({ token, id }) => {
  try {
    const res = await axiosInstance.delete(`publicaciones/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
    return { success: false, error: errorMessage };
  }
};