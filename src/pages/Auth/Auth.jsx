import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth/login";
import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await login({ email, password });
    if (!res.success) {
      setError("Ocurrió un error al iniciar sesión");
      console.error(res.error);
    } else {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div className="Cajas">
      <div className="CajaSesion">
        <div className="TituloForm">
        <h3>{isLoggedIn ? "Bienvenido" : "Iniciar Sesión"}</h3>
        </div>
        {error && <div style={{ color: "#fff" }}>{error}</div>}
        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>
            <div className="CajaInput">
              <label htmlFor="email">Correo:</label>
              <input
                placeholder="Ej: luna@cruz.com"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="CajaInput">
              <label htmlFor="password">Contraseña:</label>
              <input
                placeholder="Ej: Luna123."
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="ResetPassword">
              <Link to="/auth/reset_password">¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
        ) : (
          <div className="SesionActiva">
            <p>Has iniciado sesión exitosamente.</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
