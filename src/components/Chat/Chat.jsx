import { prompt, data_train_joven, data_train_adolecente } from "./data_train";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import RoomContext from "../../contexts/RoomContext/RoomContext";
// import Video from "../Video/Video";
import ReactPlayer from "react-player";
import "./Chat.css";

const API_KEY = "sk-proj-rMsUwuDkK8YsbZeY4l4dT3BlbkFJk6Xk9JEeOgHaYcppKP17";

const Chat = ({ socket, username, room, ageGroup }) => {
  console.log("ageGroup", ageGroup);
  const { updateListChatRoomAvailable } = useContext(RoomContext);
  const [currentMessage, setCurrentMessage] = useState("");
  const [noUnderstandingCount, setNoUnderstandingCount] = useState(0);
  const [messagesList, setMessagesList] = useState(
    username === "Investigador"
      ? []
      : [
          {
            content: "Hola, soy el bot de ÁUREA, ¿En qué puedo ayudarte?",
            room,
            username: "MQMC",
            author: "MQMC",
            sender: "MQMC",
          },
        ],
  );
  const [trainingData, setTrainingData] = useState([]);
  const fetchDataTrain = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/qa");
      const data = await response.json();
      const ge = ageGroup ? "Jóvenes" : "Adolescentes";
      const filterData = data.filter((item) => item.ageGroup === ge);

      setTrainingData(filterData);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchDataTrain();
  }, []);
  console.log("trainingData", trainingData);
  const systemMessage = {
    role: "system",
    content: `Siempre en formato JSON: con ${prompt} para las preguntas : ${JSON.stringify(
      trainingData,
    )}`,
  };
  const [usersInRoom, setUsersInRoom] = useState(1);
  const [speechRecognitionActive, setSpeechRecognitionActive] = useState(false);

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
        setCurrentMessage("");
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
      response_format: { type: "json_object" },
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
        console.log("data", data);
        const dataJson = JSON.parse(data.choices[0].message.content);
        console.log("dataJson", dataJson);
        const { respuesta, video } = JSON.parse(
          data.choices[0].message.content,
        );

        console.log("dataJson", dataJson);
        if (
          respuesta === "No entiendo la pregunta, por favor intenta de nuevo."
        ) {
          setNoUnderstandingCount(noUnderstandingCount + 1);
        }
        if (
          noUnderstandingCount >= 2 &&
          respuesta === "No entiendo la pregunta, por favor intenta de nuevo."
        ) {
          updateListChatRoomAvailable(room);
          setMessagesList((list) => [
            ...list,
            {
              content:
                "Espera un momento a que se una un investigador para responder a tu pregunta.",
              room,
              username: "MQMC",
            },
          ]);
        } else {
          setMessagesList((list) => [
            ...list,
            {
              content: respuesta,
              video,
              room,
              username: "MQMC",
              sender: "MQMC",
            },
          ]);
        }
      });
  }

  const startSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
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
            <p>
              {message.content}
              {message.video && (
                <div className="iframe-wrapper">
                  <iframe src={message.video} allowfullscreen></iframe>
                </div>
              )}
            </p>
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
