import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/Users/createUser";
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const userData = {
      first_name: firstName,
      last_name: lastName,
      phone,
      email,
      password,
      birthday,
    };
    const res = await createUser(userData);
    if (!res.success) {
      setError("Ocurrió un error al crear usuario");
      console.error(res.error);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="CajaRegistrarseCompleta">
      <div className="CajaRegistro">
        <div className="TituloForm">
          <h3>Registrarse</h3>
        </div>
        {error && <div style={{ color: "#fff" }}>{error}</div>}
        <form onSubmit={handleRegister}>
          <div className="Cajas">
            <div className="CajaI">
              <div className="CajaInput">
                <label htmlFor="firstName">Nombres:</label>
                <input
                  placeholder="Ej: Luna Carolina"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="CajaInput">
                <label htmlFor="lastName">Apellidos:</label>
                <input
                  placeholder="Ej: Cruz Sánchez"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="CajaInput">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  placeholder="Ej: 300 123 4567"
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="CajaR">
              <div className="CajaInput">
                <label htmlFor="email">Correo:</label>
                <input
                  placeholder="Ej: luna@cruz.com"
                  type="email"
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
              <div className="Cumple">
                <label htmlFor="birthday">F. Nacimiento:</label>
                <input
                  type="date"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit">Completar registro</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
