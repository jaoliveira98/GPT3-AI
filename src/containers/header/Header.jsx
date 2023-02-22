import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import Robot from "../../components/robot/Robot";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Your Intelligent Companion for Everything!
        </h1>
        <p>
          Whether you're looking for information on a specific topic, need help
          with a task, or just want to chat with a friendly AI, NexusAI is here
          to help.
        </p>
        <form className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </form>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <Robot />
      </div>
    </div>
  );
}

export default Header;
