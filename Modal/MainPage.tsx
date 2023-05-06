import { IoMdClose, IoIosSend } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const MainPage = (props: any) => {
  const { closeApp } = props;
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSendClick = (quickPrompt: any) => {
    navigate("/chat", { state: { message: quickPrompt } });
  };

  const quickActions = [
    { label: "How do I make an order?" },
    { label: "How do I search for restaurants?" },
    { label: "How do I make a reservation?" },
  ];
  return (
    <div className="mainpage">
      <div className="first-div">
        <h1>
          Hello,
          <br /> How may we help?
        </h1>
        <IoMdClose className="close-icon" onClick={closeApp} />
      </div>
      <div>
        <div className="second-div">
          <p>Quick actions</p>
          {quickActions.map((action, i: any) => (
            <div className="links" key={i}>
              <span onClick={() => handleSendClick(action.label)}>
                {action.label}
              </span>
              <BsChevronRight className="right-icon" />
            </div>
          ))}
        </div>
        <div className="third-div">
          <p id="p">Recent Chat</p>
          <div className="chat">
            <div className="circle"></div>
            <div className="tchat">
              <p>Hello, how may I assist you?</p>
              <p>Joan . 3 weeks ago</p>
            </div>
          </div>
        </div>
        <div className="fourth-div">
          <div className="form">
            <input
              placeholder="Write here..."
              value={prompt}
              onChange={(e: any) => setPrompt(e.target.value)}
              onKeyDown={(event) => {
                event.key === "Enter" && handleSendClick(prompt);
              }}
            />
            <button onClick={() => handleSendClick(prompt)}>
              <IoIosSend className="send-icon" />
            </button>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default MainPage;
