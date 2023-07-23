import React from "react";
import { useState, useEffect, ChangeEvent } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<Array<any>>([]);
  const [ws, setWS] = useState<any>();
  const messageBlock = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWS(
      new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      )
    );
  }, []);

  if (ws) {
    ws.onmessage = (m: MessageEvent) => {
      let newMessage = JSON.parse(m.data);
      console.log(newMessage);
      setUser([...user, ...newMessage]);
      messageBlock.current?.scrollTo(0, messageBlock.current.scrollHeight);
    };
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };
  const send = () => {
    if (ws) {
      ws.send(message);
      setMessage("");
    }
  };

  return (
    <div
      className="container"
      style={{ margin: "0 auto", border: "1px solid red" }}
    >
      <div ref={messageBlock} className="message">
        {user.map((u, i) => (
          <div style={{ display: "flex" , alignItems: 'center'}} key={i}>
            <div>
              <img
                src={
                  u.photo
                    ? u.photo
                    : "https://static.thenounproject.com/png/801408-200.png"
                }
                alt="#"
                style={{ width: "50px" }}
              />
              <p>{u.userName}</p>
            </div>

            <p>{u.message}</p>
          </div>
        ))}
      </div>
      <div>
        <textarea onChange={onMessageChange} value={message}></textarea>
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
