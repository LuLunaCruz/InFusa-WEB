import { axiosInstance } from "../../api/axiosInstance"

export const getAllPosts = async () => {
    try {
        const res = await axiosInstance.get(`publicaciones`);
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
        return { success: false, error: errorMessage };
    }
}