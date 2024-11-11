import { useState } from "react";
import { createPost } from "../../services/Posts/createPost";
import UserImg from "../../assets/img/layou/User.svg";
import SendImg from "../../assets/img/request/Enviar.svg";
import Map from "../Map/Map";
import "./CreatePost.css";

const CreatePost = ({ token }) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState("");
  const [isDone, setIsDone] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          setError(
            "No se pudo obtener la ubicación. Asegúrate de permitir el acceso a la ubicación."
          );
          console.error(err);
        }
      );
    } else {
      setError("Geolocalización no es soportada por este navegador.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !location || latitude === null || longitude === null) {
      setError(
        "Por favor completa todos los campos y permite el acceso a la ubicación."
      );
      return;
    }
    setError("");
    const postData = {
      description,
      location,
      latitude,
      longitude,
    };
    const res = await createPost({ token, postData });
    if (!res.success) {
      setError(`Error: ${res.error}`);
    } else {
      setIsDone(true);
    }
    setDescription("");
    setLocation("");
    setLatitude(null);
    setLongitude(null);
  };

  return (
    <div className="Cajas">
      {error && <div style={{ color: "#fff" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="CajaEscribirComentario">
          <div className="SaludoUser">
            <div className="ImagenSaludoUser">
              <img
                src={UserImg}
                alt="Imagen Icono Usuario"
                title="Imagen Icono de Usuario"
              />
            </div>
            <h2>
              Bienvenid@ {user.first_name} {user.last_name}
            </h2>
          </div>
          <div className="CajaComentarioUser">
            <input
              placeholder="¿Qué está pasando...?"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="CajaUtilidades">
            <div className="CajaUbicacion">
              <div className="CajaInput">
                <label htmlFor="location">¿En dónde es?</label>
                <input
                  placeholder="Puedes escribir barrio, dirección, sector..."
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="LatLong">
                <p>Latitud: {latitude}</p>
                <p>Longitud: {longitude}</p>
              </div>
            </div>
            <div className="Ubi">
              <button
                className="BotonUbi"
                type="button"
                onClick={handleLocationPermission}
              >
                <p>Mi Ubicación: </p>
                <p className="PermisosTexto">
                  Click aqui para dar permisos de ubicacion
                </p>
              </button>
              <div className="CajaMap">
                {latitude && longitude && (
                  <Map latitude={latitude} longitude={longitude} />
                )}
              </div>
            </div>
            <div className="CajaEnviar">
              <button type="submit" className="Enviar">
                <div className="CajaSendImg">
                  <img
                    src={SendImg}
                    alt="Icono enviar publicación"
                    title="Icono enviar ubicación"
                  />
                </div>
                Realizar reporte
              </button>
      {isDone && (
        <div className="EnvioCorrecto">
          <p>Publicación realizada correctamente, su solicitud será atendida lo más pronto posible.</p>
          
        </div>
      )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
