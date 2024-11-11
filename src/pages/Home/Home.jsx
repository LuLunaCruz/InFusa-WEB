import CreatePost from "../../components/CreatePost/CreatePost";
import LoadPosts from "../../components/LoadPosts/LoadPosts";
import InfoImg from "../../assets/img/layou/Info.svg";
import MisionImg from "../../assets/img/layou/Mision.svg";
import VisionImg from "../../assets/img/layou/Vision.svg";
import "./Home.css";

const Home = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.is_admin || false;

  if (!token) {
    
    return (
      <div className="CajaMVyOPrincipal">
        <div className="CajaMVyO">
          <div className="CajaTituloMVyO">
            <div className="ImagenMVyO">
              <img
                src={MisionImg}
                alt="Imagen explicativa de la misión de InFusa"
              />
            </div>

            <h3>Misión</h3>
          </div>

          <div className="CajaTexto">
            <p>
              El objetivo es mantener a los ciudadanos de Fusagasugá informados
              sobre las distintas situaciones que ocurren en la ciudad. Además,
              se busca realizar reportes oportunamente a las autoridades
              correspondientes según el tipo de incidente.
            </p>
          </div>
        </div>

        <div className="CajaMVyO">
          <div className="CajaTituloMVyO">
            <div className="ImagenMVyO">
              <img
                src={VisionImg}
                alt="Imagen explicativa sobre la visión de InFusa"
              />
            </div>

            <h3>Visión</h3>
          </div>

          <div className="CajaTexto">
            <p>
              Transformar a Fusagasugá en una ciudad inteligente y segura
              mediante una plataforma digital centralizada. Los reportes
              ciudadanos facilitarán la respuesta rápida de las autoridades, ya
              que se optimiza el envío de solicitudes a las entidades
              competentes. La información será un recurso vital, haciendo de
              cada ciudadano un guardián del bienestar de la ciudad.
            </p>
          </div>
        </div>

        <div className="CajaMVyO">
          <div className="CajaTituloMVyO">
            <div className="ImagenMVyO">
              <img
                src={InfoImg}
                alt="Imagen explicativa sobre cómo enviar un reporte"
              />
            </div>

            <h3>¿Como Funciona la Pagina?</h3>
          </div>

          <div className="CajaTexto">
            <p>
              Para realizar una solicitud de cualquier índole, primero debes
              registrarte. Una vez completado este proceso, podrás enviar una
              publicación a nuestros administradores, quienes darán aviso a la
              entidad competente y te ayudarán a resolver tu caso.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {isAdmin ? (
        
        <div>
          <LoadPosts token={token} />
        </div>
      ) : (
        
        <div>
          <CreatePost token={token} />
        </div>
      )}
    </>
  );
};

export default Home;