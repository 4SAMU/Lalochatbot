import { useState } from "react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const HelpPage = (props: any) => {
  const { closeApp } = props;
  const [selected, setSelected] = useState(null);

  function toggle(i: any) {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  }

  const data = [
    {
      question: "How Is Lamu?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    },
    {
      question: "What Is Lalo?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    },
    {
      question: "Why should I use Lalo?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    },
    {
      question: "Now I have Lalo then?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident imilique accusantium nemo autem. Veritatis  obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam  nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    },
  ];

  return (
    <div>
      <div className="chat-div1">
        <Link to="/">
          <IoIosArrowBack style={{ color: "#fff", fontSize: "35px" }} />
        </Link>
        <p style={{ fontSize: "20px" }}>Frequently Asked Questions</p>
        <IoMdClose
          style={{ color: "#fff", fontSize: "35px", cursor: "pointer" }}
          onClick={closeApp}
        />
      </div>
      <div className="accordion-div">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" key={i}>
              {" "}
              {/* add key prop */}
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HelpPage;
