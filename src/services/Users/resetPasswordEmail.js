import { axiosInstance } from "../../api/axiosInstance";

export const resetPasswordEmail = async (email) => {
    try {
        const body = {
            email,
            frontBaseUrl: "http://localhost:5173"
        }
        const res = await axiosInstance.post("usuarios/reset_password", body)
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
        return { success: false, error: errorMessage };
    }
}