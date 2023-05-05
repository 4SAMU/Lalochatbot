"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var styles = "\n.homepage {\n    width: 390px;\n    height: 844px;\n    background-color: #f4f4f4;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    margin: 0 50px 80px 0;\n  }\n  \n  * {\n    margin: 0;\n    font-family: Inter;\n  }\n  \n  .mainpage {\n    background-color: #00c8b4;\n    height: 46%;\n  }\n  .first-div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n    padding: 20px 35px;\n    height: 100px;\n  }\n  .first-div h1 {\n    font-size: 30px;\n    color: #fff;\n    font-weight: 600;\n    line-height: 36px;\n  }\n  .close-icon {\n    background-color: #199589;\n    padding: 12px;\n    position: absolute;\n    right: 35px;\n    top: 40px;\n    color: #fff;\n    font-size: 25px;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n  \n  .second-div {\n    position: absolute;\n    left: 50%;\n    top: 23%;\n    transform: translate(-50%, 50%);\n    background-color: #fff;\n    padding: 4%;\n    width: 340px;\n    font-size: 20px;\n    border-radius: 10px;\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n  }\n  .second-div p {\n    border-radius: 5px;\n    background-color: rgba(217, 217, 217, 0.5);\n    padding: 4%;\n    font-weight: 600;\n  }\n  .second-div .links {\n    display: flex;\n    justify-content: space-between;\n    margin: 5% 1px;\n  }\n  .second-div .links span {\n    text-decoration: none;\n    color: #2b2b2b;\n    font-size: 16px;\n    cursor: pointer;\n  }\n  .second-div .links .right-icon {\n    color: #199589;\n    height: 20px;\n  }\n  .third-div {\n    position: absolute;\n    top: 430px;\n    left: 50%;\n    transform: translate(-50%, 50%);\n    padding: 20px 15px;\n    background-color: #f4f4f4;\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    width: 342px;\n    height: 129px;\n  }\n  #p {\n    font-size: 16px;\n    font-weight: 600;\n    padding: 15px 2px;\n  }\n  .third-div .chat {\n    display: flex;\n    gap: 7px;\n  }\n  .third-div .chat .circle {\n    width: 44px;\n    height: 44px;\n    background: #1c8633;\n    border-radius: 50%;\n  }\n  .third-div .chat .tchat p {\n    font-size: 15px;\n    font-weight: 500;\n  }\n  .fourth-div {\n    position: absolute;\n    bottom: 120px;\n    width: 380px;\n    height: 67px;\n    left: 50%;\n    background-color: #fff;\n    transform: translate(-50%, 50%);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .fourth-div .form {\n    position: absolute;\n    top: 0;\n    width: 97%;\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: baseline;\n    right: 0;\n  }\n  \n  .fourth-div .form input::placeholder {\n    font-family: \"Inter\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 19px;\n    color: #000000;\n  }\n  .fourth-div .form button {\n    border: none;\n    background-color: #fff;\n    height: 85%;\n    cursor: pointer;\n    transition: all 0.1s ease-in-out;\n  }\n  \n  .send-icon {\n    text-decoration: none;\n    color: #199589;\n    font-size: 30px;\n  }\n  .fifth-div {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    height: 72px;\n    background: #ffffff;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n  }\n  .icons {\n    color: #199589;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    padding: 20px 1px;\n  }\n  \n  /*----------------ChatPage-------------------*/\n  .chat_Page {\n    position: absolute;\n    width: 390px;\n    height: 844px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .chat_component {\n    position: relative;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 560px;\n  }\n  .chat-div1 {\n    background-color: #00c8b4;\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1px 3%;\n  }\n  .chat-div1 p {\n    color: #fff;\n    font-size: 20px;\n    font-weight: 600;\n  }\n  .chat-div2 {\n    padding: 3%;\n  }\n  .chat-div3 {\n    display: flex;\n    gap: 5px;\n    padding: 3%;\n  }\n  .chat-div3 p {\n    max-width: 65%;\n    background-color: #ebebeb;\n    border: 0px solid #ebebeb;\n    border-radius: 0px 10px 10px 10px;\n    padding: 3%;\n  }\n  .chat-div4 {\n    width: auto;\n    max-width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n  .chat-div4 p {\n    background-color: #ebebeb;\n    border: 0px solid #ebebeb;\n    border-radius: 10px 0px 10px 10px;\n    padding: 13px;\n    margin: 10px 20px;\n    display: flex;\n    justify-content: flex-end;\n    align-self: right;\n    max-width: 70%;\n  }\n  .chat-div5 {\n    position: absolute;\n    bottom: 108px;\n    width: 380px;\n    height: 67px;\n    left: 50%;\n    background-color: #fff;\n    transform: translate(-50%, 50%);\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .chat-div5 .form {\n    position: absolute;\n    width: 97%;\n    display: flex;\n    height: 100%;\n    align-items: center;\n  }\n  \n  .form input {\n    border: none;\n    width: 80%;\n    font-weight: 400;\n    font-size: 16px;\n    color: #000;\n    height: 85%;\n    border: none;\n    outline: 0;\n    font-family: \"Inter\";\n    font-style: normal;\n    font-size: 16px;\n    line-height: 19px;\n  }\n  \n  .chat-div5 .form input::placeholder {\n    font-family: \"Inter\";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 19px;\n    color: #000000;\n  }\n  .chat-div5 .form button {\n    border: none;\n    background-color: #fff;\n    height: 85%;\n    cursor: pointer;\n    transition: all 0.1s ease-in-out;\n  }\n  \n  .form button:active {\n    transform: translateY(2px);\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  }\n  \n  /*----------------Help Page-----------*/\n  .accordion-div {\n    padding: 2% 4%;\n  }\n  .accordion {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 20px;\n    border-radius: 10px;\n  }\n  .item {\n    margin-bottom: 5px;\n    padding: 10px 20px;\n  }\n  .title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    font-size: 15px;\n  }\n  .content {\n    color: rgb(83, 15, 15);\n    max-height: 0;\n    overflow: hidden;\n    transition: all 0.5s cubic-bezier(0, 1, 0, 1);\n  }\n  .content.show {\n    height: auto;\n    max-height: 9999px;\n    transition: all 0.5s cubic-bezier(0, 1, 0, 1);\n  }\n  \n  @media screen and (max-width: 1500px) {\n    .homepage {\n      height: 90vh;\n      margin: 0 30px 60px 0;\n    }\n    .chat_Page {\n      height: 100%;\n    }\n    .chat_component {\n      height: 55.9%;\n    }\n    .second-div {\n      top: 20px;\n      height: 160px;\n    }\n    .third-div {\n      top: 255px;\n      height: 80px;\n    }\n    .fourth-div {\n      bottom: 108px;\n    }\n  \n    .content.show {\n      height: auto;\n      max-height: 200px !important;\n      overflow: scroll;\n      transition: all 0.5s cubic-bezier(0, 1, 0, 1);\n    }\n  }\n  @media screen and (min-height: 1700px) {\n    .homepage {\n      height: 844px;\n    }\n    .chat_component {\n      position: relative;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      height: 470px;\n    }\n    .second-div {\n      top: 23%;\n    }\n    .third-div {\n      top: 460px;\n      height: 100px;\n    }\n  }\n  \n  @media screen and (max-width: 450px) {\n    .homepage {\n      height: 100%;\n      width: 100%;\n      margin: 0;\n    }\n    .chat_Page {\n      width: 100vw;\n      height: 100vh;\n    }\n    .chat_component {\n      height: 63%;\n    }\n  \n    .second-div {\n      top: 30px;\n    }\n    .third-div {\n      top: 300px;\n      height: 80px;\n    }\n  }\n  \n";
exports.styles = styles;