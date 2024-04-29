import { data_train_joven,data_train_adolecente } from "./data_train";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import RoomContext from "../../contexts/RoomContext/RoomContext";
import "./Chat.css";

const API_KEY = "sk-proj-PQZzNO9dNRuxMZHmBxhAT3BlbkFJLvL5uaw29S4eMhO52YwI";

const Chat = ({ socket, username, room, ge }) => {
  const { updateListChatRoomAvailable } = useContext(RoomContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [noUnderstandingCount, setNoUnderstandingCount] = useState(0);
  const [messagesList, setMessagesList] = useState(
    username === "Investigador"
      ? []
      : [
          {
            content: "Hola, soy el bot de MQMC, ¿en qué puedo ayudarte?",
            room,
            username: "MQMC",
            author: "MQMC",
            sender: "MQMC",
          },
        ]
  );
  const systemMessage = {
    role: "system",
    content: ge === "Joven" ? data_train_joven : data_train_adolecente,
  };
  const [usersInRoom, setUsersInRoom] = useState(1);
  const [speechRecognitionActive, setSpeechRecognitionActive] = useState(false); // Nuevo estado para controlar el reconocimiento de voz

  useEffect(() => {
    const handleUsersInRoom = (usersCount) => {
      setUsersInRoom(usersCount);
    };

    socket.on("users_in_room", handleUsersInRoom);

    return () => {
      socket.off("users_in_room", handleUsersInRoom);
    };
  }, [socket]);

  useEffect(() => {
    // Función para manejar los mensajes recibidos
    const handleMessage = (data) => {
      setMessagesList((list) => [...list, data]);
    };

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [socket]);

  const sendMessage = async () => {
    if (usersInRoom === 1 && username !== "Investigador") {
      if (username && room) {
        const infoMessage = {
          room,
          username,
          content: currentMessage,
          direction: "outgoing",
          author: username,
          sender: "user",
        };
        await socket.emit("send_message", infoMessage);
        setMessagesList((list) => [...list, infoMessage]);
        setCurrentMessage(""); // Limpiar el input inmediatamente después de enviar el mensaje
        await processMessage([...messagesList, infoMessage]);
      }
    } else {
      if (username && room) {
        const infoMessage = {
          room,
          username,
          content: currentMessage,
          direction: "outgoing",
          author: username,
          sender: "user",
        };
        await socket.emit("send_message", infoMessage);
        setMessagesList((list) => [...list, infoMessage]);
        setCurrentMessage("");
      }
    }
  };

  async function processMessage(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "MQMC") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.content };
    });
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const botResponse = data.choices[0].message.content;
        if (
          botResponse === "No entiendo la pregunta, por favor intenta de nuevo."
        ) {
          setNoUnderstandingCount(noUnderstandingCount + 1);
        }
        if (
          noUnderstandingCount >= 2 &&
          botResponse === "No entiendo la pregunta, por favor intenta de nuevo."
        ) {
          updateListChatRoomAvailable(room);
          setMessagesList((list) => [
            ...list,
            // {
            //   ...data.choices[0].message,
            // },
            {
              content:
                "Espera un momento a que se una un investigador para responder a tu pregunta.",
              room,
              username: "MQMC",
              // sender: "MQMC",
            },
          ]);
        } else {
          setMessagesList((list) => [
            ...list,
            {
              content: data.choices[0].message.content,
              room,
              username: "MQMC",
              sender: "MQMC",
            },
          ]);
        }
      });
  }

  // Función para iniciar el reconocimiento de voz
  const startSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES"; // Configura el idioma del reconocimiento de voz
    recognition.onstart = () => {
      setSpeechRecognitionActive(true);
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setCurrentMessage(transcript);
      recognition.stop();
      setSpeechRecognitionActive(false);
    };
    recognition.onerror = (event) => {
      console.error("Error en el reconocimiento de voz:", event.error);
      recognition.stop();
      setSpeechRecognitionActive(false);
    };
    recognition.start();
  };

  return (
    <div className="chat-messages-box">
      {username === "Investigador" ? (
        <section className="chat-header">
          <h2>{`Sala: ${room} - Usuario: ${username}`}</h2>
        </section>
      ) : null}
      <section className="chat-body">
        {messagesList.map((message, index) => (
          <div
            key={index}
            className={`${
              message.author === username ? "message-right" : "message-left"
            } ${
              message.sender === "MQMC"
                ? "message-system"
                : message.author === "Investigador"
                ? "message-investigador"
                : "message-user"
            }`}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </section>
      <section className="chat-footer">
        <div className="input-message">
          <input
            type="text"
            placeholder="Escribe tu mensaje"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
        </div>
        <div className="send">
          <button onClick={sendMessage}>
            <IoSend />
          </button>
          <div className="sendvoice">
            <button
              onClick={startSpeechRecognition}
              disabled={speechRecognitionActive}
            >
              {speechRecognitionActive ? (
                <FaMicrophoneSlash />
              ) : (
                <FaMicrophone />
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
