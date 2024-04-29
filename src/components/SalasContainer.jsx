import SalaCard from "./SalaCard";

const SalasContainer = ({ salas, joinRoom }) => {
  console.log("salas", salas);

  // Verificar si hay salas disponibles
  if (salas.length > 0) {
    return (
      <div className="salas-container">
        {salas.map((sala, index) => (
          <SalaCard
            key={index} // Agregar una clave única para cada SalaCard
            sala={sala.room}
            index={index}
            joinRoom={joinRoom}
            disponible={sala.disponible}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="no-salas-message">
        No hay chats disponibles en este momento.
      </div>
    );
  }
};

export default SalasContainer;
