import { useState } from "react";
import io from "socket.io-client";
// const socket = io("http://localhost:3001");
import Chat from "../components/Chat/Chat";
import Questions from "./Questions";
import "./HomeChat.css";

const HomeChat = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0)
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isJoven, setIsJoven] = useState(""); // [1
  const generateRoom = () => {
    const newRoom = Math.floor(Math.random() * 1000) + 1;
    setRoom(newRoom.toString()); // Convierte el número de sala en una cadena de texto
  };

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="container">
      {isJoven === "" ? (
        <Questions setIsJoven={setIsJoven}/>
      ) : (
        <>
          {!room && (
            <div className="box-generate-room">
              <h3>Hola como estas deseas charlar conmigo....</h3>
              <button onClick={generateRoom}>Si</button>
            </div>
          )}
          {room && !showChat && (
            <div className="box-join-room">
              <input
                className="input-username"
                type="text"
                placeholder="Como puedo llamarte ....?"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input-username"
                type="number"
                placeholder="que edad tienes?"
                value={age}
                onChange={(e) => {
                    (e.target.value > 12) ? setIsJoven(true) : setIsJoven(false)
                    setAge(e.target.value)
                  }}
              />
              <button onClick={joinRoom}>Empezar la conversación </button>
              {/* <button onClick={joinRoom}>Empezar la conversación {room}</button> */}
            </div>
          )}
        </>
      )}
      {/* <div className="chatbot"> */}
      {showChat && (
        <Chat socket={socket} username={username} room={room} ageGroup={isJoven} />
      )}
      {/* </div> */}
    </div>
  );
};

export default HomeChat;
