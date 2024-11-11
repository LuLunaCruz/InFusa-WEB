import { Link, Outlet } from "react-router-dom";
import RegisterImg from "../../../assets/img/layou/Register.svg";
import LoginImg from "../../../assets/img/layou/User.svg";
import IconImg from "../../../assets/img/layou/Icono.svg";
import "./Layout.css";

const Layout = () => {
  return (
    <>
    <div className="CajadeTodo">

      <header>
        <div className="CajaIniciarSesion">
          <div className="CajaImagenIngresar">
            <img
              src={LoginImg}
              alt="Imagen de inicio de sesión"
              title="Imagen de inicio de sesión"
            />
          </div>

          <Link to="/login" title="Iniciar Sesión">
            Sesión
          </Link>
        </div>

        <div className="CajaEncabezado">
          <Link className="NavLink" to="/">
            <div className="CajaTitulo">
              <div className="ImagIconPrin">
                <img src={IconImg} alt="Icono InFusa" title="Icono InFusa" />
              </div>

              <h1>InFusa</h1>
            </div>
            <h2>Un espacio para conocer tu ciudad</h2>
          </Link>
        </div>

        <div className="CajaRegistrarse">
          <Link to="/registrate" title="Registrarse">
            Registrarse
          </Link>

          <div className="CajaImagenRegistrarse">
            <img
              src={RegisterImg}
              alt="Imagen de registro en la plataforma"
              title="Imagen de registro en la plataforma"
            />
          </div>
        </div>
      </header>

      <main className="CajaMain">
        <Outlet />
      </main>
    </div>
    </>
  );
};

export default Layout;