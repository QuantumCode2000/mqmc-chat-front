// import { useState, useEffect } from "react";
// import Chat from "../components/Chat/Chat";
// import SalasContainer from "../components/SalasContainer";
// import "./SalasInv.css";

// const SalasInv = ({ socket }) => {
//   const [salas, setSalas] = useState([]);
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = (sala) => {
//     console.log("Uniendo a una nueva sala", sala);
//     setShowChat(false);
//     setRoom(sala);
//   };

//   useEffect(() => {
//     const chatsDisponibles =
//       JSON.parse(localStorage.getItem("listChatRoomAvailable")) || [];
//     const fetchSalas = () => {
//       fetch("http://localhost:3001/salas")
//         .then((response) => response.json())
//         .then((data) => {
//           let nombresSalas = data.rooms.filter((sala) => sala.length < 5);
          
//           setSalas(nombresSalas);
//         })
//         .catch((error) => {
//           console.error("Error fetching rooms:", error);
//         });
//     };

//     fetchSalas();
//     const intervalId = setInterval(fetchSalas, 30000);
//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (room) {
//       socket.emit("join_room", room);
//       console.log("Uniendose a una nueva sala:", room);
//       setShowChat(true);
//     }
//   }, [room, socket]);

//   return (
//     <div className="box">
//       <SalasContainer salas={salas} joinRoom={joinRoom} />
//       <div className="chat-messages-box-salas">
//         {showChat && (
//           <Chat socket={socket} username={"Investigador"} room={room} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SalasInv;
import { useState, useEffect } from "react";
import Chat from "../components/Chat/Chat";
import SalasContainer from "../components/SalasContainer";
import "./SalasInv.css";

const SalasInv = ({ socket }) => {
  const [salas, setSalas] = useState([]);
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = (sala) => {
    console.log("Uniendo a una nueva sala", sala);
    setShowChat(false);
    setRoom(sala);
  };

  useEffect(() => {
    const fetchSalas = () => {
      fetch("http://localhost:3001/salas")
        .then((response) => response.json())
        .then((data) => {
          const chatsDisponibles =
            JSON.parse(localStorage.getItem("listChatRoomAvailable")) || [];
          const nombresSalas = data.rooms.filter((sala) => sala.length < 5);

          // Actualizar el estado de las salas con la disponibilidad
          const updatedSalas = nombresSalas.map((sala) => ({
            room: sala,
            disponible: chatsDisponibles.includes(sala),
          }));
          setSalas(updatedSalas);
        })
        .catch((error) => {
          console.error("Error fetching rooms:", error);
        });
    };
    console.log("fetchSalas", salas);

    fetchSalas();
    const intervalId = setInterval(fetchSalas, 30000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (room) {
      socket.emit("join_room", room);
      console.log("Uniendose a una nueva sala:", room);
      setShowChat(true);
    }
  }, [room, socket]);

  return (
    <div className="box">
      <SalasContainer salas={salas} joinRoom={joinRoom} />
      <div className="chat-messages-box-salas">
        {showChat && (
          <Chat socket={socket} username={"Investigador"} room={room} />
        )}
      </div>
    </div>
  );
};

export default SalasInv;
