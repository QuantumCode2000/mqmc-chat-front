// import { useState, useEffect } from "react";
// import Chat from "../components/Chat/Chat";
// import "./SalasInv.css"

// const SalasInv = ({ socket }) => {
//     const [username, setUsername] = useState("Investigador");
//     const [salas, setSalas] = useState([]);
//     const [room, setRoom] = useState("");
//     const [showChat, setShowChat] = useState(false);

//     const joinRoom = (sala) => {
//         setRoom(sala);
//         if (username && room) {
//             socket.emit("join_room", room);
//             setShowChat(true);
//         }
//     };

//     useEffect(() => {
//         fetch("http://localhost:3001/salas")
//             .then((response) => response.json())
//             .then((data) => {
//                 let nombresSalas = data.rooms.filter((sala) => sala.length < 5);
//                 setSalas(nombresSalas);
//             })
//             .catch((error) => {
//                 console.error("Error fetching rooms:", error);
//             });
//     }, []);

//     return (
//         <div className="box">
//             <h2 className="salas-container" >Chats Activos:</h2>
//             <ul>
//                 {salas.map((sala, index) => (
//                     <button onClick={() => joinRoom(sala)} key={index}>
//                         {sala}
//                     </button>
//                 ))}
//             </ul>
//             {showChat && <Chat socket={socket} username={username} room={room} />}
//         </div>
//     );
// };

// export default SalasInv;

// import { useState, useEffect } from "react";
// import Chat from "../components/Chat/Chat";
// import SalasContainer from "../components/SalasContainer";
// import "./SalasInv.css"

// const SalasInv = ({ socket }) => {
//     const [salas, setSalas] = useState([]);
//     const [room, setRoom] = useState("");
//     const [showChat, setShowChat] = useState(false);

//     const joinRoom = (sala) => {
//         console.log("Uniendo a una nueva sala", sala)
//         setRoom(sala);
//         if (room) {
//             socket.emit("join_room", room);
//             console.log("Uniendose a una nueva")
//             setShowChat(true);

//         }
//     };

//     useEffect(() => {
//         const fetchSalas = () => {
//             fetch("http://localhost:3001/salas")
//                 .then((response) => response.json())
//                 .then((data) => {
//                     let nombresSalas = data.rooms.filter((sala) => sala.length < 5);
//                     setSalas(nombresSalas);
//                 })
//                 .catch((error) => {
//                     console.error("Error fetching rooms:", error);
//                 });
//         };

//         fetchSalas();
//         const intervalId = setInterval(fetchSalas, 30000);
//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className="box">
//             <SalasContainer salas={salas} joinRoom={joinRoom} />
//             <div className="chat-messages-box-salas">
//                 {showChat && <Chat socket={socket} username={"Investigador"} room={room} />}
//             </div>
//         </div>
//     );
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
        // Limpiar el estado del chat anterior
        setShowChat(false);
        // Unirse a la nueva sala
        setRoom(sala);
    };

    useEffect(() => {
        const fetchSalas = () => {
            fetch("http://localhost:3001/salas")
                .then((response) => response.json())
                .then((data) => {
                    let nombresSalas = data.rooms.filter((sala) => sala.length < 5);
                    setSalas(nombresSalas);
                })
                .catch((error) => {
                    console.error("Error fetching rooms:", error);
                });
        };

        fetchSalas();
        const intervalId = setInterval(fetchSalas, 30000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Unirse a la sala cuando `room` cambie
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
                {showChat && <Chat socket={socket} username={"Investigador"} room={room} />}
            </div>
        </div>
    );
};

export default SalasInv;

