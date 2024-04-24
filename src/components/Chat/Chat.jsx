import { data_train } from "./data_train";
import { IoSend } from "react-icons/io5";
// import { FaMicrophone } from "react-icons/fa";
// import { FaMicrophoneSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Chat.css";

const systemMessage = {
  role: "system",
  content: data_train,
};

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
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
  const [usersInRoom, setUsersInRoom] = useState(1);
  useEffect(() => {
    socket.on("users_in_room", (usersCount) => {
      setUsersInRoom(usersCount);
    });
    return () => {
      socket.off("users_in_room");
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
        await processMessageToChatGPT([...messagesList, infoMessage]);
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
      }
    }
  };
  async function processMessageToChatGPT(chatMessages) {
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
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessagesList((list) => [
          ...list,
          {
            content: data.choices[0].message.content,
            room,
            username: "MQMC",
            sender: "MQMC",
          },
        ]);
      });
  }

  useEffect(() => {
    const handleMessage = (data) => {
      setMessagesList((list) => [...list, data]);
    };
    socket.on("receive_message", handleMessage);
    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [socket]);

  return (
    <div className="chat-messages-box">
      {username === "Investigador" ? (
        <section className="chat-header">
          <h2>{`Sala: ${room} - Usuario: ${username}`}</h2>
        </section>
      ) : null}
      <section className="chat-body">
        {messagesList.map((message, index) => {
          return (
            <div
              key={index}
              className={`${message.author === username ? "message-right" : "message-left"
                }
                ${message.sender === "MQMC"
                  ? "message-system"
                  : message.author === "Investigador"
                    ? "message-investigador"
                    : "message-user"
                }
                `}
            >
              <p>{message.content}</p>
            </div>
          );
        })}
      </section>
      <section className="chat-footer">
        <div className="input-message">
          <input
            type="text"
            placeholder="Escribe tu mensaje"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
        </div>
        <div className="send">
          <button onClick={sendMessage}>
            <IoSend />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Chat;
// import { useEffect, useState, useRef } from "react";
// import "./Chat.css";

// const API_KEY = "sk-proj-SnFcLiY3idOvuWThnxu7T3BlbkFJGH6JJY4OyjTEkwlNrOEK";
// const systemMessage = {
//   role: "system",
//   content: data_train,
// };

// const Chat = ({ socket, username, room }) => {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messagesList, setMessagesList] = useState(
//     username === "Investigador"
//       ? []
//       : [
//         {
//           content: "Hola, soy el bot de MQMC, ¿en qué puedo ayudarte?",
//           room,
//           username: "MQMC",
//           author: "MQMC",
//           sender: "MQMC",
//         },
//       ]
//   );
//   const [usersInRoom, setUsersInRoom] = useState(1);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     socket.on("users_in_room", (usersCount) => {
//       setUsersInRoom(usersCount);
//     });
//     return () => {
//       socket.off("users_in_room");
//     };
//   }, [socket]);

//   useEffect(() => {
//     if (recordedChunks.length > 0) {
//       const blob = new Blob(recordedChunks, { type: "audio/webm" });
//       const audioUrl = URL.createObjectURL(blob);
//       setRecordedChunks([]);
//       setMessagesList((list) => [
//         ...list,
//         {
//           content: audioUrl,
//           room,
//           username,
//           author: username,
//           sender: "user",
//           isAudio: true,
//         },
//       ]);
//     }
//   }, [recordedChunks, room, username]);

//   const startRecording = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = true;
//     recognition.lang = "es-ES";

//     recognition.onstart = () => {
//       setIsRecording(true);
//     };

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setCurrentMessage((prevMessage) => prevMessage + transcript);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       setIsRecording(false);
//     };

//     recognition.onend = () => {
//       setIsRecording(false);
//       recognition.stop();
//     };

//     recognition.start();
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//   };

//   //
//   const sendMessage = async () => {
//     if (usersInRoom === 1) {
//       if (username && room) {
//         const infoMessage = {
//           room,
//           username,
//           content: currentMessage,
//           direction: "outgoing",
//           author: username,
//           sender: "user",
//         };
//         await socket.emit("send_message", infoMessage);
//         setMessagesList((list) => [...list, infoMessage]);
//         await processMessageToChatGPT([...messagesList, infoMessage]);
//         setCurrentMessage(""); // Vaciar el input después de enviar el mensaje
//       }
//     } else {
//       if (username && room) {
//         const infoMessage = {
//           room,
//           username,
//           content: currentMessage,
//           direction: "outgoing",
//           author: username,
//           sender: "user",
//         };
//         await socket.emit("send_message", infoMessage);
//         setMessagesList((list) => [...list, infoMessage]);
//         setCurrentMessage(""); // Vaciar el input después de enviar el mensaje
//       }
//     }
//   };

//   async function processMessageToChatGPT(chatMessages) {
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "MQMC") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.content };
//     });
//     const apiRequestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [systemMessage, ...apiMessages],
//     };
//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: "Bearer " + API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiRequestBody),
//     })
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         setMessagesList((list) => [
//           ...list,
//           {
//             content: data.choices[0].message.content,
//             room,
//             username: "MQMC",
//             sender: "MQMC",
//           },
//         ]);
//       });
//   }

//   return (
//     <div className="chat-messages-box">
//       <section className="chat-header">
//         {
//           username === "Investigador" ? (
//             <h2>{`Sala: ${room} - Usuario: ${username}`}</h2>)
//             : (
//               <h2>{`Hablando con : ${username}...`}</h2>
//             )
//         }
//       </section>
//       <section className="chat-body">
//         {messagesList.map((message, index) => {
//           return (
//             <div
//               key={index}
//               className={`${message.author === username ? "message-right" : "message-left"
//                 }
//                 ${message.sender === "MQMC"
//                   ? "message-system"
//                   : message.author === "Investigador"
//                     ? "message-investigador"
//                     : "message-user"
//                 }
//                 `}
//             >
//               {message.isAudio ? (
//                 <audio controls ref={audioRef}>
//                   <source src={message.content} type="audio/webm" />
//                   Your browser does not support the audio element.
//                 </audio>
//               ) : (
//                 <p>{message.content}</p>
//               )}
//             </div>
//           );
//         })}
//       </section>
//       <section className="chat-footer">
//         <div className="input-message">
//           <input
//             type="text"
//             placeholder="Escribe tu mensaje"
//             value={currentMessage}
//             onChange={(e) => setCurrentMessage(e.target.value)}
//           />
//         </div>
//         <div className="microfone">
//           {isRecording ? (
//             <button onClick={stopRecording}>
//               <FaMicrophoneSlash />
//             </button>
//           ) : (
//             <button onClick={startRecording}>
//               <FaMicrophone />
//             </button>
//           )}
//         </div>
//         <div className="send">
//           <button onClick={sendMessage}>
//             <IoSend />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Chat;
