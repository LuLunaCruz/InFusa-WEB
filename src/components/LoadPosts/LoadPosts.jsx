import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/Posts/getAllPosts";
import { deletePost } from "../../services/Posts/deletePost";
import Map from "../Map/Map";
import "./LoadPosts.css";

const LoadPosts = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [errorDelete, setErrorDelete] = useState("");
  const [errorLoad, setErrorLoad] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const loadPosts = async () => {
    const res = await getAllPosts();
    if (!res.success) {
      setErrorLoad("Error al cargar las publicaciones");
      console.error(res.error);
    } else {
      setPosts(res.data);
    }
  };

  const handleDelete = async (id) => {
    const res = await deletePost({ token, id });
    if (!res.success) {
      setErrorDelete("Error al eliminar publicación");
      console.error(res.error);
    } else {
      await loadPosts();
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <div className="PostCompleto">
        {errorLoad && <div style={{ color: "#fff" }}>{errorLoad}</div>}
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <div className="CajaDivisora">
                <div className="TituloSolucion">
                <h2>
                  Bienvenid@ {user.first_name} {user.last_name}
                </h2>
                </div>
                <div className="Descripcion">
                  <div className="Caja1">
                    <p className="tittledescription">Descripción: </p>
                    <p className="postdescription"> {post.description}</p>
                  </div>
                </div>
                <div className="Locacion">
                  <div className="Caja1">
                    <p className="tittledescription">Ubicación: </p>
                    <p>{post.location}</p>
                  </div>
                </div>
                <div className="Map">
                  <Map latitude={post.latitude} longitude={post.longitude} />
                </div>
                
                  <button onClick={() => handleDelete(post.id)} className="BotonSolucion">
                  Solicitud revisada</button>
                
              </div>
              {errorDelete && (
                <div style={{ color: "#fff" }}>{errorDelete}</div>
              )}
            </div>
          ))
        ) : (
          <div className="SinPost">
            <p>No hay posts</p>
          </div>
        )}
      </div>
    </>
  );
};

export default LoadPosts;
