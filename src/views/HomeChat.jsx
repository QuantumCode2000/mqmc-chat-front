// import { useState } from "react";
// import io from "socket.io-client";
// const socket = io("http://localhost:3001");
// import Chat from "../components/Chat/Chat";
// const HomeChat = () => {
//     const [username, setUsername] = useState("");
//     const [room, setRoom] = useState("");
//     const [showChat, setShowChat] = useState(false);
//     const joinRoom = () => {
//         if (username && room) {
//             socket.emit("join_room", room);
//             setShowChat(true);
//         }
//     };
//     return (
//         <div className="container">
//             {!showChat ? (
//                 <div className="box-join-room">
//                     <h3 className="header-unirme-chat">Responder Usuario</h3>
//                     <input
//                         className="input-username"
//                         type="text"
//                         placeholder="Nombre de usuario"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <input
//                         className="input-room"
//                         type="text"
//                         placeholder="Nombre de sala"
//                         value={room}
//                         onChange={(e) => setRoom(e.target.value)}
//                     />
//                     <button onClick={joinRoom}>Unirme a sala</button>
//                 </div>
//             ) : (
//                 <Chat socket={socket} username={username} room={room} />
//             )}
//         </div>
//     )
// }

// export default HomeChat

import { useState } from "react";
import io from "socket.io-client";
// const socket = io("http://localhost:3001");
import Chat from "../components/Chat/Chat";
import Questions from "./Questions";

const HomeChat = ({ socket }) => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [isJoven, setIsJoven] = useState(false); // [1
    const generateRoom = () => {
        // Genera un número de sala aleatorio
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
            {isJoven === false ? (
                <Questions setIsJoven={setIsJoven} />
            ) : (
                <>
                    {!room && (
                        <div className="box-generate-room">
                            <h3>
                                Hola como estas deseas charlar conmigo....</h3>
                            <button onClick={generateRoom}>
                                Si
                            </button>
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
                            <button onClick={joinRoom}>Empezar la conversación </button>
                            {/* <button onClick={joinRoom}>Empezar la conversación {room}</button> */}
                        </div>
                    )}
                </>
            )}

            {showChat && <Chat socket={socket} username={username} room={room} />}
        </div>
    );
};

export default HomeChat;
