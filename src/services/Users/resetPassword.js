import { axiosInstance } from "../../api/axiosInstance";

export const resetPassword = async ({ code, newPassword }) => {
    try {
        const password = {
            password: newPassword
        }
        const res = await axiosInstance.post(`usuarios/reset_password/${code}`, password)
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.error || "Ocurrió un error inesperado.";
        return { success: false, error: errorMessage };
    }
}