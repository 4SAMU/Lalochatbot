import { useEffect, useRef, useState } from "react";
import { IoMdClose, IoIosArrowBack, IoIosSend } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { getDate } from "./util/GetDate";
import Navbar from "./Navbar";
import React from "react";

const ChatPage = (props: any) => {
  const { closeApp } = props;
  const param = useLocation();
  const message = param.state?.message;
  const [prompt, setPrompt] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const initialPrompt = {
    type: "chat-div3",
    message: `Hey, how can I help you`,
    timestamp: `1234`,
  };

  if (!localStorage.getItem("cachedConversation")) {
    localStorage.setItem("cachedConversation", JSON.stringify([initialPrompt]));
  }
  const getConversation: any = JSON.parse(
    localStorage.getItem("cachedConversation") || ""
  );

  const [conversation, setConversation] = useState(
    getConversation || [initialPrompt]
  );

  const handleSubmit = async () => {
    //removes any leading and trailing whitespace from the user's input
    const trimmedMessage = prompt.trim();
    if (trimmedMessage !== "") {
      const messageList = {
        type: "chat-div4",
        message: trimmedMessage,
        timestamp:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setConversation((list: any) => [...list, messageList]);
      setPrompt("");
      try {
        let response: any = await fetch(
          `https://lalobots.devgeni.ai/api/generate?message=${trimmedMessage}&user_id=${userId}`,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log("here", data);

        const botResponse = {
          type: "chat-div3",
          message: data.message,
          timestamp:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };

        if (data.message) {
          setConversation((list: any) => [...list, botResponse]);
          localStorage.setItem("userId", data.user_id);
          setUserId(data.user_id);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat component when conversation state changes
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  useEffect(() => {
    localStorage.setItem("cachedConversation", JSON.stringify(conversation));
  }, [conversation]);

  useEffect(() => {
    async function quickResponse() {
      if (message) {
        const trimmedMessage = message.trim();
        if (trimmedMessage !== "") {
          const messageList = {
            type: "chat-div4",
            message: trimmedMessage,
            timestamp:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
          setConversation((list: any) => [...list, messageList]);
          setPrompt("");
          try {
            const response: any = await fetch(
              `https://lalobots.devgeni.ai/api/generate?message=${trimmedMessage}&user_id=${userId}`,
              {
                method: "post",
                headers: { "Content-Type": "application/json" },
              }
            );
            const data = await response.json();

            const botResponse = {
              type: "chat-div3",
              message: data.message,
              timestamp:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            };

            if (data.message) {
              setConversation((list: any) => [...list, botResponse]);
              localStorage.setItem("userId", data.user_id);
              setUserId(data.user_id);
            }
          } catch (error) {
            console.log("error", error);
          }
        }
      }
    }

    return () => {
      quickResponse();
    };
  }, []);

  return (
    <div className="chat_Page">
      <div className="chat-div1">
        <Link to="/">
          <IoIosArrowBack style={{ color: "#fff", fontSize: "35px" }} />
        </Link>
        <p>Ngeni.io</p>

        <IoMdClose
          style={{ color: "#fff", fontSize: "35px", cursor: "pointer" }}
          onClick={closeApp}
        />
      </div>
      <div className="chat-div2">
        <p style={{ textAlign: "center" }}>{getDate()}</p>
      </div>
      <div className="chat_component">
        {conversation?.map((item: any, index: any) => {
          if (item.type === "chat-div3") {
            return (
              <div key={index}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 9fr",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={require("./Assets/LLogo.png")}
                    alt=""
                    style={{ width: "20px", height: "20px", margin: "auto" }}
                  />
                  <div className={item.type}>
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className={item.type}>
                <p>{item.message}</p>
              </div>
            );
          }
        })}
        {/* hidden div to reference for scrolling */}
        <div ref={chatRef} style={{ visibility: "hidden" }} />
      </div>

      <div className="chat-div5">
        <div className="form">
          <input
            placeholder="Write here..."
            value={prompt}
            onChange={(v: any) => setPrompt(v.target.value)}
            onKeyDown={(event) => {
              event.key === "Enter" && handleSubmit();
            }}
          />
          <button onClick={handleSubmit}>
            <IoIosSend className="send-icon" />
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ChatPage;
