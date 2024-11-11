import { axiosInstance } from "../../api/axiosInstance";

export const login = async ({ email, password }) => {
    try {
        const credentials = { email, password }
        const res = await axiosInstance.post("usuarios/login", credentials);
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
        return { success: false, error: errorMessage };
    }
}