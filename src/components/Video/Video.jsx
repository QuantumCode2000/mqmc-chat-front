import React from "react";

const Video = ({ videoLink }) => {
  // Convertir el enlace de YouTube a un formato de incrustación si es necesario
  const embedLink = videoLink.replace("watch?v=", "embed/");

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={embedLink}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
