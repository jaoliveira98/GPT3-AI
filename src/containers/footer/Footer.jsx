import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const footerLinks = [
  {
    title: "Links",
    content: [
      {
        paragraph: "Overons",
        link: "#",
      },
      {
        paragraph: "Social Media",
        link: "#",
      },
      {
        paragraph: "Counters",
        link: "#",
      },
      {
        paragraph: "Contact",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    content: [
      {
        paragraph: "Company",
        link: "#",
      },
      {
        paragraph: "Terms & Conditions",
        link: "#",
      },
      {
        paragraph: "Privacy Policy",
        link: "#",
      },
    ],
  },
  {
    title: "Get in touch",
    content: [
      {
        paragraph: "Crechterwoord K12 182 DK Alknjkcb",
        link: null,
      },
      {
        paragraph: "085-132567",
        link: null,
      },
      {
        paragraph: "info@payme.net",
        link: null,
      },
    ],
  },
];

function FooterLinks({ title, content }) {
  return (
    <div className="gpt3__footer-links_div">
      <h4>{title}</h4>
      {content.map((item, index) => (
        <p key={index}>{item.paragraph}</p>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        {footerLinks.map((item, index) => (
          <FooterLinks key={index} title={item.title} content={item.content} />
        ))}
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
