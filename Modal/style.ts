export const styles = `
.homepage {
    width: 390px;
    height: 844px;
    background-color: #f4f4f4;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 50px 80px 0;
  }
  
  * {
    margin: 0;
    font-family: Inter;
  }
  
  .mainpage {
    background-color: #00c8b4;
    height: 46%;
  }
  .first-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 20px 35px;
    height: 100px;
  }
  .first-div h1 {
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    line-height: 36px;
  }
  .close-icon {
    background-color: #199589;
    padding: 12px;
    position: absolute;
    right: 35px;
    top: 40px;
    color: #fff;
    font-size: 25px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .second-div {
    position: absolute;
    left: 50%;
    top: 23%;
    transform: translate(-50%, 50%);
    background-color: #fff;
    padding: 4%;
    width: 340px;
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }
  .second-div p {
    border-radius: 5px;
    background-color: rgba(217, 217, 217, 0.5);
    padding: 4%;
    font-weight: 600;
  }
  .second-div .links {
    display: flex;
    justify-content: space-between;
    margin: 5% 1px;
  }
  .second-div .links span {
    text-decoration: none;
    color: #2b2b2b;
    font-size: 16px;
    cursor: pointer;
  }
  .second-div .links .right-icon {
    color: #199589;
    height: 20px;
  }
  .third-div {
    position: absolute;
    top: 430px;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 20px 15px;
    background-color: #f4f4f4;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 342px;
    height: 129px;
  }
  #p {
    font-size: 16px;
    font-weight: 600;
    padding: 15px 2px;
  }
  .third-div .chat {
    display: flex;
    gap: 7px;
  }
  .third-div .chat .circle {
    width: 44px;
    height: 44px;
    background: #1c8633;
    border-radius: 50%;
  }
  .third-div .chat .tchat p {
    font-size: 15px;
    font-weight: 500;
  }
  .fourth-div {
    position: absolute;
    bottom: 120px;
    width: 380px;
    height: 67px;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, 50%);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .fourth-div .form {
    position: absolute;
    top: 0;
    width: 97%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: baseline;
    right: 0;
  }
  
  .fourth-div .form input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  .fourth-div .form button {
    border: none;
    background-color: #fff;
    height: 85%;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  
  .send-icon {
    text-decoration: none;
    color: #199589;
    font-size: 30px;
  }
  .fifth-div {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 72px;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  .icons {
    color: #199589;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 1px;
  }
  
  /*----------------ChatPage-------------------*/
  .chat_Page {
    position: absolute;
    width: 390px;
    height: 844px;
    left: 50%;
    transform: translateX(-50%);
  }
  .chat_component {
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 560px;
  }
  .chat-div1 {
    background-color: #00c8b4;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px 3%;
  }
  .chat-div1 p {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  .chat-div2 {
    padding: 3%;
  }
  .chat-div3 {
    display: flex;
    gap: 5px;
    padding: 3%;
  }
  .chat-div3 p {
    max-width: 65%;
    background-color: #ebebeb;
    border: 0px solid #ebebeb;
    border-radius: 0px 10px 10px 10px;
    padding: 3%;
  }
  .chat-div4 {
    width: auto;
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .chat-div4 p {
    background-color: #ebebeb;
    border: 0px solid #ebebeb;
    border-radius: 10px 0px 10px 10px;
    padding: 13px;
    margin: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-self: right;
    max-width: 70%;
  }
  .chat-div5 {
    position: absolute;
    bottom: 108px;
    width: 380px;
    height: 67px;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, 50%);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chat-div5 .form {
    position: absolute;
    width: 97%;
    display: flex;
    height: 100%;
    align-items: center;
  }
  
  .form input {
    border: none;
    width: 80%;
    font-weight: 400;
    font-size: 16px;
    color: #000;
    height: 85%;
    border: none;
    outline: 0;
    font-family: "Inter";
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
  }
  
  .chat-div5 .form input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  .chat-div5 .form button {
    border: none;
    background-color: #fff;
    height: 85%;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  
  .form button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  
  /*----------------Help Page-----------*/
  .accordion-div {
    padding: 2% 4%;
  }
  .accordion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 10px;
  }
  .item {
    margin-bottom: 5px;
    padding: 10px 20px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
  }
  .content {
    color: rgb(83, 15, 15);
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }
  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }
  
  @media screen and (max-width: 1500px) {
    .homepage {
      height: 90vh;
      margin: 0 30px 60px 0;
    }
    .chat_Page {
      height: 100%;
    }
    .chat_component {
      height: 55.9%;
    }
    .second-div {
      top: 20px;
      height: 160px;
    }
    .third-div {
      top: 255px;
      height: 80px;
    }
    .fourth-div {
      bottom: 108px;
    }
  
    .content.show {
      height: auto;
      max-height: 200px !important;
      overflow: scroll;
      transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    }
  }
  @media screen and (min-height: 1700px) {
    .homepage {
      height: 844px;
    }
    .chat_component {
      position: relative;
      overflow-y: scroll;
      overflow-x: hidden;
      height: 470px;
    }
    .second-div {
      top: 23%;
    }
    .third-div {
      top: 460px;
      height: 100px;
    }
  }
  
  @media screen and (max-width: 450px) {
    .homepage {
      height: 100%;
      width: 100%;
      margin: 0;
    }
    .chat_Page {
      width: 100vw;
      height: 100vh;
    }
    .chat_component {
      height: 63%;
    }
  
    .second-div {
      top: 30px;
    }
    .third-div {
      top: 300px;
      height: 80px;
    }
  }
  
`;
