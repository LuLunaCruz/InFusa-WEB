import { useState } from "react";
import { resetPasswordEmail } from "../../services/Users/resetPasswordEmail";
import "./ResetPasswordEmail.css";

const ResetPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await resetPasswordEmail(email);
    if (!res.success) {
      setError(
        "Ocurrió un error al procesar la solicitud de cambiar contraseña"
      );
      console.error(res.error);
    } else {
      setIsDone(true);
    }
  };

  return (
    <div className="Cajas">
      <div className="CajaResetCompleta">
        <div className="CajaReset">
          <h2>Restablecer Contraseña</h2>
        </div>
        {error && <div style={{ color: "#fff" }}>{error}</div>}
        <form onSubmit={handleSubmit}>
            <div className="CajaInput">
                <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            </div>
          <button type="submit">Enviar</button>
        </form>
        {isDone && (
          <div className="MensajeCorreo">
            Se ha enviado un correo a {email} con instrucciones para cambiar su
            contraseña
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordEmail;
