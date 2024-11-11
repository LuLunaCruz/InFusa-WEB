import "./Map.css";

const Map = ({ latitude, longitude }) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=18&maptype=roadmap`;

    return (
      <div style={{ width: '100%', height: '100%'}}>
        <iframe
          title="Mapa de Google"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    );
  };

export default Map;
