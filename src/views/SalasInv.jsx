import { useState, useEffect } from "react";
import Chat from "../components/Chat/Chat";

const SalasInv = ({ socket }) => {
    const [username, setUsername] = useState("Investigador");
    const [salas, setSalas] = useState([]);
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = (sala) => {
        setRoom(sala);
        console.log(sala)
        if (username && room) {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    useEffect(() => {
        fetch("http://localhost:3001/salas")
            .then((response) => response.json())
            .then((data) => {
                let nombresSalas = data.rooms.filter((sala) => sala.length < 5);
                // setSalas(data.rooms);
                setSalas(nombresSalas);
            })
            .catch((error) => {
                console.error("Error fetching rooms:", error);
            });
    }, []);

    return (
        <div>
            <h2>Salas disponibles:</h2>
            <ul>
                {salas.map((sala, index) => (
                    <button onClick={() => joinRoom(sala)} key={index}>
                        {sala}
                    </button>
                ))}
            </ul>
            {showChat && <Chat socket={socket} username={username} room={room} />}
        </div>
    );
};

export default SalasInv;
