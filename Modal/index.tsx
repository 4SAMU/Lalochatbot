import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import HelpPage from "./HelpPage";
import ChatPage from "./ChatPage";
import { styles } from "./style";

const HomePage = (props: any) => {
  const { closeApp } = props;
  return (
    <>
      <style>{styles}</style>
      <BrowserRouter>
        <div className="homepage">
          <Routes>
            <Route path="/" element={<MainPage closeApp={closeApp} />} />
            <Route path="/chat" element={<ChatPage closeApp={closeApp} />} />
            <Route path="/help" element={<HelpPage closeApp={closeApp} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default HomePage;
