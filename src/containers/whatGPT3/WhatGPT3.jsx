import React from "react";
import "./whatgpt3.css";
import Feature from "../../components/feature/Feature";

const data = [
  {
    title: "Chatbots",
    text: "Chatbots are computer programs designed to simulate conversation with human users, often used in customer service and online support.",
  },
  {
    title: "Knowledgebase",
    text: "A centralized repository of information and data that can be accessed and shared across an organization, allowing for efficient information management and sharing.",
  },
  {
    title: "Education",
    text: "The process of acquiring knowledge through formal instruction or practical experience, aimed at developing the intellectual and personal abilities.",
  },
];

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Hey there, have you heard about GPT3 AI? It's like having your very own personal assistant, except it never sleeps, gets tired, or complains about how much work you're giving it! This bad boy can handle everything from writing essays to coding programs to generating memes - seriously, it's like having a Swiss Army knife for your brain. So if you want to boost your productivity and have some fun while you're at it, give GPT3 AI a try. It might just become your new best friend (sorry, human friends!)."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {data.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default WhatGPT3;
