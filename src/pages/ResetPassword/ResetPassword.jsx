import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../services/Users/resetPassword";
import "./ResetPassword.css";

const ResetPassword = () => {
  const { code } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await resetPassword({ code, newPassword });
    if (!res.success) {
      setError("Ocurrió un error al cambiar la contraseña");
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
            <label htmlFor="PassW">Nueva Contraseña</label>
            <input
              id="PassW"
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Restablecer Contraseña</button>
        </form>
        {isDone && (
          <>
            <div className="CajaContra">
              <Link to="/login">
                Su contraseña ha sido cambiada con éxito, click para iniciar
                sesión
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
