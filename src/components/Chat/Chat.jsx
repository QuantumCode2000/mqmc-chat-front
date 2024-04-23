import { useEffect, useState } from "react";
import "./Chat.css";
const API_KEY = "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";
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
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
  console.log(usersInRoom);
  useEffect(() => {
    socket.on("users_in_room", (usersCount) => {
      setUsersInRoom(usersCount);
    });
    return () => {
      socket.off("users_in_room");
    };
  }, [socket]);

  const sendMessage = async () => {
    if (usersInRoom === 1) {
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
        // await processMessageToChatGPT([...messagesList, infoMessage]);
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
      <section className="chat-header">
        <h2>{`Sala: ${room} - Usuario: ${username}`}</h2>
      </section>
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
              

              {/* <span>{message.author}</span>
              <span>{message.time}</span> */}
            </div>
          );
        })}
      </section>
      <section className="chat-footer">
        <input
          type="text"
          placeholder="Escribe tu mensaje"
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </section>
    </div>
  );
};

export default Chat;
