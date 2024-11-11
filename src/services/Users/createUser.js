import { axiosInstance } from "../../api/axiosInstance";

export const createUser  = async (userData) => {
  try {
    const res = await axiosInstance.post("usuarios", userData);
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
    return { success: false, error: errorMessage };
  }
};